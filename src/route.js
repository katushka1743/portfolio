import { createRouter, createWebHistory } from "vue-router";

import mainPage from "./components/mainPage.vue";
import aboutPage from "./components/aboutPage.vue";
import casePage from "./components/casePage.vue";
import skillsPage from "./components/skillsPage.vue";
import contactsPage from "./components/contactsPage.vue";
import error404 from "./components/error404.vue";

const routes = [
  { path: "/portfolio/", component: mainPage, name: "mainPage" },
  { path: "/portfolio/aboutPage", component: aboutPage, name: "aboutPage" },
  { path: "/portfolio/casePage", component: casePage, name: "casePage" },
  { path: "/portfolio/skillsPage", component: skillsPage, name: "skillsPage" },
  { path: "/portfolio/contactsPage", component: contactsPage, name: "contactsPage" },
  { path: '/:pathMatch(.*)*', component: error404, name: 'error404' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});
