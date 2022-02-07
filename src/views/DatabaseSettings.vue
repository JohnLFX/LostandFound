<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="table_data"
        sort-by="calories"
        class="elevation-1"
        style="margin: 1%;"
    >
      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-toolbar-title><b>Manage Databases</b></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog
              v-model="dialogNew"
              max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">New Database</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                    v-model="newDatabaseName"
                    label="New Database Name"
                    hide-details="auto"
                    single-line
                    outlined
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="submitCreateDB"
                >
                  Create
                </v-btn>
              </v-card-actions>
            </v-card>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  :disabled="!$store.getters.databaseAPI"
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-database-plus</v-icon>&nbsp;New Database
              </v-btn>
            </template>
          </v-dialog>

          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          v-model="editedDatabase.name"
                          label="Database name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-chip
                          v-for="(tag, index) in editedDatabase.tags" :key="index"
                          class="ma-1"
                          close
                          :color="tag ? tag.color : ''"
                          text-color="white"
                          @click:close="editedDatabase.tags = editedDatabase.tags.filter(t => t !== tag)"
                      >
                        {{ tag.text }}
                      </v-chip>
                      <i v-if="!editedDatabase.tags || editedDatabase.tags.length === 0">No Tags Available</i>
                    </v-col>
                    <v-col>
                      <v-text-field
                          v-model="newTagName"
                          label="New Tag Name"
                          hide-details="auto"
                          single-line
                          outlined
                          dense
                      ></v-text-field>
                      <v-color-picker
                          dot-size="25"
                          flat
                          hide-canvas
                          hide-inputs
                          hide-mode-switch
                          hide-sliders
                          show-swatches
                          @input="updateNewTagColor"
                          value="black"
                          :swatches-max-height="newTagName ? 75 : 0"
                      ></v-color-picker>
                      <v-btn
                          color="primary"
                          tile
                          x-small
                          :disabled="!newTagName"
                          @click="submitNewTag"
                      >Add Tag
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete">
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete&nbsp;<b>{{ actionDB ? actionDB.name : 'this database' }}</b>?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="success"
    >
      <div style="text-align: center;">{{ snackbar_message }}</div>
    </v-snackbar>
  </div>
</template>

<script>
import {ItemTag} from "@/assets/objects";
import {EventBus} from "@/plugins/bus";

export default {
  name: "DatabaseSettings",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogNew: false,
    snackbar: false,
    snackbar_message: '',
    timeout: 3000,
    headers: [
      {
        text: 'Database Name',
        align: 'start',
        value: 'name',
      },
      {text: 'Item Count', value: 'item_count'},
      {text: 'Users', value: 'users'},
      {text: 'Tags', value: 'tags', sortable: false},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    editedIndex: -1,
    newDatabaseName: '',
    newTagColor: '',
    newTagName: '',
    editedDatabase: {
      id: -1,
      name: '',
      tags: [],
      newTags: [],
      users: [],
    },
    defaultDatabase: {
      id: -1,
      name: '',
      tags: [],
      users: []
    },
  }),

  computed: {
    formTitle() {
      return (this.editedIndex === -1 ? 'New Database' : 'Edit Database') + ' (wip - new page needed)'
    },
    actionDB: {
      get: function () {
        return this.table_data[this.editedIndex];
      }
    },
    table_data: {
      get: function () {
        let array = [];
        for (let i = 0; i < this.$store.state.databases.length; i++) {
          let db = this.$store.state.databases[i];
          array.push({
            name: db.name,
            item_count: db.items ? db.items.length : '-',
            tags: db.tags ? db.tags : [],
            users: [],
            id: db.id,
          });
        }
        return array;
      }
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.close()
    },
  },

  methods: {
    updateNewTagColor(event) {
      // event variable is expected to be a hex color
      this.newTagColor = event;
    },
    submitNewTag() {
      let tag = new ItemTag('', this.newTagName, -1, this.newTagColor);
      this.editedDatabase.tags.push(tag);
      this.editedDatabase.newTags.push(tag);
      this.newTagName = '';
    },
    editItem(item) {
      this.editedIndex = this.table_data.indexOf(item);
      this.editedDatabase.id = item.id;
      this.editedDatabase.name = item.name;
      this.editedDatabase.tags = [];
      for (let i = 0; i < item.tags.length; i++) {
        let t = item.tags[i];
        this.editedDatabase.tags.push(new ItemTag(t.icon, t.text, t.id, t.color));
      }
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.table_data.indexOf(item);
      this.editedDatabase = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.close();
      let toDeleteDBID = this.actionDB.id;
      this.$store.getters.databaseAPI.deleteDatabase(toDeleteDBID)
          .then(() => {
            this.snackbar_message = 'Deleted Successfully';
            this.snackbar = true;
            let dbList = this.$store.state.databases.filter(db => db.id !== toDeleteDBID);
            this.$store.commit('updateDatabases', dbList);
          }).catch((e) => {
        this.$store.commit('updateError', {
          exception: e,
          title: 'Failed to delete database',
          message: e.message
        });
      }).finally(() => {
        //this.saving_item = false; //TODO Loading indicator
      });
    },

    close() {
      this.dialog = false;
      this.dialogDelete = false;
      this.dialogNew = false;
      this.$nextTick(() => {
        this.editedDatabase = Object.assign({}, this.defaultDatabase)
        this.editedIndex = -1
      })
    },
    submitCreateDB() {
      this.dialogNew = false;
      this.$store.getters.databaseAPI.createDatabase(this.newDatabaseName)
          .then(() => {
            this.snackbar_message = 'Create Successfully';
            this.snackbar = true;
            EventBus.$emit('database-created-event', this.newDatabaseName);
          }).catch((e) => {
        this.$store.commit('updateError', {
          exception: e,
          title: 'Failed to create database',
          message: e.message
        });
      }).finally(() => {
        //this.saving_item = false; //TODO Loading indicator
      });
    },
    save() {
      this.close();

      let deletedTagIDs = [];
      for (let i = 0; i < this.actionDB.tags.length; i++) {
        let tag = this.actionDB.tags[i];
        let foundTag = false;
        for (let j = 0; j < this.editedDatabase.tags.length; j++) {
          if (this.editedDatabase.tags[j].id === tag.id) {
            foundTag = true;
            break;
          }
        }
        if (!foundTag) {
          deletedTagIDs.push(tag.id);
        }
      }

      console.log('deleted tags', deletedTagIDs)
      console.log('new tags', this.editedDatabase.newTags);

      Promise.all([
        this.$store.getters.databaseAPI.deleteTags(this.actionDB.id, deletedTagIDs),
        this.$store.getters.databaseAPI.storeTags(this.actionDB.id, this.editedDatabase.newTags)
      ]).then(() => {
        this.snackbar_message = 'Updated Successfully';
        this.snackbar = true;
      }).catch((e) => {
        this.$store.commit('updateError', {
          exception: e,
          title: 'Failed to update database',
          message: e.message
        });
      }).finally(() => {
        //this.saving_item = false; //TODO Loading indicator
      });

    },
  },
}
</script>

<style scoped>

</style>