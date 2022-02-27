import Vue from 'vue';
require('./bootstrap');
import './assets/css/styles.scss';

import router from './router';
import App from './App.vue';
import store from './store';
import * as types from './store/mutation-types';
import MasonryWall from '@yeger/vue2-masonry-wall'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch('getAllCategories');
  },
});

Vue.use(MasonryWall)