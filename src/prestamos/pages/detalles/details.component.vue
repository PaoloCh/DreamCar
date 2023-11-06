<script>
const Frecuencia = {
    Anual: 360,
    Semestral: 180,
    Trimestral: 90,
    Bimestral: 60,
    Mensual: 30,
    Quincenal: 15,
    Diaria: 1
}

const Plan = {
    "Plan 24": 24,
    "Plan 36": 36
}

export default{
    name: 'details',
    data(){
        return{
            prestamoId: this.$route.params.id
        }
    },
    methods:{
        convertirTasaEfectivaAOtra(tasaOrigen, frecuenciaObjetivo, frecuenciaOrigen) {
            TEP1 = tasaOrigen;
            n2 = frecuenciaObjetivo;
            n1 = frecuenciaOrigen;

            const TEP2 = Math.pow(1 + TEP1 , n2/n1) - 1;
            return (TEP2*100).toFixed(7);
        },

        convertirNominalAEfectiva(tasaNominal, frecuenciaTasa, frecuenciaCapitalizacion) {
            const N = frecuenciaTasa/frecuenciaCapitalizacion;
            const tasaEfectiva = Math.pow(1 + tasaNominal/N, N) - 1;
            return (tasaEfectiva*100).toFixed(7);
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
                <!-- <li>Monto del préstamo :</li>
                <li>Moneda :</li>
                <li>Número de cuotas :</li>
                <li>Tipo de tasa :</li>
                <li>Tasa :</li> -->
                <li> Moneda :</li>
                <li> TEA :</li>
                <li> TEM :</li>
                <li> Número de cuotas por año :</li>
                <li> Numero total de cuotas :</li>
                <li> Cuota inicial :</li>
                <li> Cuota final :</li>
                <li> Monto del préstamo :</li>
                <li> Saldo a financiar con cuotas :</li>
                <li> % de seguro desgrav. per. :</li>
                <li> Seguro riesgo :</li>
                
            </ul>
        </div>
        <div class="column">
            <ul>
                <!-- <li>Tiempo :</li>
                <li>Fecha Inicial :</li>
                <li>Fecha Pago :</li>
                <li>TIR :</li>
                <li>VAN :</li> -->

                <li> Intereses :</li>
                <li> Amortización del capital :</li>
                <li> Seguro de desgravamen :</li>
                <li> Seguro contra todo riesgo : </li>
                <li> GPS : </li>
                <li> Portes : </li>
                <li> Gastos Administrativos : </li>
                <li> Tasa de descuento : </li>
                <li> TIR de la operación : </li>
                <li> TCEA de la operación : </li>
                <li> VAN operación : </li>
                


            </ul>
        </div>
        </div>  
    </div>

    <div class="button-container">
        <pv-button class="button" label="Volver" rounded />
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

</style>