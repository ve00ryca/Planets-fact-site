<template>
  <div class="planets">
    <main>
      <Planet planet_name="Earth" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Earth",
  components: {
    Planet,
  },
};
</script>
