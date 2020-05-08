import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const info = () => {
  return [{
    id: 1,
    text: "Hello World"
  }, {
    id: 2,
    text: "Hello World 2"
  }]
}

export default new Vuex.Store({
  state: {
    info: info()
  },
  mutations: {

  },
  actions: {

  }
})