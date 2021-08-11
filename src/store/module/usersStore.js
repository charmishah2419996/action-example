const state = {
    arrayOfUsersList:[]
};
const getters = {
  getUsersList: (state) => state.arrayOfUsersList,
};
const mutations = {
  setArrayOfUsers(state, payload) {
    state.arrayOfUsersList = [...payload];
  },
  
};

const actions = {
  setArrayOFUsersListAction(context, payload) {
    context.commit('setArrayOfUsers', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
