<template>
  <div v-if="!loading" class="flex flex-col">
     <img
        :src="org2.avatar_url"
        alt=""
        class="object-contain h-20 rounded-full ring-1 ring-gray-300 mx-auto mt-10"
      />
      <p class="mx-auto">{{org2.description}}</p>
      <p class="mx-auto">{{org2.name}}:{{org2.login}}</p>
      <p class="mx-auto">{{org2.company}}</p>
      <a class="mx-auto" :href="org2.url">{{org2.url}}</a>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "OrgProfile",

  components: {},

  setup() {
    const store = useStore();
    const route = useRoute();
    const orgId = computed(() => route.params.id);
    const org = computed(() => store.getters.orgById(orgId.value));
    const loading = computed(()=> store.getters.loading);
    const org2=computed(()=>store.getters.getOrg);
    onMounted(store.dispatch('getOrgInfo', {orgLogin:org.value.login}))
    return {
      org,
      loading,
      org2
    };
  },
};
</script>

<style lang="scss" scoped></style>
