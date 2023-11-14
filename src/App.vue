<script >

import {defineComponent} from "vue";
import ToolbarGrillaSection from "@/prestamos/pages/tus-planes/toolbar.component.vue";
import IniciarPagoView from "@/prestamos/pages/iniciar-plan-pago/iniciar_plan_pago.component.vue";
import HeaderView from "@/shared/components/header-section.vue";

export default defineComponent({
  components: {HeaderView, IniciarPagoView, ToolbarGrillaSection}
})
</script>

<template>
  <header-view></header-view>
  <iniciar-pago-view></iniciar-pago-view>
</template>

<style >

</style>
