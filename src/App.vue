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

/* Planet component */

section {
  display: grid;
}
h4,
button,
li {
  font-family: Spartan, sans-serif;
  font-weight: 700;
}

/* ----------Section planet-------------- */
.planet {
  position: relative;
  grid-row-gap: 6rem;
  text-align: center;
}
/* buttons area */
.buttons {
  display: grid;
  height: 3rem;
  grid-template-columns: repeat(3, 5rem);
  justify-content: space-around;
  border-bottom: 1px solid var(--base-color-transparent);
}
button {
  font-size: 0.5625rem; /* 9px */
  line-height: 0.625rem; /* 10px */
  text-align: center;
  letter-spacing: 0.1rem; /* 1.92857px */
  border: none;
  background: transparent;
  color: var(--base-color);
  opacity: 0.5; /*  */
}
/* button:hover {
  cursor: pointer;
  color: var(--base-color);
  background: var(--base-color-transparent);
  opacity: 1;
} */
button:focus-visible {
  border: none;
}
/* image area */
.planet img {
  margin: 0 auto;
}
/* planet description area */
.planet-description {
  padding: 0 1.5rem; /* 24px */
}
.planet-description h1 {
  font-size: 2.5rem;
  font-weight: 400;
}
.planet-description p {
  font-size: 0.6875rem; /* 11px */
  letter-spacing: 1px;
  line-height: 1.375rem; /* 22px */
}
.planet-description p {
  margin-top: 2rem;
  margin-bottom: 2.5rem;
}
.planet-description p:last-child {
  margin-bottom: 0;
}
.planet-description p a {
  font-weight: 700;
  text-decoration: underline;
  opacity: 0.5;
}
.planet-description span {
  font-size: 0.75rem; /* 12px */
  color: var(--base-color-transparent);
}
.planet-description p img {
  margin-left: 5px;
  margin-bottom: -2px;
}

/* ---------Section planet statistics---------*/
.planet-statistics {
  margin-top: 1.75rem;
  padding: 0 1.5rem; /* 24px */
  display: grid;
  grid-row-gap: 0.5rem;
}
.planet-statistics div {
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 3rem;
  align-items: center;
  height: 3rem;
  border: 1px solid var(--base-color-transparent);
}
.planet-statistics div h4 {
  font-size: 0.5rem; /* 8px */
  line-height: 1rem; /* 16px */
  justify-self: start;
  opacity: 0.5;
}
.planet-statistics div strong {
  font-size: 1.25rem; /* 20px */
  font-weight: 400;
  line-height: 1.625rem; /* 26px */
  letter-spacing: -0.75px;
  justify-self: end;
}
</style>
