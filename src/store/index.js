import { createStore } from "vuex";
import { INCREMENT_MUTATION } from "./mutation-types";

import users from "./modules/users";

export default createStore({
  state() {
    return {
      count: 0,
      shuki: 10
    };
  },
  mutations: {
    [INCREMENT_MUTATION](state, payload) {
      state.count += payload;
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  actions: {
    incrementCountBy10({ commit }) {
      // fetch from server
      commit(INCREMENT_MUTATION, 10);
    }
  },
  modules: {
    users
  }
});
