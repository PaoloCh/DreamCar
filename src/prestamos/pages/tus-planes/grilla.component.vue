<template>
  <div class="grilla-view">
    <div class="btns" style="margin-top: 1%;">

      <pv-button
          label="Tus Planes de Pago"
          class="button-primary"
          icon="pi pi-folder"
          @click="navigate('/tus-planes')"
      />

      <pv-button
          label="Iniciar un Plan de Pago"
          class="button-primary"
          icon="pi pi-plus-circle"
          @click="navigate('/plan-pago')"
      />
    </div>

    <br>

    <div class="table">
      <pv-data-table
          :value="details"
          ref="dt"
          data-key="id"
          :paginator="true"
          :rows="10"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 25]"
          currentPageReportTemplate="Showing {first} to {last}"
          tableStyle="min-width: 50rem"
          responsive-layout="scroll"
      >
        <pv-column class="column-feat" field="id" header="ID" style="min-width: 8rem"></pv-column>
        <pv-column class="column-feat" field="montoPrestamo" header="Monto Prestamo" style="min-width: 8rem"></pv-column>
        <pv-column class="column-feat" field="tasa" header="N° Cuotas" style="min-width: 8rem"></pv-column>
        <pv-column class="column-feat" field="quantity" header="Tipo de Tasa" style="min-width: 8rem"></pv-column>
        <pv-column class="column-feat" field="info" header="Información" style="min-width: 8rem"></pv-column>

      </pv-data-table>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import baseUrl from "@/shared/environments/environment";

export default {
  name: "GrillaView",
  data(){
    return {
      details: '',
      loadingGrid: false,
    };
  },

  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    loadPrestamos() {
      return this.details.map(row => {
        return {
          id: row.id,
          montoPrestamo: row.montoPrestamo.toFixed(2),
          nCuotas: row.nCuotas.toFixed(2),
          tipoTasa: row.tipoTasa,
        }
      })
    },



  },
  async mounted() {
    this.loadingGrid = true;
    try {
      const response = await axios.get(baseUrl + '/loans' + this.prestamoId + '/details');
      this.details = response.data;
      this.details = this.loadPrestamos();
      this.loadingGrid = false;
    } catch (error) {
      console.error('Error al obtener los resultados:', error);
    }
  }
}

</script>

<style>
  html, body, .grilla-view {
    height: 100%;
    margin: 0;
  }

  .grilla-view {
    background: #0A1642;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    min-height: 100vh; /* Establece la altura al 100% de la ventana */
    display: flex;
    flex-direction: column;
  }

  .column-feat {
    background: #3E476A;
    color: white;
    text-align: center;
  }

  .btns {
    display: flex;
    justify-content: center;
  }

  .grilla-view {
    background: #0A1642;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .table {
    padding: 1% 5%;
  }

</style>