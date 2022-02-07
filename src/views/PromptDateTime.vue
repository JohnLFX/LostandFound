<template>
  <div>
    <v-dialog
        v-model="dateDialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
            icon
            color="info"
            v-bind="attrs"
            v-on="on"
        >
          mdi-pencil
        </v-icon>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Select Event Date
        </v-card-title>

        <v-card-text class="text-center">
          <br/>
          <v-date-picker v-model="date"></v-date-picker>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
              color="secondary"
              text
              @click="closeDialogs"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="closeDialogs(); timeDialog = true;"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="timeDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Select Event Time
        </v-card-title>

        <v-card-text class="text-center">
          <br/>
          <v-time-picker
              v-model="time"
              format="ampm"
          ></v-time-picker>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
              color="secondary"
              text
              @click="closeDialogs"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="closeDialogs(); emitSelectedEventTime();"
          >
            Finish
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PromptDateTime",
  data() {
    return {
      dateDialog: false,
      timeDialog: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      time: new Date().getHours() + ':' + new Date().getMinutes(),
    };
  },
  methods: {
    emitSelectedEventTime() {
      //console.log(this.date); = 2021-08-26
      //console.log(this.time); = 22:00
      let jsDate = new Date(this.date + ' ' + this.time); // TODO Fix epoch calculation, this way is device-dependent
      let epoch = jsDate.getTime() / 1000;
      this.$emit('dateTimeSelected', epoch);
    },
    closeDialogs() {
      this.dateDialog = false;
      this.timeDialog = false;
    }
  },
  components: {},
}
</script>

<style scoped>

</style>