<template>
  <div class="planets">
    <main>
      <Planet planet_name="Jupiter" />
    </main>
  </div>
</template>
<script>
import Planet from "@/components/Planet.vue";

export default {
  name: "Jupiter",
  components: {
    Planet,
  },
};
</script>
