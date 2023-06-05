import { createRouter, createWebHistory } from "vue-router";

// Home = vidéo au lancement
import HomeView from "../views/HomeView.vue";

// Index
import IndexView from "../views/IndexView.vue";

// About
import AboutView from "@/views/About/AboutView.vue";
import Team from "@/views/About/TeamView.vue";
import Project from "@/views/About/ProjectView.vue";
import Contact from "@/views/About/ContactView.vue";

// Contribute
import ContributeView from "@/views/Contribute/ContributeView.vue";
import Member from "@/views/Contribute/MemberView.vue";
import Donate from "@/views/Contribute/DonateView.vue";
import Newsletter from "@/views/Contribute/NewsletterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/index",
    name: "index",
    component: IndexView,
  },
  {
    path: "/inventory",
    name: "inventory",
    // route level code-splitting
    // this generates a separate chunk (inventory.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "inventory" */ "../views/InventoryView.vue"),
  },
  {
    path: "/excursion",
    name: "excursion",
    // route level code-splitting
    // this generates a separate chunk (inventory.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "inventory" */ "../views/ExcursionView.vue"),
  },
  {
    path: "/about",
    name: "about",
    redirect: "/about/team", // Ajoutez cette ligne pour la redirection initiale
    component: AboutView,
    children: [
      {
        path: "team",
        name: "team",
        component: Team,
      },
      {
        path: "project",
        name: "project",
        component: Project,
      },
      {
        path: "contact",
        name: "contact",
        component: Contact,
        meta: {
          route: "/about/contact",
        },
      },
    ],
  },
  {
    path: "/contribute",
    name: "contribute",
    redirect: "/contribute/member", // Ajoutez cette ligne pour la redirection initiale
    component: ContributeView,
    children: [
      {
        path: "member",
        name: "member",
        component: Member,
        meta: {
          route: "/contribute/member",
        },
      },
      {
        path: "donate",
        name: "donate",
        component: Donate,
      },
      {
        path: "newsletter",
        name: "newsletter",
        component: Newsletter,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
