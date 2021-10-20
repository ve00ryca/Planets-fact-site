<template>
  <div>
    <section class="planet">
      <div class="buttons">
        <button
          id="overview"
          @click="setTopic('overview')"
          :class="{
            overviewButtonMercury:
              topic == 'overview' && planet_name == 'Mercury',
            overviewButtonVenus: topic == 'overview' && planet_name == 'Venus',
            overviewButtonEarth: topic == 'overview' && planet_name == 'Earth',
            overviewButtonMars: topic == 'overview' && planet_name == 'Mars',
            overviewButtonJupiter:
              topic == 'overview' && planet_name == 'Jupiter',
            overviewButtonSaturn:
              topic == 'overview' && planet_name == 'Saturn',
            overviewButtonUranus:
              topic == 'overview' && planet_name == 'Uranus',
            overviewButtonNeptune:
              topic == 'overview' && planet_name == 'Neptune',
          }"
        >
          overview
        </button>
        <button
          id="structure"
          @click="setTopic('structure')"
          :class="{
            overviewButtonMercury:
              topic == 'structure' && planet_name == 'Mercury',
            overviewButtonVenus: topic == 'structure' && planet_name == 'Venus',
            overviewButtonEarth: topic == 'structure' && planet_name == 'Earth',
            overviewButtonMars: topic == 'structure' && planet_name == 'Mars',
            overviewButtonJupiter:
              topic == 'structure' && planet_name == 'Jupiter',
            overviewButtonSaturn:
              topic == 'structure' && planet_name == 'Saturn',
            overviewButtonUranus:
              topic == 'structure' && planet_name == 'Uranus',
            overviewButtonNeptune:
              topic == 'structure' && planet_name == 'Neptune',
          }"
        >
          structure
        </button>
        <button
          id="geology"
          @click="setTopic('geology')"
          :class="{
            overviewButtonMercury:
              topic == 'geology' && planet_name == 'Mercury',
            overviewButtonVenus: topic == 'geology' && planet_name == 'Venus',
            overviewButtonEarth: topic == 'geology' && planet_name == 'Earth',
            overviewButtonMars: topic == 'geology' && planet_name == 'Mars',
            overviewButtonJupiter:
              topic == 'geology' && planet_name == 'Jupiter',
            overviewButtonSaturn: topic == 'geology' && planet_name == 'Saturn',
            overviewButtonUranus: topic == 'geology' && planet_name == 'Uranus',
            overviewButtonNeptune:
              topic == 'geology' && planet_name == 'Neptune',
          }"
        >
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
    };
  },
  computed: {
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
  },
  created() {
    planetsService
      .getPlanet(this.planet_name)
      .then((response) => {
        this.planet = response.data;
      })
      .catch((error) => {
        console.log(`An error occured ${error.response}`);
        console.log(`Error message: ${error.message}`);
      });
  },
};
</script>

<style>
.overviewButtonMercury {
  border-bottom: 4px solid #419ebb;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonVenus {
  border-bottom: 4px solid #eda249;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonEarth {
  border-bottom: 4px solid #6d2ed5;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonMars {
  border-bottom: 4px solid #d14c32;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonJupiter {
  border-bottom: 4px solid #d83a34;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonSaturn {
  border-bottom: 4px solid #cd5120;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonUranus {
  border-bottom: 4px solid #1ec1a2;
  color: var(--base-color);
  opacity: 1;
}
.overviewButtonNeptune {
  border-bottom: 4px solid #2d68f0;
  color: var(--base-color);
  opacity: 1;
}
/* Adjusts the image size of the planet */
.imageMercury {
  max-width: 33%;
  height: auto;
}
.imageVenus {
  max-width: 43%;
  height: auto;
}
.imageEarth {
  max-width: 48%;
  height: auto;
}
.imageMars {
  max-width: 38%;
  height: auto;
}
.imageJupiter {
  max-width: 73%;
  height: auto;
}
.imageSaturn {
  max-width: 73%;
  height: auto;
}
.imageUranus {
  max-width: 58%;
  height: auto;
}
.imageNeptune {
  max-width: 58%;
  height: auto;
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
</style>
