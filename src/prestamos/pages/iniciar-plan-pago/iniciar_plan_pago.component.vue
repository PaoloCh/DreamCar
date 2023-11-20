<script>
export default {
  name: "IniciarPagoView",
  data() {
    return {
      // Agregar una variable para almacenar la opción seleccionada
      monedaSeleccionada: "Soles",
      tasaSeleccionada: 'Nominal',
      tipoPeriodo: 'Total',
      tipoPlan: 'Plan 24',
      cuotaFinal:'40',
      nAnios: '2',

    };
  },
  methods: {
    actualizarNAnios() {
      if (this.tipoPlan === 'Plan 36') {
        this.nAnios = '3';
      } else {
        this.nAnios = '2';
      }
    },
    actualizarCuotaFinal(){
      if (this.tipoPlan === 'Plan 36') {
        this.cuotaFinal = '40';
      } else {
        this.cuotaFinal = '50';
      }
    },

  },

  watch: {
    tipoPlan: ['actualizarNAnios','actualizarCuotaFinal'],

  }
};
</script>

<template>
  <div class="container-inicio-pago">
    <h1 class="title">Nuevo plan de pago</h1>
    <div class="input-container">
      <div class="column1">
        <ul class="input">
          <li>
            <span class="label">Moneda:</span>
            <div>
              <pv-dropdown class="dropdown-data" :options="['Soles', 'Dolares']" v-model="monedaSeleccionada"></pv-dropdown>
            </div>
          </li>
          <li>
            <span class="label">Precio de Venta:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Cuota Inicial (%):</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Tipo de plan:</span>
            <div>
              <pv-dropdown class="dropdown-data" :options="['Plan 24', 'Plan 36']" v-model="tipoPlan"></pv-dropdown>
            </div>
          </li>
          <li>
            <span class="label">Cuota Final(%):</span>
            <pv-input-text class="input-data" v-model="cuotaFinal" readonly></pv-input-text>
          </li>
          <li>
            <span class="label">N° Años:</span>
            <pv-input-text class="input-data" v-model="nAnios" readonly></pv-input-text>
          </li>
          <li>
            <span class="label">Capitalización:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Tasa Descuento (%):</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Gastos Admin:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Tipo de tasa:</span>
            <pv-dropdown class="dropdown-data" :options="['Nominal', 'Efectiva']" v-model="tasaSeleccionada"></pv-dropdown>
          </li>
          <li>
            <span class="label">Tasa (%):</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>

        </ul>
      </div>

      <div class="column1">
        <ul class="input">
          <li>
            <span class="label">Frecuencia de pago:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Tipo periodo de gracia:</span>
            <pv-dropdown :options="['Total','Parcial','Sin periodo']" v-model="tipoPeriodo" class="dropdown-data"></pv-dropdown>
          </li>
          <li>
            <span class="label">Cuotas periodo de gracia:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Costes notariales:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Costes registrales:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">GPS:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Portes:</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Seguro Desgrav. (%):</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Seguro de riesgo (%):</span>
            <pv-input-text class="input-data"></pv-input-text>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div class="button-container">
    <pv-button class="button" label="Volver" rounded />
    <pv-button class="button" label="Aceptar" rounded />
  </div>
</template>

<style>

.button{
  margin:1%;
}

.container-inicio-pago{
  margin-left: 5%;
  margin-top: 2%;
  width: 90%;

}
.title{
  color: #fff;
  text-align: left;
  margin-top: 20px;
}

.input {
  list-style-type: none;
  padding: 0;
}

.column1 .input li{
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0 5%;
  margin: 1% 0;
  width:100%;
}

.input-container{
  background-color: #1472df;
  border-radius: 10px;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 1rem;
  padding: 2%;
}
@media (max-width: 1200px) {
  .input-container{
    display: flex;
    flex-direction:column;
  }
  .input {
    list-style-type: none;
  }
}

.column1 .input li div{
  display: flex;
  justify-content: center;

}

.dropdown-data,
.input-data {
  width: 10rem;
  height: 2.5rem;
  border-radius: 10px;
  margin-left: 1rem;
  display: flex;
  align-items: center;
}
.dropdown-data{
  padding: 0 3px;
}

.input-data{
  padding: 0 18px;
  text-align: right;
}


.label{
  font-size: 1.8rem;
  margin-right: 1rem;
}
</style>