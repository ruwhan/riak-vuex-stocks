<template>
  <draggable
      v-model="stocks"
      :group="{name: 'stocks', pull: 'clone'}">
    <Stock v-for="stock in stocks" :stock="stock" additionalCssClass="col-md-12" :key="stock.id" />
  </draggable>
</template>
<script>
  import draggable from "vuedraggable";
  import { mapActions, mapState } from "vuex";
  import Stock from "../stocks/Stock.vue";

  export default {
    components: {
      draggable,
      Stock
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        sellStockAction: 'sellStock'
      }),
    },
    computed: {
      stocks: {
        get() {
          return this.$store.getters.stocks;
        },
        set(stock) {
          const stockSold = stock.find((item) => item.quantity);
          if (stockSold) {
            this.sellStockAction({
              stockId: stockSold.id,
              stockPrice: stockSold.price,
              quantity: stockSold.quantity
            });
          }
        }
      }
    }
  }
</script>
