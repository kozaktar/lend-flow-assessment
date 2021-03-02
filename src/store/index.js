import { createStore } from "vuex";
import axios from "axios";



export default createStore({
  state: {
    gitOrgs: null,
    apiError:null,
    loading:true,
    pagination:null
  },

  getters: {
    allOrgs: (state) => {
      return state.gitOrgs;
    },
    apiError: (state) => {
      return state.apiError;
    },
    loading: (state) => {
      return state.loading;
    },
    orgById: (state) =>(id)=> {
      const org=state.gitOrgs.find(org=>org.id===id);
      return org;
    },
  },

  mutations: {
    SET_ORGANIZATIONS(state, orgs) {
      state.gitOrgs = orgs;
    },
    SET_ERROR(state, error) {
      state.apiError = error;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_PAGINATION(state, nextPage) {
      state.nextPage=nextPage
    },
  },

  actions: {
    getOrganizations({ commit }) {
      let url=`https://api.github.com/organizations`
      commit("SET_LOADING", true);
      axios
        .get(
          url
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          commit("SET_PAGINATION", response.headers.link.split(";"))
          commit("SET_ORGANIZATIONS", response.data);
          commit("SET_LOADING", false);
        })
        .catch((e) => {
          commit("SET_ERROR", e.message);
          commit("SET_LOADING", false);
        });
    },
  },

  modules: {},
});
