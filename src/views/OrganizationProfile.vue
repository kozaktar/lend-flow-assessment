<template>
    <div>
        {{userId}}
    </div>
</template>

<script>
// import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "StudentProfile",

  components: {

  },

  setup() {
    // const store = useStore();
    const route = useRoute();
    const userId = computed(() => route.params.studentId);
    // const student = computed(() => store.getters["Students/studentById"](userId.value));
    



    return {
      userId
    };
  },
};
</script>

<style lang="scss" scoped>

</style>