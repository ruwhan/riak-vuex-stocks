<template>
  <div :class="getClassStyles">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          <router-link :to="stockHref" tag="li"><a>{{stock.name}}</a></router-link>
          <small>@ {{stock.price | currency}}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-info" @click="buyStock" :disabled="insufficientFunds || quantity<=0">Buy</button>
        </div>
        <div>
          <mini-chart :stock="stock" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .panel-title > li {
    list-style: none;
    display: inline-block;
  }
</style>
<script>
  import MiniChart from "./MiniChart.vue";

  export default {
    props: ['stock', 'additionalCssClass'],
    components: {
      MiniChart
    },
    data: () => {
      return {
        quantity: 0
      }
    },
    // use computed to watch the store 
    computed: {
      funds(){
        return this.$store.getters.funds;
      },
      insufficientFunds(){
        return this.quantity * this.stock.price > this.funds;
      },
      /**
       * Computed properties, return string of css class, default to "col-sm-6 col-md-4"
       * if additionalCssClass props is not defined.
       * 
       * @returns {String}
       */
      getClassStyles() {
        return this.additionalCssClass || "col-sm-6 col-md-4"
      },
      /**
       * Detail stock page path.
       */
      stockHref() {
        return `/stock/${this.stock.id}`
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: +this.quantity // force string to integer conversion
        }
        this.$store.dispatch('buyStock',order);
        this.quantity = 0;
      }
    }
  }
</script>