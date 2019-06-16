// To manage app general UI state.
// e.g. alert message on save
import { HIDE_SUCCESS_MESSAGE, SHOW_SUCCESS_MESSAGE } from "../constants";

const state = {
  successMessageShown: false,
}

const mutations = {
  [SHOW_SUCCESS_MESSAGE] (state) {
    state.successMessageShown = true;
  },
  [HIDE_SUCCESS_MESSAGE] () {
    state.successMessageShown = false;
  }
}

const actions = {
  showSuccessMessage: ({ commit }, timeout = 1500) => {
    commit(SHOW_SUCCESS_MESSAGE);
    setTimeout(() => {
      commit(HIDE_SUCCESS_MESSAGE);
    }, timeout);
  },
}

const getters = {
  successMessageShown: (state) => {
    return state.successMessageShown;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
