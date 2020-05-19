export const actions = {
  nuxtClientInit({ commit, dispatch }) {
    dispatch('cart/initStateFromLocalStorage')
  },
}
