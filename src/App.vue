<template>
  <v-app>
    <v-app-bar
        dark
        fixed
        app
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-toolbar-title>
        <router-link style="text-decoration: none; color: inherit;" to="/"> <!-- TODO Logo -->
          Lost and Found
        </router-link>
      </v-toolbar-title>

      <!--
       class="d-flex d-sm-none" //Add this class to show menu icon only on small screen
       class="d-none d-sm-flex" //Add this class to show tabs only on medium screen and above
      -->

      <v-spacer></v-spacer>
      <ConnectorNavbarIcon></ConnectorNavbarIcon>
      <AccountNavbarIcon></AccountNavbarIcon>
      <DBNavbarIcon></DBNavbarIcon>
    </v-app-bar>

    <v-main>
      <v-alert
          v-if="getErrorTitle() != null"
          dense
          icon="mdi-database-alert"
          text
          outlined
          color="deep-orange"
          style="margin: 1%;"
      >
        <v-expansion-panels tile flat accordion>
          <v-expansion-panel style="background-color: transparent;">
            <v-expansion-panel-header>
              <span><b>{{ getErrorTitle() }}</b></span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ getErrorMessage() }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-btn
            x-small
            right
            fixed
            rounded
            color="info"
            @click="resetError()"
        >Dismiss
        </v-btn>
      </v-alert>
      <router-view class="router-view"></router-view>
    </v-main>
    <v-footer dark padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Lost and Found</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import DBNavbarIcon from "@/views/DBNavbarIcon";
import ConnectorNavbarIcon from "@/views/ConnectorNavbarIcon";
import AccountNavbarIcon from "@/views/AccountNavbarIcon";

export default {
  name: 'App',
  components: {AccountNavbarIcon, ConnectorNavbarIcon, DBNavbarIcon},
  data() {
    return {}
  },
  methods: {
    resetError() {
      this.$store.commit('updateError', {exception: null, title: null, message: null});
    },
    getErrorTitle() {
      return this.$store.state.error.title;
    },
    getErrorMessage() {
      return this.$store.state.error.message;
    }
  }
};
</script>
<style scoped>
.router-view {
  margin-top: 10px;
}
</style>
