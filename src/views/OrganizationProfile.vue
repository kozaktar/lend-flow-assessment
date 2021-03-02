<template>
    <div>
        {{org.login}}
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "OrgProfile",

  components: {

  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const orgId = computed(() => route.params.id);
    const org = computed(() => store.getters["orgById"](orgId.value));
    



    return {
      orgId,
      org
    };
  },
};
</script>

<style lang="scss" scoped>

</style>