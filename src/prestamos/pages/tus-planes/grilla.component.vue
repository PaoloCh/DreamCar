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
        <pv-column class="column-feat" field="id" header="ID" style="width: 25%; text-align: left;"></pv-column>
        <pv-column class="column-feat" field="precioVentaActivo" header="Precio de Venta del Activo" style="width: 25%; text-align: left;"></pv-column>
        <pv-column class="column-feat" field="tipoPlan" header="N° Cuotas" style="width: 15%; text-align: left;"></pv-column>
        <pv-column class="column-feat" field="tipoTasa" header="Tipo de Tasa" style="width: 15%; text-align: left;"></pv-column>
        <pv-column class="column-feat" field="info" header="Información" style="width: 15%; text-align: left;">
        <template #body="{ data }">
          <pv-button @click="redirectToDetails(data.id)">Ver detalles</pv-button>
        </template>
        </pv-column>

      </pv-data-table>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import baseUrl from "@/shared/environments/environment";

export default {
  name: "GrillaView",
  inject: ['cookies'],
  data(){
    return {
      details: '',
      loadingGrid: false,
      userId: '',
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
          precioVentaActivo: (row.precioVentaActivo).toFixed(2),
          tipoPlan: row.tipoPlan,
          tipoTasa: row.tipoTasa,
        }
      })
    },
    redirectToDetails(id){
      this.navigate('/details/' + id);
    },
    


  },
  async mounted() {
    this.userId = this.$cookies.get('userSession');
    try {
      const response = await axios.get(baseUrl + '/users/' + this.userId + '/loans');
      this.details = response.data;
      this.details = this.loadPrestamos();
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