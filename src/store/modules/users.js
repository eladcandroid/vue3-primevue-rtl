export default {
  namespaced: false,
  state: () => ({
    isAdmin: false,
    users: []
  }),
  mutations: {
    SET_ADMIN(state) {
      state.isAdmin = true;
    },
    ADD_USER(state, { user }) {
      state.users.push(user);
    }
  },
  actions: {
    login({ commit }) {
      console.log("LOGIN ACTION");
      commit("SET_ADMIN");
    }
  }
};
