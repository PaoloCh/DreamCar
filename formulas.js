
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

const Capitalizacion = {
    Diaria: 1,
    Mensual: 30,
    Bimestral: 60,
    Trimestral: 90,
    Semestral: 180,
    Anual: 360
}

//DATOS DE ENTRADA

//PRESTAMO
let PV;
let plan;
let pCI;
let pCF;
let NA;
let tasa;
let capitalizacion;
let frec;
let NDxA;

//COSTES/GASTOS INICIALES
let costesNotariales;
let costesRegistrales;
let costesTasacion;
let comisionEstudio;
let comisionActivacion;

//COSTES/GASTOS PERIODICOS
let GPS;
let portes;
let gastosAdministracion;
let seguroDesgravamenPorc;
let seguroRiesgoPorc;

//COSTO DE OPORTUNIDAD
let tasaDescuento;

//CONVERSIÓN DE UNA TASA EFECTIVA A OTRA

function convertirTasaEfectivaAOtra(tasaOrigen, frecuenciaObjetivo, frecuenciaOrigen) {
    TEP1 = tasaOrigen;
    n2 = frecuenciaObjetivo;
    n1 = frecuenciaOrigen;

    const TEP2 = Math.pow(1 + TEP1 , n2/n1) - 1;
    return (TEP2*100).toFixed(7);
}

//CONVERSIÓN DE UNA TASA NOMINAL A UNA TASA EFECTIVA

function convertirNominalEfectiva(tasaNominal, frecuenciaTasa, frecuenciaCapitalizacion) {
    const N = frecuenciaTasa/frecuenciaCapitalizacion;
    const tasaEfectiva = Math.pow(1 + tasaNominal/N, N) - 1;
    return (tasaEfectiva*100).toFixed(7);
}

console.log(convertirNominalEfectiva(0.08, Frecuencia.Anual, Frecuencia.Mensual));

//CALCULAR NUMERO DE CUOTAS POR AÑO

function calcularCuotasAnio(frecuencia) {
    const NCxA = 360/frecuencia;
    return NCxA;
}

//CALCULAR EL NUMERO DE PERIODOS TOTALES DE PAGO

function calcularPeriodosTotales(NCxA, plazoAnios) {
    const N = NCxA*plazoAnios;
    return N;
}

//CALCULAR CUOTA INICIAL

function calcularCuotaInicial(PV, porcentajeCI) {
    const CI = PV*porcentajeCI;
    return CI;
}

//CALCULAR CUOTA FINAL

function calcularCuotaFinal(PV, porcentajeCF) {
    const CF = PV*porcentajeCF;
    return CF;
}

//CALCULAR MONTO PRESTAMO

function calcularMontoPrestamo(PV, CI) {
    const montoPrestamo = PV - CI;
    return montoPrestamo;
}

//CALCULAR SALDO A FINANCIAR CON CUOTAS

function calcularSaldoAFinanciarConCuotas(montoPrestamo, CF, TEM, seguroDesgravamenPorc, numTotalCuotas) {
    const saldoAFinanciarConCuotas = pow(montoPrestamo - CF + (1+TEM+seguroDesgravamenPorc), numTotalCuotas+1);
    return saldoAFinanciarConCuotas;
}

//CALCULAR PORCENTAJE DE SEGURO DESGRAV. PER.

function calcularPorcentajeSeguroDesgravPer(frec, seguroDesgravamenPorc){
    const porcentajeSeguroDesgravPer = seguroDesgravamenPorc * frec / 30;
    return porcentajeSeguroDesgravPer;
}

//CALCULAR SEGURO DE RIESGO
function calcularSeguroRiesgo(seguroRiesgoPorc, PV, NCxA) {
    return seguroRiesgoPorc*PV/NCxA;
}

//CALCULAR TASA DE DESCUENTO
function calcularTasaDescuento(tasaDescuento, frec, NDxA ) {
    return (1+tasaDescuento)^(frec/NDxA)-1;
}

//TO-DO: TIR DE LA OPERACION///////////INCONCLUSO
function calcularTirOperacion(){
    return 1*1;
}

//TCEA DE LA OPERACION
function calcularTceaOperación(calcularTirOperacion, NDxA, frec){
    return (1+calcularTirOperacion)^(NDxA/frec)-1;
}
//TO-DO:VAN DE LA OPERACION
function calcularVanOperacion(calcularMontoPrestamo ){}

