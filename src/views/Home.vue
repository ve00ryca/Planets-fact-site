<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-html="svg"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      svg: "",
    };
  },

  /* props: {
    name: {
        type: String,
        required: true
    }
} */

  created() {
    this.svg = require(`src/assets/background-stars.svg`);
  },
};
</script>
