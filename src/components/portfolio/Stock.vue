<template>
  <div :class="getClassStyles">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>{{ stock.quantity }} @ ${{stock.price | currency }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="quantity<=0">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock', 'additionalCssClass'],
    data: () => {
      return {
        quantity: 0,
      }
    },
    methods: {
      ...mapActions({ sellStockAction: 'sellStock' }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }

        // use mapActions as alternative to dispatch
        this.sellStockAction(order);
        // which is the same as:
        // this.$store.dispatch('sellStock',order);
        this.quantity = 0;
      }
    },
    computed: {
      getClassStyles() {
        return this.additionalCssClass || "col-sm-6 col-md-4"
      }
    }
  }
</script>