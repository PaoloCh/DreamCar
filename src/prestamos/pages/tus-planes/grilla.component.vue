<template>
  <div class="card">
    <pv-data-table tableStyle="min-width: 50rem">
      <pv-column field="code" header="Code"></pv-column>
      <pv-column field="name" header="Name"></pv-column>
      <pv-column field="category" header="Category"></pv-column>
      <pv-column field="quantity" header="Quantity"></pv-column>
    </pv-data-table>
  </div>
</template>

<script>

export default {
  name: "GrillaView"
}

</script>