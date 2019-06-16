import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import ui from './modules/ui';
import * as actions from './actions';

Vue.use(Vuex);

// = combineReducers in redux
export default new Vuex.Store ({
  actions,
  modules: {
    stocks,
    portfolio,
    ui,
  }
})