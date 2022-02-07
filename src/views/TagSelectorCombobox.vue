<template>
  <v-combobox
      hide-details
      v-model="model"
      :filter="filter"
      :hide-no-data="!search"
      :items="items"
      :search-input.sync="search"
      hide-selected
      :label="label"
      flat
      dense
      multiple
      small-chips
  >
    <template v-slot:no-data>
      <v-list-item>
        <span class="subheading"><i>No tag found</i></span>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attrs, item, parent, selected }">
      <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :color="item.color"
          text-color="white"
          :input-value="selected"
          label
          small
      >
          <span class="pr-2">
            <v-icon small v-if="item.icon">{{ item.icon }}</v-icon>&nbsp;{{ item.text }}
          </span>
        <v-icon
            small
            @click="parent.selectItem(item)"
        >
          $delete
        </v-icon>
      </v-chip>
    </template>
    <template v-slot:item="{ index, item }">
      <v-chip
          :color="item.color"
          text-color="white"
          label
          small
      >
        <v-icon small v-if="item.icon">{{ item.icon }}</v-icon>&nbsp;{{ item.text }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
//import {ItemTag} from "@/assets/objects";

export default {
  props: ['tag_selection', 'available_tags', 'display_label'],
  emits: ['tagListChange'],
  name: 'TagSelectorCombobox',
  data: () => ({
    label: 'Item Tags',
    activator: null,
    attach: null,
    menu: false,
    model: [],
    items: [],
    x: 0,
    y: 0,
    search: null
  }),
  mounted() {
    if (this.display_label) {
      this.label = this.display_label;
    }
    if (this.available_tags) {
      this.items = this.available_tags;
    } else {
      this.items = [];
    }
    this.model = this.tag_selection;
  },
  watch: {
    model: function (tags) {
      // Kind of a hack, meh. Proper way is to have the model not include invalid tags so the filter is not needed
      // and events are not emitted when "nothing" had changed.
      this.$emit("tagListChange", tags.filter(tag => this.items.includes(tag)));
    }
  },
  methods: {
    filter(item, queryText, itemText) {
      const hasValue = val => val != null ? val : ''

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
    }
  }
}
</script>

<style scoped>

</style>