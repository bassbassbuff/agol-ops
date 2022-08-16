import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrderScan from "../views/OrderScan.vue";
import SafetyInspection from "../views/SafetyInspection.vue";
import Safetyform from "../components/Safetyform.vue";
import LabDetails from "../components/LabDetails.vue";
import Login from "../views/Login.vue";
import LabInspection from "../views/LabInspection.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orderscan",
    name: "OrderScan",
    component: OrderScan,
  },
  {
    path: "/safety-inspection",
    name: "SafetyInspection",
    component: SafetyInspection,
  },
  {
    path: "/safety-checklist/:id",
    name: "Safetyform",
    component: Safetyform,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/lab-inspection",
    name: "LabInspection",
    component: LabInspection,
  },
  {
    path: "/lab-details/:id",
    name: "LabDetails",
    component: LabDetails,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
