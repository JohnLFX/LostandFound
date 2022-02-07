<template>
  <v-btn
      v-if="refreshing_databases"
      title="Loading Database List"
      disabled
      icon>
    <v-icon>mdi-database-sync</v-icon>
  </v-btn>
  <v-menu v-else offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          :disabled="databaseAPI == null"
      >
        <v-icon>mdi-database</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item link @click="dbSettingsAction">
        <v-list-item-icon>
          <v-icon>mdi-database-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link v-for="db in databases"
                   :key="db.id" @click="selectDatabaseAction(db.id)">
        <v-list-item-icon>
          <v-icon>mdi-database</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ db.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import router from "@/router";
import {EventBus} from "@/plugins/bus";

export default {
  name: "DBNavbarIcon",
  data() {
    return {
      refreshing_databases: false,
    }
  },
  created() {
    EventBus.$on('database-created-event', () => {
      this.refreshList();
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.refreshList();
    });
  },
  computed: {
    databases: {
      get: function () {
        return this.$store.state.databases;
      }
    },
    databaseAPI: {
      get: function () {
        return this.$store.getters.databaseAPI;
      }
    },
  },
  watch: {
    databaseAPI() {
      this.refreshList();
    }
  },
  methods: {
    refreshList() {
      if (this.databaseAPI == null) // No connector available
        return;

      if (this.refreshing_databases) // Already refreshing
        return;

      this.refreshing_databases = true;
      this.$store.getters.databaseAPI.listDatabases()
          .then((databases) => {
            this.$store.commit('updateDatabases', databases);
            if (databases.length === 0) {
              this.dbSettingsAction(); // Automatically redirect to db management screen if no db
            }
          }).catch((e) => {
        this.$store.commit('updateError', {
          exception: e,
          title: 'Failed to refresh database list',
          message: e.message
        });
      }).finally(() => {
        this.refreshing_databases = false;
      });
    },
    selectDatabaseAction(id) {
      // noinspection EqualityComparisonWithCoercionJS
      if (this.$route.query.db != id) {
        router.push({path: '/', query: {db: id}})
      }
      /*let db = this.$store.getters.getDatabaseById(id);
      if(db) {
        this.$store.commit('updateSelectedDatabase', db);
      }*/
    },
    dbSettingsAction() {
      if (this.$route.path !== '/db_settings') {
        router.push('/db_settings');
      }
    }
  }
}
</script>

<style scoped>

</style>