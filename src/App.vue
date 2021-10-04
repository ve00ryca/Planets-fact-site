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

/* Variables */
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

/* Base styles */
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

h1,
h2,
h3,
h4,
button,
#brand,
li {
  text-transform: uppercase;
}
h1,
h2,
#brand {
  font-family: Antonio, sans-serif;
  font-weight: 500;
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 2.5rem;
  letter-spacing: -1.5px;
}
h3,
h4,
button,
li {
  font-family: Spartan, sans-serif;
  font-weight: 700;
}
h3,
button {
  font-size: 0.75rem;
  letter-spacing: 2.6px;
}
button {
  font-family: Spartan, sans-serif;
  font-weight: 500;
  mix-blend-mode: normal;
  opacity: 0.2;
  border: 1px solid var(--base-color);
}
button span {
  font-weight: 700;
  letter-spacing: 2.57143px;
  opacity: 0.5;
}
h4 {
  font-size: 0.6875rem;
  letter-spacing: 1px;
}

a {
  color: var(--base-color);
  text-decoration: none;
}
a .router-link-exact-active:not(#brand) {
  color: #fff;
}
</style>
