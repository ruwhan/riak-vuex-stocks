import stocks from '../../data/stocks';

const state = {
  stocks: []
};

// = reducers
// modify state in store
const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RANDOMIZE_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (Math.random() + 0.5))
    });
  }
};

const actions = {
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('RANDOMIZE_STOCKS');
  }
}

const getters = {
  stocks: state => {
    return state.stocks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}