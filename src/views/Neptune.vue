<template>
  <div class="planets">
    <main>
      <Planet planet_name="Neptune" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Neptune",
  components: {
    Planet,
  },
};
</script>
