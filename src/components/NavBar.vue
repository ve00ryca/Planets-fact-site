<template>
  <div>
    <div class="nav" id="navbar">
      <router-link to="/" id="brand">THE PLANETS</router-link>
      <div id="hamburger" @click="isHidden = !isHidden">
        <span
          class="hamburger-lines"
          :class="{ 'hamburger-line-top-transform': !isHidden }"
          id="hamburger-line-top"
        ></span
        ><span
          class="hamburger-lines"
          :class="{ 'hamburger-line-middle-transform': !isHidden }"
          id="hamburger-line-middle"
        ></span
        ><span
          class="hamburger-lines"
          :class="{ 'hamburger-line-bottom-transform': !isHidden }"
          id="hamburger-line-bottom"
        ></span>
      </div>
    </div>
    <ul class="nav" id="nav-items" v-if="!isHidden">
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Mercury</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Venus</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Earth</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Mars</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Jupiter</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Saturn</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Uranus</div>
        <div class="shevron"></div>
      </li>
      <li>
        <div class="planet-color-circle"></div>
        <div class="planet-name">Neptune</div>
        <div class="shevron"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isHidden: true,
    };
  },
};
</script>

<style scoped>
/* Navigation bar and navigation list for mobile devices */
.nav {
  width: 90%;
  max-width: 327px;
  margin: 2vh auto;
  background: black;
}
/* Navigation bar with brand and hamburder menu */
#navbar {
  position: relative;
  height: 36px;
  border-bottom: 1px solid var(--base-color);
}
#navbar #brand {
  font-size: 1.75rem;
  letter-spacing: -1.05px;
  text-align: left;
}
#navbar #hamburger {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 36px;
}
#navbar .hamburger-lines {
  content: "";
  position: absolute;
  right: 0;
  width: 24px;
  height: 3px;
  display: block;
  background: var(--base-color);
  transition: 0.5s ease;
}
#navbar #hamburger-line-top {
  top: 27.78%;
}
#navbar #hamburger-line-middle {
  top: 47.22%;
}
#navbar #hamburger-line-bottom {
  top: 66.67%;
}
#navbar .hamburger-line-top-transform {
  transform: rotate(-45deg);
  top: 50% !important;
}
#navbar .hamburger-line-middle-transform {
  width: 1px;
  right: 50% !important;
}
#navbar .hamburger-line-bottom-transform {
  transform: rotate(45deg);
  top: 50% !important;
}

/* Navigation list */
#nav-items {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
