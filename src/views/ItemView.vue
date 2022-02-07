<template>
  <v-form ref="form" onsubmit="return false;" class="mx-auto">
    <v-card
        class="mx-auto mb-4"
        max-width="300px"
    >
      <v-img
          :src="(editing ? item_editable.base64Img : item.base64Img) != null ? (editing ? item_editable.base64Img : item.base64Img) : require('../assets/item_placeholder.png')"
          max-height="200px"
      >
        <template v-if="editing">
          <v-row
              class="fill-height ma-0 image-edit-overlay"
              align="center"
              justify="center"
              @click="$refs.icon_upload.click()"
          >
            <v-icon dark size="64">mdi-camera-outline</v-icon>
            <input id="icon_upload" name="icon_upload" ref="icon_upload"
                   hidden accept="image/*" type="file" @change="processImageUpload"
            />
          </v-row>
        </template>
      </v-img>

      <v-card-title v-if="!editing">{{ item.title }}</v-card-title>
      <v-card-title v-else>
        <v-text-field
            label="Title"
            required
            :rules="[value => !!value || 'Required.']"
            v-model="item_editable.title"
        ></v-text-field>
      </v-card-title>

      <v-card-subtitle>
        <span>{{ formatDate(item.created) }}</span>
        <div v-if="!editing">
          <v-btn
              v-for="(tag, index) in item.tags" :key="index"
              tile
              depressed
              rounded
              x-small
              class="white--text"
              style="margin-right: 5px;float: left;"
              :color="tag.color"
          >{{ tag.text }}
          </v-btn>
          <br v-if="item.tags && item.tags.length > 0"/>
        </div>
        <div v-else>
          <br/>
          <TagSelectorCombobox :tag_selection="item.tags" :available_tags="database.tags"
                               @tagListChange="updateTagList"></TagSelectorCombobox>
        </div>
      </v-card-subtitle>
      <v-card-text v-if="!editing" v-show="item.comment">{{ item.comment }}</v-card-text>
      <v-card-text v-else>
        <v-textarea
            label="Item Comment"
            v-model="item_editable.comment"
            auto-grow
            hide-details
            single-line
            rows="1"
        ></v-textarea>
      </v-card-text>

      <v-card-actions>
        <v-btn v-if="!editing" color="info" @click="enterEditMode()" text>Edit</v-btn>
        <v-btn v-else type="submit" color="primary" :disabled="saving_item || deleting_item" :loading="saving_item"
               @click="save()" text>
          Save
        </v-btn>
        <v-spacer></v-spacer>
        <ConfirmationDialog
            ref="deleteConfirmDialog"
            title="Confirm Deletion"
            description="Are you sure you want to delete this item?"
            @onResult="deleteAction"
        />
        <v-btn color="error" :disabled="deleting_item || saving_item" :loading="deleting_item"
               @click="$refs.deleteConfirmDialog.showDialog()" v-if="editing"
               text>Delete
        </v-btn>
        <v-btn color="blue-grey" @click="exitEditMode()" v-if="editing" :disabled="saving_item || deleting_item" text>
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="success"
    >
      <div style="text-align: center;">{{ snackbar_message }}</div>
    </v-snackbar>
  </v-form>
</template>

<script>

import TagSelectorCombobox from "@/views/TagSelectorCombobox";
import ConfirmationDialog from "@/views/ConfirmationDialog";

export default {
  name: "ItemView",
  props: ['item', 'database'],
  emits: ['exitEditMode', 'itemSaved', 'itemDeleted'],
  data() {
    return {
      saving_item: false,
      deleting_item: false,
      snackbar: false,
      snackbar_message: '',
      timeout: 3000,
      editing: this.item.id < 0, // Automatically enter editing mode for negative item IDs (non-existent)
      item_editable: Object.assign({}, this.item) // Shallow copy
    };
  },
  methods: {
    updateTagList(tags) {
      this.item_editable.tags = tags;
    },
    enterEditMode() {
      this.editing = true;
    },
    exitEditMode() {
      this.editing = false;
      this.$emit("exitEditMode");
    },
    save() {
      if (this.saving_item)
        return;

      if (!this.$refs.form.validate())
        return;

      this.saving_item = true;
      this.$store.getters.databaseAPI.storeItem(this.database.id, this.item_editable)
          .then(() => {
            this.snackbar_message = 'Saved Successfully';
            this.snackbar = true;
            this.exitEditMode();
            this.$emit("itemSaved", this.item_editable);
          }).catch((e) => {
        this.$store.commit('updateError', {
          exception: e,
          title: 'Failed to save item',
          message: e.message
        });
      }).finally(() => {
        this.saving_item = false;
      });
    },
    formatDate(date) {
      let d = new Date(date);
      return d.toLocaleString();
    },
    deleteAction(confirmed) {
      if (confirmed) {
        if (this.deleting_item)
          return;

        this.deleting_item = true;
        this.$store.getters.databaseAPI.deleteItem(this.database.id, this.item_editable.id)
            .then(() => {
              this.snackbar_message = 'Deleted Successfully';
              this.snackbar = true;
              this.exitEditMode();
              this.$emit("itemDeleted", this.item_editable);
            }).catch((e) => {
          this.$store.commit('updateError', {
            exception: e,
            title: 'Failed to delete item',
            message: e.message
          });
        }).finally(() => {
          this.deleting_item = false;
        });
      }
    },
    processImageUpload(event) {
      let vm = this;
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        vm.item_editable.base64Img = reader.result;
      };
      reader.onerror = function (e) {
        this.$store.commit('updateError', {
          exception: e,
          title: 'Failed to process image',
          message: e.message
        });
      };
    }
  },
  components: {ConfirmationDialog, TagSelectorCombobox},
}
</script>

<style scoped>
.image-edit-overlay {
  background-color: rgba(128, 128, 128, 0.2);
}

.image-edit-overlay:hover {
  background-color: rgba(128, 128, 128, 0.6);
  cursor: pointer;
}
</style>