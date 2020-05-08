import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
import store from './store'
new Vue({
  store,
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
