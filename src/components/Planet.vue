<template>
  <div class="planet-container">
    <section class="planet">
      <div class="buttons">
        <button
          id="overview"
          @click="setTopic('overview')"
          :class="{
            btnActive: topic == 'overview',
            btnMercuryMobile: btnMercuryOverview,
            btnMercuryDesktop: btnMercuryOverviewBgr,
            btnVenusMobile: btnVenusOverview,
            btnVenusDesktop: btnVenusOverviewBgr,
            btnEarthMobile: btnEarthOverview,
            btnEarthDesktop: btnEarthOverviewBgr,
            btnMarsMobile: btnMarsOverview,
            btnMarsDesktop: btnMarsOverviewBgr,
            btnJupiterMobile: btnJupiterOverview,
            btnJupiterDesktop: btnJupiterOverviewBgr,
            btnSaturnMobile: btnSaturnOverview,
            btnSaturnDesktop: btnSaturnOverviewBgr,
            btnUranusMobile: btnUranusOverview,
            btnUranusDesktop: btnUranusOverviewBgr,
            btnNeptuneMobile: btnNeptuneOverview,
            btnNeptuneDesktop: btnNeptuneOverviewBgr,
          }"
        >
          <span v-if="buttonBackground">01</span>
          overview
        </button>
        <button
          id="structure"
          @click="setTopic('structure')"
          :class="{
            btnActive: topic == 'structure',
            btnMercuryMobile: btnMercuryStructure,
            btnMercuryDesktop: btnMercuryStructureBgr,
            btnVenusMobile: btnVenusStructure,
            btnVenusDesktop: btnVenusStructureBgr,
            btnEarthMobile: btnEarthStructure,
            btnEarthDesktop: btnEarthStructureBgr,
            btnMarsMobile: btnMarsStructure,
            btnMarsDesktop: btnMarsStructureBgr,
            btnJupiterMobile: btnJupiterStructure,
            btnJupiterDesktop: btnJupiterStructureBgr,
            btnSaturnMobile: btnSaturnStructure,
            btnSaturnDesktop: btnSaturnStructureBgr,
            btnUranusMobile: btnUranusStructure,
            btnUranusDesktop: btnUranusStructureBgr,
            btnNeptuneMobile: btnNeptuneStructure,
            btnNeptuneDesktop: btnNeptuneStructureBgr,
          }"
        >
          <span v-if="buttonBackground">02</span>
          structure
        </button>
        <button
          id="geology"
          @click="setTopic('geology')"
          :class="{
            btnActive: topic == 'geology',
            btnMercuryMobile: btnMercuryGeology,
            btnMercuryDesktop: btnMercuryGeologyBgr,
            btnVenusMobile: btnVenusGeology,
            btnVenusDesktop: btnVenusGeologyBgr,
            btnEarthMobile: btnEarthGeology,
            btnEarthDesktop: btnEarthGeologyBgr,
            btnMarsMobile: btnMarsGeology,
            btnMarsDesktop: btnMarsGeologyBgr,
            btnJupiterMobile: btnJupiterGeology,
            btnJupiterDesktop: btnJupiterGeologyBgr,
            btnSaturnMobile: btnSaturnGeology,
            btnSaturnDesktop: btnSaturnGeologyBgr,
            btnUranusMobile: btnUranusGeology,
            btnUranusDesktop: btnUranusGeologyBgr,
            btnNeptuneMobile: btnNeptuneGeology,
            btnNeptuneDesktop: btnNeptuneGeologyBgr,
          }"
        >
          <span v-if="buttonBackground">03</span>
          surface
        </button>
      </div>
      <!-- src: in planetName the capital letter is replaced with lower case -->
      <img :src="getImg()" :class="`image${planet.name}`" />
      <img
        v-if="topic == 'geology'"
        :src="require(`@/assets/geology-${planetName}.png`)"
        class="imageGeology"
        :class="`imageGeology${planet.name}`"
      />
      <div class="planet-description">
        <h1>{{ planet.name }}</h1>
        <p>{{ content }}</p>
        <p>
          <span>Source: </span>
          <a :href="source"
            >Wikipedia <img src="../assets/icon-source.svg" alt=""
          /></a>
        </p>
      </div>
    </section>

    <section class="planet-statistics">
      <div>
        <h4>rotation time</h4>
        <strong>{{ planet.rotation }}</strong>
      </div>
      <div>
        <h4>revolution time</h4>
        <strong>{{ planet.revolution }}</strong>
      </div>
      <div>
        <h4>radius</h4>
        <strong>{{ planet.radius }}</strong>
      </div>
      <div>
        <h4>average temp.</h4>
        <strong>{{ planet.temperature }}</strong>
      </div>
    </section>
  </div>
</template>

<script>
import planetsService from "@/services/planetsService.js";
/* receives the prop, makes api call with the prop, and fills the data */
export default {
  name: "Planet",
  props: {
    planet_name: String,
  },
  data() {
    return {
      planet: {},
      topic: "overview",
      buttonBackground: false,
    };
  },
  computed: {
    /* Overview Button: set border-bottom (on mobile) or background (on tablet and desktop)  */
    btnMercuryOverview() {
      return this.topic == "overview" && this.planet_name == "Mercury";
    },
    btnMercuryOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Mercury" &&
        this.buttonBackground
      );
    },
    btnVenusOverview() {
      return this.topic == "overview" && this.planet_name == "Venus";
    },
    btnVenusOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Venus" &&
        this.buttonBackground
      );
    },
    btnEarthOverview() {
      return this.topic == "overview" && this.planet_name == "Earth";
    },
    btnEarthOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Earth" &&
        this.buttonBackground
      );
    },
    btnMarsOverview() {
      return this.topic == "overview" && this.planet_name == "Mars";
    },
    btnMarsOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Mars" &&
        this.buttonBackground
      );
    },
    btnJupiterOverview() {
      return this.topic == "overview" && this.planet_name == "Jupiter";
    },
    btnJupiterOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Jupiter" &&
        this.buttonBackground
      );
    },
    btnSaturnOverview() {
      return this.topic == "overview" && this.planet_name == "Saturn";
    },
    btnSaturnOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Saturn" &&
        this.buttonBackground
      );
    },
    btnUranusOverview() {
      return this.topic == "overview" && this.planet_name == "Uranus";
    },
    btnUranusOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Uranus" &&
        this.buttonBackground
      );
    },
    btnNeptuneOverview() {
      return this.topic == "overview" && this.planet_name == "Neptune";
    },
    btnNeptuneOverviewBgr() {
      return (
        this.topic == "overview" &&
        this.planet_name == "Neptune" &&
        this.buttonBackground
      );
    },
    /* Structure Button: set border-bottom (on mobile) or background (on tablet and desktop)  */
    btnMercuryStructure() {
      return this.topic == "structure" && this.planet_name == "Mercury";
    },
    btnMercuryStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Mercury" &&
        this.buttonBackground
      );
    },
    btnVenusStructure() {
      return this.topic == "structure" && this.planet_name == "Venus";
    },
    btnVenusStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Venus" &&
        this.buttonBackground
      );
    },
    btnEarthStructure() {
      return this.topic == "structure" && this.planet_name == "Earth";
    },
    btnEarthStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Earth" &&
        this.buttonBackground
      );
    },
    btnMarsStructure() {
      return this.topic == "structure" && this.planet_name == "Mars";
    },
    btnMarsStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Mars" &&
        this.buttonBackground
      );
    },
    btnJupiterStructure() {
      return this.topic == "structure" && this.planet_name == "Jupiter";
    },
    btnJupiterStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Jupiter" &&
        this.buttonBackground
      );
    },
    btnSaturnStructure() {
      return this.topic == "structure" && this.planet_name == "Saturn";
    },
    btnSaturnStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Saturn" &&
        this.buttonBackground
      );
    },
    btnUranusStructure() {
      return this.topic == "structure" && this.planet_name == "Uranus";
    },
    btnUranusStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Uranus" &&
        this.buttonBackground
      );
    },
    btnNeptuneStructure() {
      return this.topic == "structure" && this.planet_name == "Neptune";
    },
    btnNeptuneStructureBgr() {
      return (
        this.topic == "structure" &&
        this.planet_name == "Neptune" &&
        this.buttonBackground
      );
    },
    /* Geology Button: set border-bottom (on mobile) or background (on tablet and desktop)  */
    btnMercuryGeology() {
      return this.topic == "geology" && this.planet_name == "Mercury";
    },
    btnMercuryGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Mercury" &&
        this.buttonBackground
      );
    },
    btnVenusGeology() {
      return this.topic == "geology" && this.planet_name == "Venus";
    },
    btnVenusGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Venus" &&
        this.buttonBackground
      );
    },
    btnEarthGeology() {
      return this.topic == "geology" && this.planet_name == "Earth";
    },
    btnEarthGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Earth" &&
        this.buttonBackground
      );
    },
    btnMarsGeology() {
      return this.topic == "geology" && this.planet_name == "Mars";
    },
    btnMarsGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Mars" &&
        this.buttonBackground
      );
    },
    btnJupiterGeology() {
      return this.topic == "geology" && this.planet_name == "Jupiter";
    },
    btnJupiterGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Jupiter" &&
        this.buttonBackground
      );
    },
    btnSaturnGeology() {
      return this.topic == "geology" && this.planet_name == "Saturn";
    },
    btnSaturnGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Saturn" &&
        this.buttonBackground
      );
    },
    btnUranusGeology() {
      return this.topic == "geology" && this.planet_name == "Uranus";
    },
    btnUranusGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Uranus" &&
        this.buttonBackground
      );
    },
    btnNeptuneGeology() {
      return this.topic == "geology" && this.planet_name == "Neptune";
    },
    btnNeptuneGeologyBgr() {
      return (
        this.topic == "geology" &&
        this.planet_name == "Neptune" &&
        this.buttonBackground
      );
    },

    planetName() {
      return this.planet.name.toLowerCase();
    },
    content() {
      if (this.topic == "overview") {
        return this.planet.overview.content;
      } else if (this.topic == "structure") {
        return this.planet.structure.content;
      } else if (this.topic == "geology") {
        return this.planet.geology.content;
      } else {
        console.log("topic is not set");
        return "";
      }
    },
    source() {
      if (this.topic == "overview") {
        return this.planet.overview.source;
      } else if (this.topic == "structure") {
        return this.planet.structure.source;
      } else if (this.topic == "geology") {
        return this.planet.geology.source;
      } else {
        console.log("topic is not set");
        return "";
      }
    },
  },
  methods: {
    setTopic(topic) {
      this.topic = topic;
    },
    getImg() {
      if (this.topic == "overview" || this.topic == "geology") {
        return require(`@/assets/planet-${this.planetName}.svg`);
      } else if (this.topic == "structure") {
        return require(`@/assets/planet-${this.planetName}-internal.svg`);
      } /* else if (this.topic == "geology") {
        return require(`@/assets/geology-${this.planetName}.png`);
      }  */ else {
        console.log("Error in getting image");
        return "";
      }
    },
    windowWidth() {
      if (window.innerWidth >= 768) {
        this.buttonBackground = true;
      } else {
        this.buttonBackground = false;
      }
    },
  },
  created() {
    /* api call */
    planetsService
      .getPlanet(this.planet_name)
      .then((response) => {
        this.planet = response.data;
      })
      .catch((error) => {
        console.log(`An error occured ${error.response}`);
        console.log(`Error message: ${error.message}`);
      });
    /** Set button background on tablet and desktop devices */
    this.windowWidth();
  },
  /** Set button background on tablet and desktop devices */
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.windowWidth);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowWidth);
  },
};
</script>

<style>
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
  opacity: 0.7;
}
button:hover {
  cursor: pointer;
}
button:focus-visible {
  border: none;
  outline: none;
}

/* Active Button: set border-bottom (on mobile) or background (on tablet and desktop)  */
.btnActive {
  color: var(--base-color);
  opacity: 1;
}
.btnMercuryMobile {
  border-bottom: 4px solid var(--mercury-color);
}
.btnVenusMobile {
  border-bottom: 4px solid var(--venus-color);
}
.btnEarthMobile {
  border-bottom: 4px solid var(--earth-color);
}
.btnMarsMobile {
  border-bottom: 4px solid var(--mars-color);
}
.btnJupiterMobile {
  border-bottom: 4px solid var(--jupiter-color);
}
.btnSaturnMobile {
  border-bottom: 4px solid var(--saturn-color);
}
.btnUranusMobile {
  border-bottom: 4px solid var(--uranus-color);
}
.btnNeptuneMobile {
  border-bottom: 4px solid var(--neptune-color);
}
.btnMercuryDesktop,
.btnMercuryDesktop:hover {
  background: var(--mercury-color);
}
.btnVenusDesktop,
.btnVenusDesktop:hover {
  background: var(--venus-color);
}
.btnEarthDesktop,
.btnEarthDesktop:hover {
  background: var(--earth-color);
}
.btnMarsDesktop,
.btnMarsDesktop:hover {
  background: var(--mars-color);
}
.btnJupiterDesktop,
.btnJupiterDesktop:hover {
  background: var(--jupiter-color);
}
.btnSaturnDesktop,
.btnSaturnDesktop:hover {
  background: var(--saturn-color);
}
.btnUranusDesktop,
.btnUranusDesktop:hover {
  background: var(--uranus-color);
}
.btnNeptuneDesktop,
.btnNeptuneDesktop:hover {
  background: var(--neptune-color);
}

/* image area */
.planet img {
  margin: 0 auto;
  height: auto;
}
.imageMercury {
  width: 7rem;
}
.imageVenus {
  width: 9.6rem;
}
.imageEarth {
  width: 10.8rem;
}
.imageMars {
  width: 8rem;
}
.imageJupiter {
  width: 14rem;
}
.imageSaturn {
  width: 16rem;
}
.imageUranus {
  width: 11rem;
}
.imageNeptune {
  width: 10.8rem;
}
.imageGeology {
  position: absolute;
  top: 16rem;
  width: 24%;
  width: 5rem;
}
.imageGeologyMercury,
.imageGeologyVenus,
.imageGeologyEarth,
.imageGeologyMars {
  top: 14rem;
}
.imageGeologySaturn {
  top: 19.2rem;
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
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  font-size: 0.6875rem; /* 11px */
  letter-spacing: 1px;
  line-height: 1.375rem; /* 22px */
  opacity: 0.8;
}
.planet-description p:last-child {
  margin-bottom: 0;
}
.planet-description p a {
  font-weight: 700;
  text-decoration: underline;
  opacity: 0.8;
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
  opacity: 0.7;
}
.planet-statistics div strong {
  font-size: 1.25rem; /* 20px */
  font-weight: 400;
  line-height: 1.625rem; /* 26px */
  letter-spacing: -0.75px;
  justify-self: end;
}

/* Tablet design */
@media (min-width: 768px) {
  .planet {
    margin-top: 6rem;
    grid-template-columns: 1fr 1fr;
  }
  .buttons {
    margin-top: 5rem;
    grid-template-columns: 1fr;
    order: 3;
    width: 17.5rem;
    height: 9.5rem;
    justify-self: end;
    margin-right: 1.5rem;
    border-bottom: none;
  }
  button {
    border: 1px solid var(--base-color-transparent);
    height: 2.5rem; /* 40px */
    text-align: left;
  }
  button:hover {
    color: var(--base-color);
    opacity: 1;
    background: #3f4159;
    border: none;
  }
  button span {
    margin: 0 1rem 0 1.25rem;
    font: "Spartan" 0.5rem;
  }
  .btnActive {
    border: none;
  }
  .planet img {
    grid-area: 1/1/2/3;
  }
  .imageMercury {
    width: 11.5rem !important;
  }
  .imageVenus {
    width: 15.8rem !important;
  }
  .imageEarth {
    width: 17.8rem !important;
  }
  .imageMars {
    width: 13.3rem !important;
  }
  .imageJupiter {
    width: 23rem !important;
  }
  .imageSaturn {
    width: 26rem !important;
  }
  .imageUranus {
    width: 18rem !important;
  }
  .imageNeptune {
    width: 17.8rem !important;
  }
  .imageGeology {
    width: 8rem;
  }
  .imageGeologyMercury {
    top: 6rem;
  }
  .imageGeologyVenus,
  .imageGeologyEarth,
  .imageGeologyMars {
    top: 8rem !important;
  }
  .imageGeologySaturn {
    top: 17.2rem !important;
  }
  .imageJupiter,
  .imageGeologyUranus,
  .imageGeologyNeptune {
    top: 11rem;
  }
  .planet-description {
    text-align: left;
  }
  .planet-description h1 {
    font-size: 3rem !important; /* 48px */
  }
  .planet-statistics {
    height: 5.5rem; /* 88px */
    grid-template-columns: repeat(4, 10.3rem);
    justify-content: space-between;
  }
  .planet-statistics div {
    height: 100%;
    grid-template-columns: 1fr;
    padding: 1rem 0.8rem;
  }
  .planet-statistics div strong {
    font-size: 1.5rem !important; /* 24px */
    justify-self: start;
  }
}
/* Desktop design */
@media (min-width: 1080px) {
  main {
    margin: 0 auto;
    width: 80%;
    max-width: 1000px;
  }
  .planet {
    grid-row-gap: 3rem;
    grid-column-gap: 3rem;
  }
  .buttons,
  .planet-description {
    justify-self: end;
  }
  .buttons {
    width: 21.875rem; /* 350px */
    margin-top: 0;
    margin-right: 0;
    width: 21.875rem; /* 350px */
  }
  button {
    font-size: 0.75rem; /* 12px */
  }
  button span {
    font-size: 0.75rem; /* 12px */
    color: var(--base-color-transparent);
  }

  .planet-description {
    width: 21.875rem; /* 350px */
    padding: 0;
    grid-area: 1/2/2/3;
  }
  .planet-description h1 {
    font-size: 5rem !important; /* 80px */
  }
  .planet-description p,
  .planet-description p a,
  .planet-description span {
    font-size: 0.875rem; /* 14px */
  }
  .planet img {
    grid-area: 1/1/3/2;
    align-self: center;
    margin-top: -5rem;
  }
  .imageMercury {
    max-width: 19.125rem !important;
  }
  .imageVenus {
    max-width: 25rem !important;
  }
  .imageEarth {
    max-width: 28.125rem !important;
  }
  .imageMars {
    max-width: 21rem !important;
  }
  .imageJupiter {
    max-width: 36.375rem !important;
  }
  .imageSaturn {
    max-width: 38rem !important;
  }
  .imageUranus {
    max-width: 28.625rem !important;
  }
  .imageNeptune {
    max-width: 28.125rem !important;
  }
  /*   .imageGeology {
    width: 8rem;
  }
  .imageGeologyMercury {
    top: 6rem;
  }
  .imageGeologyVenus,
  .imageGeologyEarth,
  .imageGeologyMars {
    top: 8rem !important;
  }
  .imageGeologySaturn {
    top: 17.2rem !important;
  }
  .imageJupiter,
  .imageGeologyUranus,
  .imageGeologyNeptune {
    top: 11rem;
  } */
  .planet-statistics {
    grid-template-columns: repeat(4, 20%);
    padding: 0;
  }
}
</style>
