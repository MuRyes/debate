import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slide: 0
  },
  mutations: {
    next (state) {
      state.slide++
      console.log(`slide : ${state.slide}`)
    },

    previous (state) {
      if (state.slide <= 0) {
        return
      }
      state.slide--
      console.log(`slide : ${state.slide}`)
    }
  },
  actions: {
    next ({commit}) {
      commit('next')
    },

    previous ({commit}) {
      commit('previous')
    }
  }
})
