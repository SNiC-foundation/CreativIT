import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/IndexView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () => import("../views/SpeakersView.vue"),
  },
  {
    path: "/partners",
    name: "partners",
    component: () => import("../views/PartnersView.vue"),
  },
  {
    path: "/program",
    name: "program",
    component: () => import("../views/ProgramView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
