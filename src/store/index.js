import Vue from "vue";
import Vuex from "vuex";

import usersStore from "./module/usersStore";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    usersStore,
  },
});
