import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistence from 'vuex-persist'
import modProvider from './provider/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    provider: modProvider
  },
  plugins: [(new vuexPersistence({
    storage: window.localStorage
  })).plugin]
})
