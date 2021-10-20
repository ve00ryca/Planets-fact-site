<template>
  <div class="planets">
    <main>
      <Planet planet_name="Saturn" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Saturn",
  components: {
    Planet,
  },
};
</script>
