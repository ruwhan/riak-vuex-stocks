<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock" :key="stock.id"></Stock>
    <add-stock-panel />
  </div>
</template>
<script>
  import Stock from './Stock.vue';
  import AddStockPanel from './AddStockPanel.vue';

  export default {
    components: {
      Stock,
      AddStockPanel
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>