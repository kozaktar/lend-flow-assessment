import { createStore } from "vuex";
import axios from "axios";



export default createStore({
  state: {
    gitOrgs: null,
    displayedOrg: null,
    apiError:null,
    loading:true,
    pagination:null
  },

  getters: {
    allOrgs: (state) => {
      return state.gitOrgs;
    },
    displayedOrg: (state) => (id) => {
      const student = state.students.find((student) => student.id === id);
      return student;
    },
    apiError: (state) => {
      return state.apiError;
    },
    loading: (state) => {
      return state.loading;
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
          console.log(response)
          const links=response.headers.link.split(";")
          console.log(links[0].substring(1, links[0].length-1))
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
