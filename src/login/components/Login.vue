<script>
export default {
  name: "login",
  data() {
    return {
      value: "", // Almacena el valor del primer campo de entrada
      value1: "", // Almacena el valor del segundo campo de entrada
    };
  },
  methods: {
    handleInput() {
      // Este método se llama cuando se realiza una entrada en cualquiera de los campos de entrada.
      // No es necesario imprimir en la consola aquí, ya que los valores se actualizan automáticamente en los datos.
    },
    printValues() {
      // Este método imprime los valores en la consola.
      console.log("Valor del primer campo de entrada:", this.value);
      console.log("Valor del segundo campo de entrada:", this.value1);
    },
    navigate(path) {
      this.$router.push(path);
    },
  },
};
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
      <h2 style="color: white; font-size: 80px">Login</h2>

      <div class="card flex justify-content-center inputs__groups">
        <pv-input-text
          type="text"
          size="small"
          v-model="value"
          placeholder="Nombre de Usuario"
          style="background-color: #e8e2ff; width: 300px; border-radius: 10px"
          @change="handleInput"
        />
        <pv-input-text
          type="text"
          size="small"
          v-model="value1"
          placeholder="Contraseña"
          style="background-color: #e8e2ff; width: 300px; border-radius: 10px"
          @input="handleInput"
        />
      </div>

      <div class="card flex justify-content-center">
        <pv-button
          @click="navigate('/tus-planes')"
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
</style>
