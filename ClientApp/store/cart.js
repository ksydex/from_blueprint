export const state = () => ({
  ids: []
})

export const mutations = {
  SET_IDS(state, payload) {
    state.ids = payload
  },
  ADD_ID(state, id) {
    if (!state.ids.includes(id))
      state.ids = [...state.ids, id]
    saveToLocalStorage(state.ids)
  },
  REMOVE_ID(state, id) {
    state.ids = state.ids.filter(_id => _id !== id)
    saveToLocalStorage(state.ids)
  },
}

export const actions = {
  initStateFromLocalStorage({ commit }) {
    commit('SET_IDS', getFromLocalStorage())
  },
  addId({ commit }, id) {
    commit('ADD_ID', id)
  },
  removeId({ commit }, id) {
    commit('REMOVE_ID', id)
  },
}

export const getters = {
  GET_IDS: state => state.ids
}

const idsLocalstorage = 'card_ids'

function saveToLocalStorage(ids) {
  localStorage.setItem(idsLocalstorage, JSON.stringify(ids))
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem(idsLocalstorage)) || []
}
