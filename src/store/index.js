import { createStore } from "vuex";
import axios from "axios";



export default createStore({
  state: {
    gitOrgs: null,
    apiError:null,
    loading:true,
    pagination:null,
    org:null
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
    getOrg: (state) => {
      console.log('getting org!!!!!')
      return state.org;
    },
    orgById: (state) =>(id)=> {
      return state.gitOrgs.find(org => org.id == id);

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
    SET_ORG(state, org){
      state.org = org
    },
    CLEAR_ORG(state){
      state.org=null
    }  
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
    getOrgInfo({ commit }, payload){
      console.log(payload);
      const url=`https://api.github.com/orgs/${payload.orgLogin}`;
      commit("SET_LOADING", true);
      axios
        .get(
          url
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          commit("SET_ORG", response.data);
          console.log('company:',response.data)
          commit("SET_LOADING", false);
        })
        .catch((e) => {
          commit("SET_ERROR", e.message);
          commit("SET_LOADING", false);
        });

    }
  },

  modules: {},
});
