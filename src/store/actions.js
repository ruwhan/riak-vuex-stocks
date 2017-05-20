import Vue from 'vue';

// this action affects both modules, hence created at root directory
export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if(data){
        const { stocks, portfolio, funds } = data;
        commit('LOAD_PORTFOLIO',{portfolio, funds});
        commit('LOAD_STOCKS',stocks);
      }
    })
}