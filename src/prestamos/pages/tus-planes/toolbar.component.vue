<script>
export default {
  name: "toolbar-grilla-section",
}
</script>

<template>
  <header class="header">
    <pv-toolbar class="background-primary">

      <template #start>
        <h3>Bienvenido usuario</h3>
      </template>

      <!-- BOTON DEL TOOLBAR -->
      <template #end>
        <div class="flex-column">
          <router-link to="/" custom v-slot="{ navigate, href }">
            <pv-button
                label="Cerrar Sesión"
                class="button-primary"
                icon="pi pi-sign-out"
                :href="href"
                @click="navigate"
            />
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
</template>

<style>

  .background-primary {
    background: linear-gradient(0deg, #1E5DFF 0%, #1E5DFF 100%);
    color: white;
  }

  .button-primary {
    background: linear-gradient(0deg, #1E5DFF 0%, #1E5DFF 100%);
  }

  .header {
    background-color: #1E5DFF;
  }

</style>