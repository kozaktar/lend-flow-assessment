<template>
  <div class="flex flex-col w-full">
    <form @submit.prevent="search" class="w-1/2 my-10 mx-auto">
      <div class="flex">
        <input
          class="w-full my-10 mx-auto px-3 border-b-2 focus:outline-none"
          placeholder="Search by Name"
          v-model="query"
        />
        <button v-if="searchResult" class="h-1 w-1 mt-10 ml-5" @click="clearSearch">Clear</button>
      </div>
    </form>
    <div v-if="!loading && searchResult?.id" class="mx-auto">
      <OrgDisplay :organization="searchResult" />
    </div>
    <div class="grid grid-cols-2 gap-1 px-40 pb-10" v-else-if="!loading">
      <OrgDisplay v-for="org in gitOrgs" :organization="org" :key="org.id" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed} from "vue";
import OrgDisplay from "../components/OrgDisplay";

export default {
  name: "Home",

  components: {
    OrgDisplay,
  },

  setup() {
    const store = useStore();
    const gitOrgs = computed(() => store.getters["allOrgs"]);

    const loading = computed(() => store.getters["loading"]);

    const query = ref("");

    const search = () =>
      store.dispatch("getOrgInfo", { orgLogin: query.value });

    const searchResult = computed(() => store.getters.getOrg);

    const clearSearch = ()=>store.commit("CLEAR_ORG");

    // onMounted(store.commit("CLEAR_ORG"));

    return {
      gitOrgs,
      query,
      loading,
      search,
      searchResult,
      clearSearch
    };
  },
};
</script>
