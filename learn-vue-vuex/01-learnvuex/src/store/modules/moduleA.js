export default {
  state: {
    name: 'LiLy'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context){
      context.commit('updateName','BOb')
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11'
    },
    fullname2(state,getters) {
      return getters.fullname + '22'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.counter
    }
  }
}
