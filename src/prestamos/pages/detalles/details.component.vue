<script>
import axios from 'axios';
import baseUrl from '../../../shared/environments/environment';

export default{
    name: 'details',
    data(){
        return{
            prestamoId: '',
            results: '',
            details: '',
            loadingGrid: false
        }
    },
    methods:{
        volver(){
            this.$router.push('/tus-planes');
        },
        roundedDetails() {
            return this.details.map(row => {
                return {
                tipoPeriodoGracia: row.tipoPeriodoGracia,
                saldoInicialCuotaFinal: (row.saldoInicialCuotaFinal).toFixed(2),
                interesCuotaFinal: (row.interesCuotaFinal).toFixed(2),
                amortizacionCuotaFinal: (row.amortizacionCuotaFinal),
                seguroDesgCuotaFinal: (row.seguroDesgCuotaFinal).toFixed(2),
                saldoInicialCuota: (row.saldoInicialCuota).toFixed(2),
                saldoFinalCuotaFinal: (row.saldoFinalCuotaFinal).toFixed(2),
                interes: (row.interes).toFixed(2),
                cuota: (row.cuota).toFixed(2), //Quitar toFixed si falla
                amortizacion: (row.amortizacion).toFixed(2),
                seguroDesgCuota: (row.seguroDesgCuota).toFixed(2),
                seguroRiesgoGrilla: (row.seguroRiesgoGrilla).toFixed(2), //Quitar toFixed si falla
                gps: (row.gps).toFixed(2),  //Quitar toFixed si falla
                portes: (row.portes).toFixed(2),
                gastosAdmin: (row.gastosAdmin).toFixed(2),
                saldoFinalParaCuota: (row.saldoFinalParaCuota).toFixed(2),
                flujo: (row.flujo).toFixed(2),
                };
            });
        }
    },
    async mounted() {
    this.loadingGrid = true;
    this.prestamoId = this.$route.params.id;

        try {
            const response = await axios.get(baseUrl + '/loans/' + this.prestamoId + '/results');
            this.results = response.data;
        } catch (error) {
            console.error('Error al obtener los resultados:', error);
        }

        try {
            const response = await axios.get(baseUrl + '/loans/' + this.prestamoId + '/details');
            this.details = response.data;
            this.details = this.roundedDetails();
            this.loadingGrid = false;
        } catch (error) {
            console.error('Error al obtener los resultados:', error);
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="title">Prestamo ID: {{ prestamoId }}</h1>
        <div class="data-container">
            <div class="column">
            <ul>
                <li> <span class="subtitles">Moneda :</span> {{ results.moneda}}</li>
                <li> <span class="subtitles">TEA :</span> {{ (results.tea * 100.0).toFixed(7) }} %</li>
                <li> <span class="subtitles">TEM :</span> {{ (results.tem * 100.0).toFixed(7) }} %</li>
                <li> <span class="subtitles">Número de cuotas por año :</span> {{ results.nCuotasxAnio }}</li>
                <li> <span class="subtitles">Numero total de cuotas :</span> {{ results.nTotalCuotas }}</li>
                <li> <span class="subtitles">Cuota inicial :</span> {{ results.cuotaInicial}} </li>
                <li> <span class="subtitles">Cuota final :</span> {{ results.cuotaFinal }}</li>
                <li> <span class="subtitles">Monto del préstamo :</span> {{ results.montoPrestamo }}</li>
                <li> <span class="subtitles">Saldo a financiar con cuotas :</span> {{ ( results.saldoFinanciarCuotas * 1.0).toFixed(2)}}</li>
                <li> <span class="subtitles">% de seguro desgrav. per. :</span> {{ (results.pSeguroDesgrav * 100.0) }} %</li>
                <li> <span class="subtitles">Seguro riesgo :</span> {{ results.seguroRiesgo }}</li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li> <span class="subtitles">Intereses :</span> {{ (results.interesesTotal * 1.0).toFixed(2) }}</li>
                <li> <span class="subtitles">Amortización del capital :</span> {{ (results.amortizacionCapitalTotal * 1.0).toFixed(2) }}</li>
                <li> <span class="subtitles">Seguro de desgravamen :</span> {{ (results.seguroDesgravamenTotal * 1.0).toFixed(2) }}</li>
                <li> <span class="subtitles">Seguro contra todo riesgo :</span> {{ results.seguroTodoRiesgoTotal }}</li>
                <li> <span class="subtitles">GPS :</span> {{ results.gpstotal }}</li>
                <li> <span class="subtitles">Portes :</span> {{ results.portesTotal }}</li>
                <li> <span class="subtitles">Gastos Administrativos :</span> {{ results.gastosAdminTotal }}</li>
                <li> <span class="subtitles">Tasa de descuento :</span> {{ (results.tasaDescuentoRentabilidad * 100).toFixed(7) }} %</li>
                <li> <span class="subtitles">TIR de la operación :</span> {{ (results.tir * 100.0).toFixed(7) }} %</li>
                <li> <span class="subtitles">TCEA de la operación :</span> {{ (results.tcea * 100.0).toFixed(7) }} %</li>
                <li> <span class="subtitles">VAN operación :</span> {{ results.van }}</li>
            </ul>
        </div>
        </div>
        
        <div class="grid-container">
            <pv-data-table :value="details" paginator :rows="36" :rowsPerPageOptions="[6, 12, 24, 36]" tableStyle="min-width: 50rem">
                <pv-column field="tipoPeriodoGracia" header="P.G." style="width: 25%"></pv-column>
                <pv-column field="saldoInicialCuotaFinal" header="Saldo Inicial Cuota final" style="width: 25%"></pv-column>
                <pv-column field="interesCuotaFinal" header="Interes Cuota final" style="width: 25%"></pv-column>
                <pv-column field="amortizacionCuotaFinal" header="Amort. Cuota final" style="width: 25%"></pv-column>
                <pv-column field="seguroDesgCuotaFinal" header="Seguro desg. Cuota final" style="width: 25%"></pv-column> 
                <pv-column field="saldoFinalCuotaFinal" header="Saldo Final Cuota Final" style="width: 25%"></pv-column>
                <pv-column field="saldoInicialCuota" header="Saldo Inicial Cuota" style="width: 25%"></pv-column>
                <pv-column field="interes" header="Interes" style="width: 25%"></pv-column>
                <pv-column field="cuota" header="Cuota" style="width: 25%"></pv-column>
                <pv-column field="amortizacion" header="Amortizacion" style="width: 25%"></pv-column>
                <pv-column field="seguroDesgCuota" header="Seguro desg. Cuota" style="width: 25%"></pv-column>
                <pv-column field="seguroRiesgoGrilla" header="Seguro riesgo" style="width: 25%"></pv-column>
                <pv-column field="gps" header="GPS" style="width: 25%"></pv-column>
                <pv-column field="portes" header="Portes" style="width: 25%"></pv-column>
                <pv-column field="gastosAdmin" header="Gastos Adm." style="width: 25%"></pv-column>
                <pv-column field="saldoFinalParaCuota" header="Saldo Final para Cuota" style="width: 25%"></pv-column>
                <pv-column field="flujo" header="Flujo" style="width: 25%"></pv-column> 
            </pv-data-table>
        </div>
    </div>

    <div class="button-container">
        <pv-button @click="volver()" class="button" label="Volver" rounded />
    </div>

    
    
</template>

<style>
html{
    background-color: #0A1642;
}

.container{
    margin-top: 2rem;
    margin-right: 10rem;
    margin-left: 10rem;
    
}

.data-container{
    background-color: #1472df;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
}

.column{
    flex: 1;
}

.column ul {
      list-style: none;
}

.column ul li {
      margin-bottom: 1rem;
      font-size: 25px; 
      text-align: left;
      font-weight: bold;
}

.column ul li label{
      margin-bottom: 1rem;
      font-size: 25px; 
      width: 200px; 
      
}

.title{
    color: #fff;
    text-align: left;
    margin-top: 20px;
}

.button-container{
    margin-top: 2rem;
    text-align: center;
}

.button{
    background-color: #1472df;
    width: 300px;
}

.subtitles{
    display: inline-block;
    width: 25rem;
    font-weight: lighter;
}

.spinner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 40px;
  height: 40px;
}

</style>