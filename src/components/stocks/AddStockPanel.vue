<template>
  <div class="col-xs-6 col-md-4">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">
          Add A New Stock
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="text" class="form-control" placeholder="Stock" v-model="stockName">
        </div>
        <div class="pull-right">
          <button class="btn btn-warning" @click="onClickAddStock" :disabled="!stockName">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        stockName: '',  // Stock name input model
      }
    },
    methods: {
      ...mapActions({
        addStockAction: 'addStock'
      }),
      /**
       * On click add stock event handler.
       */
      onClickAddStock() {
        const newStock = {
          name: this.stockName,
        }

        this.addStockAction({ newStock })
          .then(() => this.stockName = '');
      }
    }
  }
</script>
