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
    /**
     * Get stock name property computed property.
     * 
     * @returns {String}
     */
    stockName: {
      get() {
        return this.stock ? this.stock.name : ''
      }
    },
    /**
     * Find stock by url params computed property.
     * 
     * @returns {Object}
     */
    stock() {
      const id = this.$route.params.id;
      return this.stocks.find(item => item.id === +id);
    },
    /**
     * Movement of a specific stock.
     * 
     * @returns {[Object]}
     */
    movement() {
      return this.$store.getters.movementSeriesByStock(this.stockName);
    }
  },
  methods: {
    generateSeries() {
      const series = [this.movement]; // Make a 2 dimensional array
      const labels = this.movementRaw.map((item, index) => `day ${(index + 1)}`);

      return {
        series,
        labels
      }
    }
  }
}
</script>

