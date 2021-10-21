<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
/* Css reset */
@import url("./styles/reset.css");
/* Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap");

/* Base styles */

:root {
  --base-color: #e5eff5;
  --base-color-transparent: rgba(229, 239, 245, 0.25);
  --background-color: #070724;
  --mercury-color: #419ebb;
  --venus-color: #eda249;
  --earth-color: #6d2ed5;
  --mars-color: #d14c32;
  --jupiter-color: #d83a34;
  --saturn-color: #cd5120;
  --uranus-color: #1ec1a2;
  --neptune-color: #2d68f0;
}

html,
body {
  font-family: "Spartan", sans-serif;
  font-size: 16px;
  color: var(--base-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url("assets/background-stars.svg"), var(--background-color);
  background-attachment: fixed;
}
#app {
  width: 100%;
  max-width: 375px; /* mobile first */
  margin: 0 auto;
  padding: 1em;
}
.planets {
  margin: 0 auto;
}
a {
  color: var(--base-color);
  text-decoration: none;
}
a .router-link-exact-active:not(#brand) {
  color: #fff;
}
h1,
h4,
strong,
button,
#brand,
li {
  text-transform: uppercase;
}
h1,
#brand,
strong {
  font-family: Antonio, sans-serif;
}
/* Tablet design */
@media (min-width: 768px) {
  #app {
    max-width: 768px;
  }
}
/* Desktop design */
@media (min-width: 1080px) {
  #app,
  .planets,
  main {
    width: 100%;
    max-width: 1440px;
    max-height: 100vh;
    /* margin: 0 auto; */
  }
  /* Navbar: merge brand and list */
  #app > div:first-child {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    border-bottom: 1px solid var(--base-color-transparent);
  }
}
</style>
