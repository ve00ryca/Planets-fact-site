<template>
  <div class="planets">
    <main>
      <Planet planet_name="Mars" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Mars",
  components: {
    Planet,
  },
};
</script>
