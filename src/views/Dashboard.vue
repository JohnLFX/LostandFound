<template>
  <div>
    <div v-if="!this.database" class="no-item-alert">
      <v-alert
          border="top"
          colored-border
          type="info"
          elevation="2"
      >
        <p>No database selected</p>
        In the navigation menu, top right:
        <ol>
          <li>First choose your
            <v-icon>mdi-connection</v-icon>
            connection
          </li>
          <li>Then, choose your
            <v-icon>mdi-database</v-icon>
            database
          </li>
        </ol>
      </v-alert>
    </div>
    <div v-else>
      <v-card v-if="refreshing_items" flat class="d-flex align-center justify-center">
        <v-progress-circular indeterminate :size="30" color="primary" class="page-loader"></v-progress-circular>
        <v-card-subtitle>Loading Items</v-card-subtitle>
      </v-card>
      <div v-else>
        <v-app-bar
            dense
            flat
            rounded
            class="item-navbar"
        >
          <v-btn
              color="primary"
              small
              style="margin-right: 20px"
              @click="newItemAction()"
              :disabled="items.some(i => i.id < 0)"
          >
            <v-icon
                left
                dark
            >
              mdi-plus
            </v-icon>
            Item
          </v-btn>
          <v-text-field
              v-model="search_query"
              hide-details
              flat
              dense
              clearable
              style="max-width: 250px;"
              placeholder="Search">
            <v-icon slot="prepend-inner">
              mdi-magnify
            </v-icon>
          </v-text-field>
          <TagSelectorCombobox style="margin-left: 20px; padding-right: 20px;" display_label="Tag Filter"
                               :tag_selection="[]" :available_tags="this.database.tags"
                               @tagListChange="updateTagList"></TagSelectorCombobox>
          <v-spacer></v-spacer>
          <v-select
              placeholder="View As"
              disabled
              flat
              solo
              dense
              hide-details
              outlined
              v-model="view_as"
              :items="view_methods"
              style="max-width: 110px; margin-right: 15px;"
          ></v-select>
          <v-select
              placeholder="Sort By"
              flat
              solo
              outlined
              dense
              hide-details
              v-model="sort_by"
              :items="sort_method_names"
              style="max-width: 120px"
          ></v-select>
        </v-app-bar>
        <div
            v-if="items && (items.length > 0 || this.database && this.database.items && this.database.items.length > 0)">
          <v-alert
              text
              dense
              type="info"
              class="item-navbar-info-alert"
          >Showing {{ items.length }} out of {{ this.database.items.length }} items
            <!--
            <ul>
              <li v-if="search_query">
                <v-icon color="info" small style="margin-top: -4px;">mdi-magnify</v-icon>
                Contains "{{ search_query }}" in the title
              </li>
              <li v-for="(tag, index) in search_tags" :key="index">
                <v-icon color="info" small style="margin-top: -4px;">{{ tag.icon }}</v-icon>
                {{ tag.text }}
                <v-btn color="warning" style="margin-top: -3px;" x-small icon dark
                       @click="search_tags = search_tags.filter(t => !t.equals(tag))">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </li>
            </ul>
            -->
          </v-alert>
          <v-layout wrap>
            <ItemView
                v-for="item in items.slice(items_per_page * (page - 1), items_per_page * page)"
                :key="item.id"
                :item="item"
                :database="database"
                @exitEditMode="items = items.filter(i => i.id >= 0)"
                @itemSaved="itemSavedEvent"
                @itemDeleted="itemDeletedEvent"
            />
          </v-layout>
          <div class="text-center">
            <v-pagination
                v-if="items.length > items_per_page"
                color="primary"
                v-model="page"
                :length="items.length / items_per_page"
            ></v-pagination>
          </div>
        </div>
        <div v-else class="no-item-alert">
          <v-alert
              border="top"
              colored-border
              type="info"
              elevation="2"
          >
            There are no items in {{ this.database ? (this.database.name) : ('this database') }}
          </v-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemView from './ItemView.vue'
import {Item} from "@/assets/objects";
import TagSelectorCombobox from "@/views/TagSelectorCombobox";

export default {
  name: "Dashboard",
  components: {
    TagSelectorCombobox,
    ItemView
  },
  data() {
    return {
      page: 1,
      items_per_page: 20,
      items: [],
      refreshing_items: false,
      sort_by: null,
      sort_methods: [
        {
          name: 'A-Z',
          comparator: function (a, b) {
            return a.title.toString().localeCompare(b.title.toString());
          }
        },
        {
          name: 'Z-A',
          comparator: function (a, b) {
            return b.title.toString().localeCompare(a.title.toString());
          }
        },
      ],
      view_as: null,
      view_methods: [
        'Cards',
        'Table',
      ],
      search_query: null,
      search_tags: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchItems();
    });
  },
  computed: {
    database: {
      get: function () {
        if (this.$store.state.databases.length === 1) {
          return this.$store.state.databases[0]; // If we only have one database, just use that one
        } else {
          let id = parseInt(this.$route.query.db);
          if (!isNaN(id)) {
            console.log('Selected DB ID: ' + id);
            return this.$store.getters.getDatabaseById(id);
          }
        }
        return null;
      }
    },
    sort_method_names: {
      get: function () {
        let names = [];
        for (let i = 0; i < this.sort_methods.length; i++) {
          let method = this.sort_methods[i];
          names.push(method.name);
        }
        return names;
      }
    }
  },
  watch: {
    database: function (db) {
      if (db) {
        // Items are null, we need to populate them
        this.fetchItems();
      }
    },
    sort_by: function (method_name) {
      let method = this.sort_methods.find(m => m.name === method_name);
      if (method) {
        this.items.sort(method.comparator);
      }
    },
    search_query: function () {
      this.processFilters();
    },
    search_tags: function () {
      this.processFilters();
    }
  },
  methods: {
    fetchItems() {
      if (!this.$store.getters.databaseAPI || !this.database) // No database API or database active
        return;

      if (this.refreshing_items) // Already refreshing
        return;

      console.log('Fetching items');

      this.page = 1;
      this.refreshing_items = true;
      this.search_query = null;
      this.search_tags = null;
      this.$store.getters.databaseAPI.populateDetails(this.database)
          .then((db) => {
            this.$store.commit('updateDatabaseEntry', db);
            this.processFilters();
          }).catch((e) => {
        this.$store.commit('updateError', {exception: e, title: 'Failed to refresh items', message: e.message});
      }).finally(() => {
        this.refreshing_items = false;
      });
    },
    processFilters() {
      console.log('update filters');
      this.page = 1;
      this.items = !this.database ? [] : (!this.database.items ? [] : this.database.items.slice(0)); // Shallow array copy
      if (this.search_query) {
        let needle = this.search_query.toLowerCase();
        this.items = this.database.items.filter(i => i.title.toLowerCase().includes(needle));
      }
      if (this.search_tags) {
        for (let i = 0; i < this.search_tags.length; i++) {
          let filteredTag = this.search_tags[i];
          this.items = this.items.filter(item => {
            for (let j = 0; j < item.tags.length; j++) {
              let tag = item.tags[j];
              if (tag.equals(filteredTag)) {
                return true;
              }
            }
            return false;
          });
        }
      }
    },
    updateTagList(tags) {
      console.log(tags);
      if (tags) {
        this.search_tags = tags;
      } else {
        this.search_tags = [];
      }
      /*if (!this.search_tags) {
        this.search_tags = [];
      }
      this.search_tags = this.search_tags.filter(t => !t.equals(tag));
      this.search_tags.push(tag);*/
    },
    itemSavedEvent(item) {
      console.log('itemSavedEvent', item);
      let foundItem = false;
      for (let i = 0; i < this.database.items.length; i++) {
        if (this.database.items[i].id === item.id) {
          this.database.items[i] = item;
          foundItem = true;
          break;
        }
      }
      if (!foundItem) {
        this.database.items.unshift(item);
      }
      foundItem = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === item.id) {
          this.items[i] = item;
          foundItem = true;
          break;
        }
      }
      if (!foundItem) {
        this.items.unshift(item);
      }
    },
    itemDeletedEvent(item) {
      console.log('itemDeletedEvent', item);
      this.database.items = this.database.items.filter(i => i.id !== item.id);
      this.items = this.items.filter(i => i.id !== item.id);
    },
    newItemAction() {
      this.page = 1;
      let newItem = new Item();
      // Make it the smallest item ID
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id < newItem.id) {
          newItem.id = this.items[i].id - 1;
        }
      }
      this.items.unshift(newItem);
    }
  }
}
</script>

<style scoped>
.item-navbar-info-alert {
  margin-left: 2%;
  margin-right: 2%;
  font-size: small;
}

.item-navbar {
  background-color: transparent !important;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-bottom: 5px;
}

.no-item-alert {
  margin: 30px 1%;
  justify-content: center;
  display: flex;
}

.page-loader {
  justify-content: center;
}
</style>