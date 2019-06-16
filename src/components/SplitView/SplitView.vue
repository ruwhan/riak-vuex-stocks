<template>
  <div>
    <h2>Split View</h2>
    <div class="flex-row ">
      <div class="half-width portfolio">
        <DraggablePortfolio />
      </div>
      <div class="half-width stocks">
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
