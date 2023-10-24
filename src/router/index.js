import { createRouter, createWebHistory } from "vue-router";
import GrillaView from "../prestamos/pages/tus-planes/grilla.component.vue";
import Login from "../login/components/Login.vue";
import Register from "../register/components/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GrillaView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
