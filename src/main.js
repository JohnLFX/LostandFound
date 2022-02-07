import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import store from './router/store.js'

Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  this.$store.commit('updateError', {
    exception: err,
    title: 'Vue UI Render Error',
    message: info
  });
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
