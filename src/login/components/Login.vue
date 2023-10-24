<script>
export default {
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
  },
};
</script>

<template>
  <div class="text-white bg-red-500 flex">
    <div class="w-5 border-1">Acá irá la imagen</div>
    <div class="w-5 border-1">
      <h1>Login</h1>

      <div class="flex flex-column">
        <pv-input-text
          type="text"
          v-model="value"
          size="small"
          @change="handleInput"
        />
        <pv-input-text
          type="text"
          v-model="value1"
          size="small"
          @input="handleInput"
        />
        <pv-button label="Iniciar Sesión" />
      </div>

      <p>¿No tienes cuenta? <span class="font-bold">Registrate aquí</span></p>
    </div>
  </div>
</template>
