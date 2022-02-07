<template>
  <v-menu offset-y v-if="databaseAPI != null && !usingLocalDevice">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          icon
          v-bind="attrs"
          v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-login</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {BrowserStorageDB} from "@/assets/databases/BrowserStorageDB";

export default {
  name: "AccountNavbarIcon",
  data() {
    return {}
  },
  computed: {
    databaseAPI: {
      get: function () {
        return this.$store.state.databaseAPI;
      }
    },
    usingLocalDevice: {
      get: function () {
        return this.databaseAPI instanceof BrowserStorageDB;
      }
    }
  }
}
</script>

<style scoped>

</style>