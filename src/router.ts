import Vue from "vue";
import Router from "vue-router";
import { Route } from "vue-router/types/router";

import {
  HomePage,
  AboutPage,
  WithComponentsPage
} from "@/views";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { title: "VueJS Typescript Starter Kit" },
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: { title: "VueJS Typescript Starter Kit - About" },
    },
    {
      path: "/todos",
      name: "todos",
      component: WithComponentsPage,
      meta: { title: "VueJS Typescript Starter Kit - Components" },
    },
  ]
});

// puts the meta title as window title.
router.beforeEach((to: Route, _: Route, next) => {
  document.title = to.meta.title;
  next();
})

export default router;