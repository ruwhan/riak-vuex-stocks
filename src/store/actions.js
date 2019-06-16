import localforage from "localforage";
import { MAIN_COLLECTION } from "../config";

// this action affects both modules, hence created at root directory
/**
 * Load all data to the vuex state.
 * 
 * @param {Object}  actions 
 * @returns {Promise}
 */
export const loadData = ({ commit }) => {
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
      const { stocks, stockMovement, stocksOwned, funds } = res;
      commit('LOAD_PORTFOLIO', { stocksOwned, funds });
      commit('LOAD_STOCKS', { stocks, stockMovement });
    })
    .catch(err => {
      console.error(err);
    });
}

/**
 * Save all data in the vuex state.
 * 
 * @param {actions}
 * @returns {Promise}
 */
export const saveData = ({ state, dispatch }) => {
  const { stocks, portfolio, ui } = state;
  return localforage.clear()
    .then(() => {
      return localforage.setItem(MAIN_COLLECTION, {
        ...stocks,
        ...portfolio
      });
    })
    .then(() => dispatch('showSuccessMessage'));
}
