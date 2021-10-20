<template>
  <div class="planets">
    <main>
      <Planet planet_name="Venus" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Venus",
  components: {
    Planet,
  },
};
</script>
