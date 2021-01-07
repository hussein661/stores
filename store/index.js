export const state = () => ({
  cacheVersion: '',
  lang:''
})

export const mutations = {
  setCacheVersion (state, version) {
    state.cacheVersion = version
  },
  setLang(state,lang){
    state.lang = lang
  }
}

export const actions = {
  loadCacheVersion ({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
      commit('setCacheVersion', res.data.space.version)
    })
  }
}
