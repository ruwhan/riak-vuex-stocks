import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vlf from 'vlf'
import VModal from 'vue-js-modal'

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vlf);
Vue.use(VModal);

Vue.http.options.root = 'https://vue-stock-trader-41a5b.firebaseio.com/';

// Have it here because Header and Home components use it
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
