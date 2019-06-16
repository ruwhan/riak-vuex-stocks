<template>
  <draggable v-model="stocks" group="stocks">
    <StockPortfolio
        v-for="stock in stocks"
        :stock="stock"
        additionalCssClass="col-md-12"
        :key="stock.id" />
    <div v-if="stocks.length === 0" class="alert alert-danger" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>You don't have any portfolio!</strong> Drag stock item here to buy 1.
    </div>
  </draggable>
</template>
<style>
  .alert {
    margin: 0 15px;
  }
</style>
<script>
  import { mapGetters, mapActions } from "vuex";
  import draggable from "vuedraggable";
  import StockPortfolio from "../portfolio/Stock.vue";

  export default {
    components: {
      draggable,
      StockPortfolio
    },
    methods: {
      ...mapActions({ buyStockAction: 'buyStock' })
    },
    computed: {
      stocks: {
        get() {
          return this.$store.getters.portfolio;
        },
        set(stock) {
          const stockBought = stock.find(item => !item.quantity);
          if (stockBought) {
            const order = {
              stockId: stockBought.id,
              stockPrice: stockBought.price,
              quantity: 1
            }
            this.buyStockAction(order);
          }
        }
      }
    }
  }
</script>
