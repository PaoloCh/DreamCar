import { createRouter, createWebHistory } from "vue-router";
import GrillaView from "../prestamos/pages/tus-planes/grilla.component.vue";
import Login from "../login/components/Login.vue";
import Register from "../register/components/Register.vue";
import Details from "../prestamos/pages/detalles/details.component.vue";
import IniciarPagoView from "../prestamos/pages/iniciar-plan-pago/iniciar_plan_pago.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: "/details/:id",
      name: "details",
      component: Details,
    },
    {
      path: '/plan-pago',
      name: 'plan-pago',
      component: IniciarPagoView
    },
    {
      path: "/tus-planes",
      name: "tus-planes",
      component: GrillaView,
    },
    {
      path: "/",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
