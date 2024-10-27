import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import { ROUTES_DEFINITIONS } from "./route-definitions";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES_DEFINITIONS,
});

export default router;
