const state = {
  psdList: []
}

const mutations = {
  UPDATA_PSD_LIST (state, data) {
    state.psdList = data
    console.log('state.psdList', state.psdList)
  }
}

const actions = {
  // someAsyncTask ({ commit }) {
  //   commit('INCREMENT_MAIN_COUNTER')
  // }
}

export default {
  state,
  mutations,
  actions
}
