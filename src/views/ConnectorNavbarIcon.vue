<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          icon
          v-bind="attrs"
          v-on="on">
        <v-icon :color="databaseAPI == null ? 'error' : ''">mdi-connection</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item dense>
        <v-list-item-content>
          <v-list-item-title><i>Connect to...</i></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="selectConnector(0)">
        <v-list-item-icon>
          <v-icon :color="usingLocalDevice ? 'primary' : ''">mdi-laptop</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Local Device</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link disabled>
        <v-list-item-icon>
          <v-icon>mdi-server-network</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>External Server</v-list-item-title>
          <v-list-item-subtitle><i>To be added</i></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link disabled>
        <v-list-item-icon>
          <v-icon>mdi-school</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>University</v-list-item-title>
          <v-list-item-subtitle><i>To be added</i></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {BrowserStorageDB} from '@/assets/databases/BrowserStorageDB';
import {LFBackendDB} from "@/assets/databases/LFBackendDB";

export default {
  name: "ConnectorNavbarIcon",
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
    },
    usingLFCloud: {
      get: function () {
        return this.databaseAPI instanceof LFBackendDB;
      }
    }
  },
  methods: {
    selectConnector(index) {
      switch (index) {
        case 1:
          console.log('Selected LF Backend Connector');
          this.$store.commit('setDatabaseImplementation', new LFBackendDB());
          break;
        default:
          console.log('Selected Local Device Connector');
          this.$store.commit('setDatabaseImplementation', new BrowserStorageDB());
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>