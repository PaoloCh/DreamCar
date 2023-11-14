<script>
export default {
  name: "IniciarPagoView",
}

</script>

<template>
  <div class="container-inicio-pago">
    <h1 class="title">Nuevo plan de pago</h1>
    <div class="input-container">
      <div class="column">
      <ul class="input">
        <li>
          <span class="label">Moneda:</span>
          <pv-dropdown class="dropdown-data"></pv-dropdown>
        </li>
        <li>
          <span class="label">Monto préstamo:</span>
          <pv-input-text class="input-data"></pv-input-text>
        </li>
        <li>
          <span class="label">Cuota Inicial:</span>
          <pv-input-text class="input-data"></pv-input-text>
        </li>
        <li>
          <span class="label">Cuota Final:</span>
          <pv-input-text class="input-data"></pv-input-text>
        </li>
        <li>
          <span class="label">Capitalización:</span>
          <pv-input-text class="input-data"></pv-input-text>
        </li>
        <li><span class="label">Portes:</span> <pv-input-text class="input-data"></pv-input-text></li>
        <li><span class="label">Tasa Descuento:</span><pv-input-text class="input-data"></pv-input-text></li>
        <li><span class="label">Gastos Admin:</span><pv-input-text class="input-data"></pv-input-text></li>
        <li><span class="label">Seguro Desgrav.:</span><pv-input-text class="input-data"></pv-input-text></li>
        <li><span class="label">Seguro de riesgo:</span><pv-input-text class="input-data"></pv-input-text></li>
      </ul>
      </div>


      <div class="column">
        <ul class="input">
          <li><span class="label">Tipo periodo de gracia:</span><pv-dropdown class="dropdown-data"></pv-dropdown></li>
          <li><span class="label">Periodo de gracia (meses):</span> <pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Cuotas periodo de gracia:</span> <pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Tasa:</span><pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Tipo de tasa:</span> <pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Número de años:</span><pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Tiempo(días):</span><pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Costes notariales:</span><pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">Costes registrales:</span><pv-input-text class="input-data"></pv-input-text></li>
          <li><span class="label">GPS:</span><pv-input-text class="input-data"></pv-input-text></li>
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
.btns {
  display: flex;
  justify-content: center;
}
.container-inicio-pago{
  margin-top: 2rem;
  margin-right: 2%;
  margin-left: 2%;
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

.input-container{
  background-color: #1472df;
  border-radius: 10px;
  color: #fff;
  display: flex;

}

.column {
  display: flex;
  justify-content: space-between;
  width: 1%; /* Ajusta el ancho de la columna según tus necesidades */
}

.column .input li{
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 170%;
  text-align: left;
  width:100%;
  align-items: center;
  padding: 0% 1%;


}

.input-data{
  height: 10px;
  width: 28%;
  border-radius: 10px;

}

.dropdown-data{
  height: 34px;
  width: 40%;
  border-radius: 10px;

}

.button{
  margin:2%;
}

.label {
  padding-left: 15%;
  display: inline-block;
  width: 60%;
  text-align: left;
}

.input-data {
  width: 40%;
  box-sizing: border-box;
}

</style>