import Vue from 'vue'
import App from './App.vue'

import './utils/plugins'
import store from './store'

// Global Component
import DataTable from './components/organisms/DataTable'
Vue.component('DataTable', DataTable)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
