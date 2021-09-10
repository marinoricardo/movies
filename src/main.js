import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "../node_modules/bulma/css/bulma.css"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// require("./src/assets/main.scss");

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
