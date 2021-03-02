<template>
<div>
    <div class="flex flex-row pt-5 px-3 mx-auto">
      <img
        :src="organization.avatar_url"
        alt=""
        class="object-contain h-10 rounded-full ring-1 ring-gray-300 mr-3 mt-2"
      />
      <div id="orgInfo" class="text-left">
        <router-link to="/"
          ><h1 class="text-md font-bold text-blue-500">{{ organization.login }}</h1></router-link
        >
        <p>{{ organization.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "orgdisplay",
  props: {
    organization: {
      type: Object,
      required: true,
    },
  },

  setup() {

    return {
     
    };
  },
};
</script>

<style scoped>

</style>
