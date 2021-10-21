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
    <!-- navigation for mobile devices -->
    <ul
      class="nav"
      id="hamburgerMenu"
      v-if="!isHiddenHamburgerButton && !isHiddenHamburgerMenu"
    >
      <li
        v-for="planet in planets"
        :key="planet.name"
        :planet_name="planet.name"
      >
        <router-link :to="getPath(planet.name)" :planet_name="planet.name">
          <div class="planet-color-circle"></div>
          <div class="planet-name">{{ planet.name }}</div>
          <img class="chevron" src="@/assets/icon-chevron.svg" />
        </router-link>
        <!--  <router-link
          :to="{ name: 'Home', params: { planet_name: planet.name } }"
          :planet_name="planet.name"
        > -->
      </li>
    </ul>
    <!-- navigation for tablet and desktop devices -->
    <ul
      class="nav"
      id="desktopNav"
      v-if="isHiddenHamburgerButton && isHiddenHamburgerMenu"
    >
      <li
        v-for="planet in planets"
        :key="planet.name"
        :planet_name="planet.name"
      >
        <router-link :to="getPath(planet.name)" :planet_name="planet.name">
          {{ planet.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import planetsService from "@/services/planetsService.js";
export default {
  name: "NavBar",
  data() {
    return {
      planets: [],
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
      window.addEventListener("resize", this.toggleHamburgerButton);
    });
  },
  /** Hide the hamburger button on tablet and desktop devices */
  beforeDestroy() {
    window.removeEventListener("resize", this.toggleHamburgerButton);
  },
  /** Hide the hamburger button on tablet and desktop devices */
  methods: {
    toggleHamburgerButton() {
      if (window.innerWidth >= 768) {
        this.isHiddenHamburgerButton = true;
      } else {
        this.isHiddenHamburgerButton = false;
      }
    },
    /* The path equals the planet name for all planet view except for Mercury, where the path is the home page */
    getPath(name) {
      return name == "Mercury" ? "/" : "/" + name;
    },
  },
  created() {
    planetsService
      .getPlanets()
      .then((response) => {
        this.planets = response.data;
      })
      .catch((error) => {
        console.log(`An error occured: ${error}`);
      });
    this.toggleHamburgerButton();
  },
};
</script>

<style scoped>
/* Navigation for mobile devices */
.nav {
  width: 100%;
  padding: 0 1.5rem; /* 24px */
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
  font-size: 1.75rem; /* 28px */
  font-weight: 400;
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
/* Tablet and desktop design */
@media (min-width: 768px) {
  #navbar {
    border: none;
    text-align: center;
  }
  #desktopNav {
    height: 3.6rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: center;
    justify-items: center;
    border-bottom: 1px solid var(--base-color-transparent);
  }
  #desktopNav li {
    width: 100%;
    height: 100%;
    font-size: 0.7rem; /* 11px */
    line-height: 1.6rem; /* 25px */
    text-align: center;
    padding: 1.05rem;
  }
  #desktopNav li .router-link-exact-active:not(#brand),
  #desktopNav li .router-link-active:not(#brand) {
    opacity: 0.9 !important;
  }
  /*  #navbar #brand {
    text-align: center;
  }
  #desktopNav a {
    opacity: 0.7;
  }
  #desktopNav li:hover a {
    opacity: 1;
  } */
}
</style>
