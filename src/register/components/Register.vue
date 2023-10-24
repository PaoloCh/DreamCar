<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/user";

const nombreUsuario = ref("");
const nombre = ref("");
const apellido = ref("");
const password = ref("");
const repeatPassword = ref("");
const dni = ref("");

const userStore = useUserStore();

const register = () => {
  userStore.register(nombreUsuario.value, password.value);
};
</script>

<template>
  <div class="text-white bg-red-500 flex">
    <div class="w-5 border-1">Acá irá la imagen</div>
    <div class="w-5 border-1">
      <h1>Sign Up</h1>

      <form class="flex flex-column" @submit.prevent="register">
        <label>Nombre de Usuario</label>
        <input type="text" v-model="nombreUsuario" />

        <label>Nombre</label>
        <input type="text" v-model="nombre" />

        <label>Apellido</label>
        <input type="text" v-model="apellido" />

        <label>Contraseña</label>
        <input type="text" v-model="password" />

        <label>Confirmar Contraseña</label>
        <input type="text" v-model="repeatPassword" />

        <label>DNI</label>
        <input type="text" v-model="dni" />

        <button type="submit">Registrarse</button>
      </form>

      <p>¿No tienes cuenta? <span class="font-bold">Registrate aquí</span></p>
    </div>
  </div>
</template>
