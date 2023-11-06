<script>
export default{
    name: 'details',
    data(){
        return{
            prestamoId: this.$route.params.id
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
                <li>Monto del préstamo :</li>
                <li>Moneda :</li>
                <li>Número de cuotas :</li>
                <li>Tipo de tasa :</li>
                <li>Tasa :</li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>Tiempo :</li>
                <li>Fecha Inicial :</li>
                <li>Fecha Pago :</li>
                <li>TIR :</li>
                <li>VAN :</li>
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