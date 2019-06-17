<template>
  <div>
    <h2>Movement</h2>
    <div>
      Portfolio total value: {{ portfolioValue | currency }}
    </div>
    <div>
      <h3>Stock movement</h3>
      <line-chart :dataSource="movementSeries" />
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from "vuex";
  import LineChart from "./LineChart.vue";

  export default {
    components: {
      LineChart,
    },
    data () {
      return {}
    },
    computed: {
      ...mapState({
        stocks: 'stocks',
      }),
      ...mapGetters({
        portfolio: 'portfolio',
        portfolioValue: 'totalValue',
        movementSeries: 'movementSeries'
      }),
    },
  }
</script>
