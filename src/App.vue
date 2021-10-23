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
  animation: bgrAnim 100s linear infinite;
  -webkit-animation: bgrAnim 100s linear infinite;
  -moz-animation: bgrAnim 100s linear infinite;
}
@keyframes bgrAnim {
  0% {
    background-position: 50% 0%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}
@-webkit-keyframes bgrAnim {
  0% {
    background-position: 50% 0%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}
@-moz-keyframes bgrAnim {
  0% {
    background-position: 50% 0%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}
@-o-keyframes bgrAnim {
  0% {
    background-position: 50% 0%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}
@-ms-keyframes bgrAnim {
  0% {
    background-position: 50% 0%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
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
/* Desktop design: calculates all sizes procentually in order to fit into 100vh heigth */
@media (min-width: 1080px) {
  #app,
  .planets {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    /* max-height: 100vh; */
  }
  main {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
  }
  /* Navbar: merge brand and list */
  #app > div:first-child {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    border-bottom: 1px solid var(--base-color-transparent);
  }
}
</style>
