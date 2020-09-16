import Vue from 'vue'
import Vuex from 'vuex'
import namesSelection from './modules/namesSelection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    namesSelection
  }
})
