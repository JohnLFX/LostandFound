<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text>{{ description }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
              color="primary"
              text
              @click="onDecision(true)"
          >
            Confirm
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="secondary"
              text
              @click="onDecision(false)"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmationDialog",
  props: ['title', 'description'],
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    hideDialog() {
      this.dialog = false;
    },
    onDecision(result) {
      this.hideDialog();
      this.$emit('onResult', result)
    }
  }
}
</script>

<style scoped>

</style>