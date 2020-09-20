import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import FindXYZ from "../views/FindXYZ.vue";
import FindBC from "../views/FindBC.vue";
import Getroute from "../views/GetRoute.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/FindXYZ",
    name: "FindXYZ",
    component: FindXYZ
  },
  {
    path: "/FindBC",
    name: "FindBC",
    component: FindBC
  },
  {
    path: "/Getroute",
    name: "Getroute",
    component: Getroute
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
