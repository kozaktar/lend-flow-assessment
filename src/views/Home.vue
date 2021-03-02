<template>
  <div class="flex flex-col">
     <input
        class="w-1/2 my-10 mx-auto px-3 border-b-2 focus:outline-none"
        placeholder="Search by Name"
        v-model="query"
      />
    <div class="grid grid-cols-2 gap-1 px-40 pb-10"  v-if="!loading">
      <OrgDisplay v-for="org in gitOrgs" :organization="org" :key="org.id"/>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import OrgDisplay from "../components/OrgDisplay";

export default {
  name: "Home",

  components: {
     OrgDisplay
  },

  setup() {
    const store = useStore();
    const gitOrgs = computed(() => store.getters['allOrgs']);

    const loading = computed(()=> store.getters['loading']);

    const query = ref("");

    // const searchRes = computed(() => {
    //   //   if (query.value.length > 0)
    //   return gitOrgs.value.filter((org) =>
        
    //       org.login.toLowerCase().includes(query.value.toLowerCase())
    //   );
    // });
    return {
      gitOrgs,
      query,
      // searchRes,
      loading
    };
  },
};
</script>