<template>
  <div class="planets">
    <main>
      <Planet planet_name="Uranus" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Uranus",
  components: {
    Planet,
  },
};
</script>
