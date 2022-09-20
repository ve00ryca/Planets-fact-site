import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mercury from "../views/Mercury.vue";
import Venus from "../views/Venus.vue";
import Mars from "../views/Mars.vue";
import Jupiter from "../views/Jupiter.vue";
import Saturn from "../views/Saturn.vue";
import Uranus from "../views/Uranus.vue";
import Neptune from "../views/Neptune.vue";

Vue.use(VueRouter);

const routes = [
  {
    // path: "/:planet_name",

    path: "/mercury",
    name: "Mercury",
    component: Mercury,
  },
  {
    path: "/venus",
    name: "Venus",
    component: Venus,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mars",
    name: "Mars",
    component: Mars,
  },
  {
    path: "/jupiter",
    name: "Jupiter",
    component: Jupiter,
  },
  {
    path: "/saturn",
    name: "Saturn",
    component: Saturn,
  },
  {
    path: "/uranus",
    name: "Uranus",
    component: Uranus,
  },
  {
    path: "/neptune",
    name: "Neptune",
    component: Neptune,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
