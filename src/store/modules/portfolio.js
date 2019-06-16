import { BUY_STOCK, LOAD_PORTFOLIO, SELL_STOCK } from "../constants";

const state = {
  funds: 10000,
  stocksOwned: [],
}

const mutations = {
  [BUY_STOCK] (state, order) {
    const { stockId, stockPrice, quantity } = order;
    const record = state.stocksOwned.find(stock => stock.id == stockId);
    if(record) {
      record.quantity += quantity;
    } else {
      // store only id and quantity
      state.stocksOwned.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity;
  },
  [SELL_STOCK] (state, order) {
    const { stockId, stockPrice, quantity } = order;
    const record = state.stocksOwned.find(stock => stock.id == stockId);
    if(record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocksOwned.splice(state.stocksOwned.indexOf(record),1);
    }
    state.funds += stockPrice * quantity;
  },
  [LOAD_PORTFOLIO] (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocksOwned = portfolio.stocksOwned ? portfolio.stocksOwned : [];
  },
}

const actions = {
  buyStock: ({commit}, order) => {
    commit(BUY_STOCK, order);
  },
  sellStock: ({commit}, order) => {
    commit(SELL_STOCK, order)
  },
}

const getters = {
  // use getters to access getters from another module
  portfolio: (state, getters) => {
    return state.stocksOwned.map(stockOwned => {
      const record = getters.stocks.find(element => element.id === stockOwned.id);
      return {
        id: stockOwned.id,
        quantity: stockOwned.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds: state => state.funds,
  /**
   * Total value of portfolio.
   * 
   * @param {Object}  state
   * @param {Object}  getters
   * @returns { number }
   */
  totalValue: (state, getters) => {
    return getters.portfolio.reduce((sum, item) => {
      return sum += (item.quantity * item.price)
    }, 0);
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}