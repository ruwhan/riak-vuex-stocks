import { ADD_STOCK, END_DAY, LOAD_STOCKS, RANDOMIZE_STOCKS } from "../constants";
import { addStock } from "../../api/stocksAPI";

const state = {
  stocks: [],
  stockMovement: []
};

/**
 * Simulate price change or stock movement.
 * 
 * @param {Integer} stockPrice 
 */
const randomPrice = (stockPrice) => (Math.round(stockPrice * (Math.random() + 0.5)));

// = reducers
// modify state in store
const mutations = {
  [LOAD_STOCKS] (state, { stocks, stockMovement }) {
    state.stocks = stocks;
    state.stockMovement = stockMovement;
  },
  [RANDOMIZE_STOCKS] (state) {
    state.stocks.forEach(stock => {
      stock.price = randomPrice(stock.price);
    });
  },
  [END_DAY] (state) {
    const { stocks, stockMovement } = state;
    // One level copy
    stockMovement.push(stocks.map(item => Object.assign({}, item)));
  },
  /**
   * Mutate the stocks state.
   * 
   * @param {Object} state 
   * @param {Object} newStock 
   */
  [ADD_STOCK] (state, newStock) {
    state.stocks.push(newStock);
  }
};

const actions = {
  initStocks: ({commit}) => {
    commit(LOAD_STOCKS, { stocks, stockMovement })
  },
  randomizeStocks: ({commit}) => {
    commit(RANDOMIZE_STOCKS);
  },
  endDay: ({ commit }) => {
    commit(END_DAY);
    commit(RANDOMIZE_STOCKS);
  },
  /**
   * Persist a new added stock.
   * 
   * @param {Object}  actions
   * @param {Object}  payload
   */
  addStock: ({ state, commit }, payload) => {
    const newStock = {
      id: state.stocks.length + 1,
      name: payload.newStock.name,
      price: randomPrice(100),
    }

    // Call add stock API.
    addStock(newStock)
      .then((result) => {
        const { stocks, stockMovement } = result;
        // Reload stocks and stock movement from storage
        commit(LOAD_STOCKS, { stocks, stockMovement });
      });
  }
}

const getters = {
  stocks: state => {
    return state.stocks;
  },
  /**
   * Get raw daily stock movement data.
   * 
   * @returns {Object}
   */
  movementRaw: state => {
    return state.stockMovement;
  },
  /**
   * Get specific stock movement
   * 
   * @param {Object}  state
   * @param {Object}  getters
   * @returns {[Integer]}
   */
  movementSeriesByStock: (state, getters) => (stockName) => {
    let temp; // Temporary variable to store object found in a loop
    return getters.movementRaw.map(
      (dayArray) => {
        temp = dayArray.find(item => item.name === stockName);
        return temp ? temp.price : 0
      }
    );
  },
  /**
   * Generate series of stock movement, used as line chart data source.
   * 
   * @param {Object}  state
   * @return  {Object}
   */
  movementSeries: state => {
    const { stocks, stockMovement } = state;
    const stockNames = stocks.map(item => item.name); // Get the list of stock names
    let series = [];  // main chart data source, two dimensional arrays
    let singleSeries = [];  // List of specific stock price,
    let labels = [];  // list of x axis labels
    let price = 0;  // the price, single unit of series
    let temp; // store finding

    stockNames.forEach((name) => {
      // Reset singleSeries to be filled with another
      // list of stock price
      singleSeries = [];

      stockMovement.forEach(item => {
        // Find item by name name in stock movement
        // in all available days
        temp = item.find(s => s.name === name);
        
        // Put 0 when the stock is not found in
        // this day of stock movement
        price = temp ? temp.price : 0;
        singleSeries.push(price);
      });

      // Put an array of stock into series
      series.push(singleSeries);
    });


    // Get list of labels filled by day number.
    labels = stockMovement.map((item, index) => `day ${index + 1}`)

    return {
      series,
      labels
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}