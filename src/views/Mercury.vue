<template>
  <div class="planets">
    <main>
      <Planet planet_name="Mercury" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Mercury",
  components: {
    Planet,
  },
};
</script>
