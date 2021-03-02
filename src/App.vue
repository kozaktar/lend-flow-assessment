<template>
  <router-view/>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {

  setup(){
    const store=useStore();

    onMounted(async()=>await store.dispatch("getOrganizations"));
  }
  
}
</script>
<style>
</style>


