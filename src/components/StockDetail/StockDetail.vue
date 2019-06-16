<template>
  <div>
    <h2>{{ stockName }} Movement</h2>
    <div>
      <line-chart :dataSource="generateSeries()" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LineChart from "../Movements/LineChart.vue";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      dataSource: {}
    }
  },
  computed: {
    ...mapGetters({
      stocks: 'stocks',
      movementRaw: 'movementRaw'
    }),
    stockName: {
      get() {
        return this.stock ? this.stock.name : ''
      }
    },
    stock() {
      const id = this.$route.params.id;
      return this.stocks.find(item => item.id === +id);
    },
    movement() {
      return this.$store.getters.movementSeriesByStock(this.stockName);
    }
  },
  methods: {
    generateSeries() {
      const series = [this.movement];
      const labels = this.movementRaw.map((item, index) => `day ${(index + 1)}`);

      return {
        series,
        labels
      }
    }
  }
}
</script>

