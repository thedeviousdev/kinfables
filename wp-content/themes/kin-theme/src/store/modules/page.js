import api from '../../api';
import * as types from '../mutation-types';

const createPageSlug = page => {
  let slug = page.link.replace(window.location.protocol + '//' + window.location.host, '');
  page.slug = slug;
  return page;
};

// initial state
const state = {
  recent: [],
  loaded: false,
};

// getters
const getters = {
  allPages: state => state.all,
  allPagesLoaded: state => state.loaded,
  page: state => id => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id);
    return (page[0]) ? page[0] : false;
  },
  pageContent: state => id => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id);
    
    return (page[0]) ? page[0].content.rendered : false;
  },
  somePages: state => limit => {
    if (state.all.length < 1) {
      return false;
    }
    let all = [...state.all];
    return all.splice(0, Math.min(limit, state.all.length));
  },
};

// actions
const actions = {
  getPages({ commit }, { limit }) {
    api.getPages(limit, pages => {
      pages.map((page, i) => {
        pages[i] = createPageSlug(page);
      });

      commit(types.STORE_FETCHED_PAGES, { pages });
      commit(types.PAGES_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
};

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES](state, { pages }) {
    state.recent = pages;
  },

  [types.PAGES_LOADED](state, val) {
    state.loaded = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
