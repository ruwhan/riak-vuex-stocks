import localforage from "localforage";
import { MAIN_COLLECTION } from "../config";

/**
 * Add stock API.
 * 
 * @param {Object} stock 
 * @returns {Promise}
 */
export const addStock = (stock) => {
  return localforage.getItem(MAIN_COLLECTION)
    .then((res) => {
      if (!res) {
        res = {
          stocks: [],
          stockMovement: [],
          funds: 10000,
          stocksOwned: []
        };
      }
      const { stocks, stockMovement, funds, stocksOwned } = res;
      stocks.push(stock);
      return localforage.setItem(MAIN_COLLECTION, {
        stocks,
        stockMovement,
        funds,
        stocksOwned
      });
    });
}
