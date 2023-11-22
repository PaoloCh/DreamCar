<script>
import axios from 'axios';
import baseUrl from '../../../shared/environments/environment';

export default {
  name: "IniciarPagoView",
  inject: ['cookies'],
  data() {
    return {
      moneda: '',
      precioVentaActivo: '',
      tipoPlan : '',
      cuotaInicialPorcentaje: '',
      cuotaFinalPorcentaje: '',
      numeroAnios: '',
      tipoPeriodoGracia : '',
      cuotasPeriodoGracia: '',
      tasa: '',
      tipoTasa: '',
      capitalizacion: '',
      costesNotariales: '',
      costesRegistrales: '',
      gps: '',
      portes: '',
      gastosAdmin : '',
      seguroDesgravamenPorcentaje: '',
      seguroRiesgoPorcentaje: '',
      tasaDescuentoPorcentaje: '',
      freqPago: '',
    };
  },
  methods: {
    actualizarNAnios() {
      if (this.tipoPlan === 'Plan 36') {
        this.numeroAnios = '3';
      } else {
        this.numeroAnios = '2';
      }
    },
    actualizarCuotaFinal(){
      if (this.tipoPlan === 'Plan 36') {
        this.cuotaFinalPorcentaje = '40';
      } else {
        this.cuotaFinalPorcentaje = '50';
      }
    },
    volver() {
      this.$router.push("/tus-planes");
    },
    async aceptar() {
      this.tipoPlan = this.tipoPlan === 'Plan 36' ? '36' : '24';
      this.capitalizacion = this.capitalizacion === 'Diaria' ? '1' : '30';
      const datos = {
        moneda: this.moneda,
        precioVentaActivo: this.precioVentaActivo,
        tipoPlan : this.tipoPlan,
        cuotaInicialPorcentaje: this.cuotaInicialPorcentaje,
        cuotaFinalPorcentaje: this.cuotaFinalPorcentaje,
        numeroAnios: this.numeroAnios,
        tipoPeriodoGracia : this.tipoPeriodoGracia,
        cuotasPeriodoGracia: this.cuotasPeriodoGracia,
        tasa: this.tasa,
        tipoTasa: this.tipoTasa,
        capitalizacion: this.capitalizacion,
        costesNotariales: this.costesNotariales,
        costesRegistrales: this.costesRegistrales,
        gps: this.gps,
        portes: this.portes,
        gastosAdmin : this.gastosAdmin,
        seguroDesgravamenPorcentaje: this.seguroDesgravamenPorcentaje,
        seguroRiesgoPorcentaje: this.seguroRiesgoPorcentaje,
        tasaDescuentoPorcentaje: this.tasaDescuentoPorcentaje,
        freqPago: this.freqPago,
      }

      try{
        const userId = this.$cookies.get('userSession');
        const response = await axios.post(baseUrl + '/users/' + userId + '/loans', datos);
        this.$toast.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Plan de pago creado correctamente',
          life: 3000
        });
      } catch (error) {
        this.$toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al crear el plan de pago',
          life: 3000
        });
      }

      this.$router.push("/tus-planes");
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
              <pv-dropdown class="dropdown-data" :options="['Soles', 'Dolares']" v-model="moneda"></pv-dropdown>
            </div>
          </li>
          <li>
            <span class="label">Precio de Venta:</span>
            <pv-input-text v-model="precioVentaActivo" class="input-data"></pv-input-text>
          </li>
          <li>
            <span class="label">Cuota Inicial (%):</span>
            <pv-input-text class="input-data" v-model="cuotaInicialPorcentaje"></pv-input-text>
          </li>
          <li>
            <span class="label">Tipo de plan:</span>
            <div>
              <pv-dropdown class="dropdown-data" :options="['Plan 24', 'Plan 36']" v-model="tipoPlan"></pv-dropdown>
            </div>
          </li>
          <li>
            <span class="label">Cuota Final(%):</span>
            <pv-input-text class="input-data" v-model="cuotaFinalPorcentaje" readonly></pv-input-text>
          </li>
          <li>
            <span class="label">N° Años:</span>
            <pv-input-text class="input-data" v-model="numeroAnios" readonly></pv-input-text>
          </li>
          <li>
            <span class="label">Capitalización:</span>
            <pv-dropdown class="dropdown-data" :options="['Diaria', 'Mensual']" v-model="capitalizacion"></pv-dropdown>
          </li>
          <li>
            <span class="label">Tasa Descuento (%):</span>
            <pv-input-text class="input-data" v-model="tasaDescuentoPorcentaje"></pv-input-text>
          </li>
          <li>
            <span class="label">Gastos Admin:</span>
            <pv-input-text class="input-data" v-model="gastosAdmin"></pv-input-text>
          </li>
          <li>
            <span class="label">Tipo de tasa:</span>
            <pv-dropdown class="dropdown-data" :options="['TNA', 'TEA']" v-model="tipoTasa"></pv-dropdown>
          </li>
          <li>
            <span class="label">Tasa (%):</span>
            <pv-input-text class="input-data" v-model="tasa"></pv-input-text>
          </li>

        </ul>
      </div>

      <div class="column1">
        <ul class="input">
          <li>
            <span class="label">Frecuencia de pago:</span>
            <pv-input-text class="input-data" v-model="freqPago"></pv-input-text>
          </li>
          <li>
            <span class="label">Tipo periodo de gracia:</span>
            <pv-dropdown :options="['T','P','S']" v-model="tipoPeriodoGracia" class="dropdown-data"></pv-dropdown>
          </li>
          <li>
            <span class="label">Cuotas periodo de gracia:</span>
            <pv-input-text class="input-data" v-model="cuotasPeriodoGracia"></pv-input-text>
          </li>
          <li>
            <span class="label">Costes notariales:</span>
            <pv-input-text class="input-data" v-model="costesNotariales"></pv-input-text>
          </li>
          <li>
            <span class="label">Costes registrales:</span>
            <pv-input-text class="input-data" v-model="costesRegistrales"></pv-input-text>
          </li>
          <li>
            <span class="label">GPS:</span>
            <pv-input-text class="input-data" v-model="gps"></pv-input-text>
          </li>
          <li>
            <span class="label">Portes:</span>
            <pv-input-text class="input-data" v-model="portes"></pv-input-text>
          </li>
          <li>
            <span class="label">Seguro Desgrav. (%):</span>
            <pv-input-text class="input-data" v-model="seguroDesgravamenPorcentaje"></pv-input-text>
          </li>
          <li>
            <span class="label">Seguro de riesgo (%):</span>
            <pv-input-text class="input-data" v-model="seguroRiesgoPorcentaje"></pv-input-text>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div class="button-container">
    <pv-button class="button" @click="volver()" label="Volver" rounded />
    <pv-button class="button" @click="aceptar()" label="Aceptar" rounded />
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