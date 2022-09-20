<template>
  <div class="home planets">
    <main>
      <Planet planet_name="Earth" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Home",
  components: {
    Planet,
  },
};
</script>
