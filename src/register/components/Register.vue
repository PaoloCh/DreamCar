<script>
import axios from 'axios';
import baseUrl from '../../shared/environments/environment';

export default {
  name: 'register',
  data(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };    
  },
  methods:{
    navigate(path) {
      this.$router.push(path);
    },
    async register(){
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }

      try {
          await axios.post(baseUrl + '/users', user);
          this.navigate('/');
      } catch (error) {
            console.error('Error al registrar:', error);
        }
    }

  }
}



</script>

<template>
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
      <h2 style="color: white; font-size: 80px">Sign Up</h2>

      <form class="inputs__groups" @submit.prevent="register">
        <div>
          <label>Correo electrónico</label>
          <pv-input-text
            type="email"
            size="small"
            v-model="email"
            style="background-color: #e8e2ff; border-radius: 10px"
          />
        </div>

        <div>
          <label>Contraseña</label>
          <pv-input-text
            type="password"
            size="small"
            v-model="password"
            style="background-color: #e8e2ff; border-radius: 10px"
          />
        </div>

        <div>
          <label>Nombre</label>
          <pv-input-text
            type="text"
            size="small"
            v-model="firstName"
            style="background-color: #e8e2ff; border-radius: 10px"
          />
        </div>

        <div>
          <label>Apellido</label>
          <pv-input-text
            type="text"
            size="small"
            v-model="lastName"
            style="background-color: #e8e2ff; border-radius: 10px"
          />
        </div>

      </form>

      <div class="card flex justify-content-center">
        <pv-button @click="register()"
          label="Registrarse"
          style="
            background-color: #c0d9ff;
            color: #1b2849;
            font-weight: 700;
            width: 250px;
          "
        />
      </div>

      <p style="color: white"><pv-button @click="this.navigate('/')" label="Volver al Log In" style="background: transparent; font-weight: 200; width: 100px;"/></p>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.inputs__groups > div > span {
  color: white;
}

.inputs__groups > div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
