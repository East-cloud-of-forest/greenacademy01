import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {id:1,title:"첫번째 제목",content:"첫번째 게시글 입니다.",click:0},
      {id:2,title:"두번째 제목",content:"두번째 게시글 입니다.",click:0},
    ]
  },
  getters: {
  },
  mutations: {
    addboard(state, data) {
      state.list.push({
        id: state.list.length + 1,
        title: data.title,
        content: data.content,
        click: 0, 
      })
    },
    clickboard(state, id) {
      state.list[id-1].click++
    }
  },
  actions: {
  },
  modules: {
  }
})
