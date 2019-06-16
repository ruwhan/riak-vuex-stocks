<template>
  <div>
    <div class="flex-row ">
      <div class="half-width portfolio">
        <div class="text-center">
          <h3>
            Portfolio 
            <small title="Drag item to the right hand side column to sell stocks">
              <i class="glyphicon glyphicon-question-sign"></i>
            </small>
          </h3>
        </div>
        <DraggablePortfolio />
      </div>
      <div class="half-width stocks">
        <div class="text-center">
          <h3>
            Available Stocks
            <small title="Drag item to the left hand side column to buy a stock">
              <i class="glyphicon glyphicon-question-sign"></i>
            </small>
          </h3>
        </div>
        <DraggableStocks />
      </div>
    </div>
  </div>
</template>
<style>
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .half-width {
    width: 50%;
  }

  .portfolio {
    border-right: 1px solid #ccc;
  }

  .stocks {
    border-left: 1px solid #ccc;
  }
</style>

<script>
  import { mapGetters } from "vuex";
  import DraggablePortfolio from "./DraggablePortfolio.vue";
  import DraggableStocks from "./DraggableStocks.vue";

  export default {
    components: {
      DraggablePortfolio,
      DraggableStocks
    },
    computed: {
      ...mapGetters({
        portfolio: 'portfolio',
        stocks: 'stocks',
      }),
    }
  }
</script>
