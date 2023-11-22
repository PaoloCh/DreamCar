<script>
import axios from 'axios';
import baseUrl from '../../shared/environments/environment';

export default {
  name: "login",
  inject: ['cookies'],
  data() {
    return {
      email: "",
      password: "",
      loading: false, 
    };
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    async login(){
      this.loading = true;
      const user = {
        email: this.email,
        password: this.password
      }

      try {
        const userId = await axios.post(baseUrl + '/users/login', user);
        this.$cookies.set('userSession', userId.data);
        console.log('userSession: ' + this.$cookies.get('userSession'));
        this.loading = false;
        this.navigate('/tus-planes');
      } catch (error) {
        this.$toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Usuario o contraseña incorrectos',
          life: 3000
        });
        this.loading = false;
      }
    }
  },
};
</script>

<template>
  <pv-toast />
  <pv-progressspinner v-if="loading" class="spinner-overlay"/>
  <div class="bg-full">
    <div class="bg-img-login">
      <img
        src="https://media.discordapp.net/attachments/1172674457211510895/1175649639102427246/DreamCar_1.png"
        width="350"
        height="350"
      />
      <h2 style="color: white; font-size: 80px">DREAMCAR</h2>
    </div>

    <div class="bg-login">
      <h2 style="color: white; font-size: 80px">Login</h2>

      <div class="card flex justify-content-center inputs__groups">
        <pv-input-text
          type="text"
          size="small"
          v-model="email"
          placeholder="Email"
          style="background-color: #e8e2ff; width: 300px; border-radius: 10px"
          @change="handleInput"
        />
        <pv-input-text
          type="password"
          size="small"
          v-model="password"
          placeholder="Contraseña"
          style="background-color: #e8e2ff; width: 300px; border-radius: 10px"
          @input="handleInput"
        />
      </div>

      <div class="card flex justify-content-center">
        <pv-button
          @click="login()"
          label="Iniciar Sesión"
          style="
            background-color: #c0d9ff;
            color: #1b2849;
            font-weight: 700;
            width: 250px;
          "
        />
      </div>

      <p style="color: white">
        ¿No tienes cuenta? <br> <pv-button @click="navigate('/register')" label="Registrate" style="background: transparent; font-weight: 200; width: 100px;"/>
      </p>
    </div>
  </div>
</template>

<style scoper>
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  padding: 0;
}

.bg-full {
  height: 100vh;
  display: flex;
}

.bg-img-login {
  background-image: url("https://media.discordapp.net/attachments/1172674457211510895/1175649639450542130/bgLogin.png");
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-login {
  width: 40%;
  background: linear-gradient(
    180deg,
    #6ba6ff 4.69%,
    #6ba6ff 4.7%,
    #67a2ff 16.15%,
    #1e5dff 80.21%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputs__groups {
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}
.spinner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
