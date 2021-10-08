<template>
  <div>
    <div class="nav" id="navbar">
      <router-link to="/" id="brand">THE PLANETS</router-link>
      <div
        id="hamburgerButton"
        @click="isHiddenHamburgerMenu = !isHiddenHamburgerMenu"
        v-if="!isHiddenHamburgerButton"
      >
        <span
          class="hamburger-lines"
          :class="{ 'hamburger-line-top-transform': !isHiddenHamburgerMenu }"
          id="hamburger-line-top"
        ></span
        ><span
          class="hamburger-lines"
          :class="{ 'hamburger-line-middle-transform': !isHiddenHamburgerMenu }"
          id="hamburger-line-middle"
        ></span
        ><span
          class="hamburger-lines"
          :class="{ 'hamburger-line-bottom-transform': !isHiddenHamburgerMenu }"
          id="hamburger-line-bottom"
        ></span>
      </div>
    </div>
    <ul
      class="nav"
      id="hamburgerMenu"
      v-if="!isHiddenHamburgerButton && !isHiddenHamburgerMenu"
    >
      <li>
        <router-link to="/">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Mercury</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="mercury" />
        </router-link>
      </li>

      <li>
        <router-link to="/venus">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Venus</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="venus" />
        </router-link>
      </li>
      <li>
        <router-link to="/earth">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Earth</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="earth" />
        </router-link>
      </li>
      <li>
        <router-link to="/mars">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Mars</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="mars" />
        </router-link>
      </li>
      <li>
        <router-link to="/jupiter">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Jupiter</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="jupiter" />
        </router-link>
      </li>
      <li>
        <router-link to="/saturn">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Saturn</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="saturn" />
        </router-link>
      </li>
      <li>
        <router-link to="/uranus">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Uranus</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="uranus" />
        </router-link>
      </li>
      <li>
        <router-link to="/neptune">
          <div class="planet-color-circle"></div>
          <div class="planet-name">Neptune</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" alt="neptune" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isHiddenHamburgerButton: false,
      isHiddenHamburgerMenu: true, // expand and show the list of the menu items
    };
  },
  watch: {
    /* If any of the menu items is clicked, the hamburger menu is hidden and the hamburger "button" changes back its
    standard look (horizontal lines instead of 'X') */
    $route() {
      /*  value must be set here as well; otherwise, in order for the hamb. menu to be shown again, the hamburger button
      would need to be double clicked: */
      this.isHiddenHamburgerMenu = !this.isHiddenHamburgerMenu;
      document
        .getElementById("hamburger-line-top")
        .classList.remove("hamburger-line-top-transform");
      document
        .getElementById("hamburger-line-middle")
        .classList.remove("hamburger-line-middle-transform");
      document
        .getElementById("hamburger-line-bottom")
        .classList.remove("hamburger-line-bottom-transform");
    },
  },

  /** Hide the hamburger button on tablet and desktop devices */
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  /** Hide the hamburger button on tablet and desktop devices */
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  /** Hide the hamburger button on tablet and desktop devices */
  methods: {
    onResize() {
      if (window.innerWidth >= 768) {
        this.isHiddenHamburgerButton = true;
      } else {
        this.isHiddenHamburgerButton = false;
      }
    },
  },
};
</script>

<style scoped>
/* Navigation bar and navigation list for mobile devices */
.nav {
  width: 90%;
  max-width: 327px;
  margin: 2vh auto;
  background: var(--background-color);
}
/* Navigation bar with brand and hamburder button */
#navbar {
  margin-bottom: 0;
  padding-bottom: 3.5rem;
  position: relative;
  height: 36px;
  border-bottom: 1px solid var(--base-color-transparent);
}
#navbar #brand {
  font-size: 1.75rem;
  letter-spacing: -1.05px;
  text-align: left;
}
#navbar #hamburgerButton {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 36px;
}
#navbar #hamburgerButton:hover {
  cursor: pointer;
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

/* Hamburger menu */
#hamburgerMenu {
  margin-top: 0;
  padding: 1.8rem 0;
}

#hamburgerMenu > li > a {
  display: grid;
  grid-template-columns: minmax(20px, 1fr) 14fr minmax(20px, 1fr);
  padding: 1.8rem 0;
  border-bottom: 1px solid var(--base-color-transparent);
}
li:nth-child(8) {
  border-bottom: none !important;
}
.planet-color-circle {
  border-radius: 50%;
}
li:first-child .planet-color-circle,
li:first-child:hover {
  background: var(--mercury-color);
}
li:nth-child(2) .planet-color-circle,
li:nth-child(2):hover {
  background: var(--venus-color);
}
li:nth-child(3) .planet-color-circle,
li:nth-child(3):hover {
  background: var(--earth-color);
}
li:nth-child(4) .planet-color-circle,
li:nth-child(4):hover {
  background: var(--mars-color);
}
li:nth-child(5) .planet-color-circle,
li:nth-child(5):hover {
  background: var(--jupiter-color);
}
li:nth-child(6) .planet-color-circle,
li:nth-child(6):hover {
  background: var(--saturn-color);
}
li:nth-child(7) .planet-color-circle,
li:nth-child(7):hover {
  background: var(--uranus-color);
}
li:nth-child(8) .planet-color-circle,
li:nth-child(8):hover {
  background: var(--neptune-color);
}
.planet-name {
  padding-left: 1rem;
}
img.chevron {
  width: 50%;
  justify-self: right;
}
</style>
