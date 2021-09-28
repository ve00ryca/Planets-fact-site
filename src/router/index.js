import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Venus from "../views/Venus.vue";
import Earth from "../views/Earth.vue";
import Mars from "../views/Mars.vue";
import Jupiter from "../views/Jupiter.vue";
import Saturn from "../views/Saturn.vue";
import Uranus from "../views/Uranus.vue";
import Neptune from "../views/Neptune.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/venus",
    name: "Venus",
    component: Venus,
  },
  {
    path: "/earth",
    name: "Earth",
    component: Earth,
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
