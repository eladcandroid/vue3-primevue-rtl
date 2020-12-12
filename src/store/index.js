import { createStore } from "vuex";

// import users from "./modules/users";

export default createStore({
  state() {
    return {
      count: 0,
      shuki: 10
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
  // modules: {
  //   users
  // }
});
