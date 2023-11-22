<script>
import { defineComponent } from "vue";
import ToolbarGrillaSection from "@/prestamos/pages/tus-planes/toolbar.component.vue";
import IniciarPagoView from "@/prestamos/pages/iniciar-plan-pago/iniciar_plan_pago.component.vue";
import HeaderView from "@/shared/components/header-section.vue";
import Login from "./login/components/Login.vue";
import Register from "./register/components/Register.vue";
import router from "./router";

export default defineComponent({
  components: {
    HeaderView,
    IniciarPagoView,
    ToolbarGrillaSection,
    Login,
    Register,
    router
},
});
</script>

<template>
  <header-view v-if="!['login', 'register'].includes($route.name)"/>
  <router-view></router-view>
</template>

<style></style>
