<template>
<svg version="1.1"
     baseProfile="full"
     width="300" height="120"
     xmlns="http://www.w3.org/2000/svg">
  <path
        :d="transformed"
        stroke="black"
        fill="transparent"
        opacity=".66"
        stroke-width="2" />
</svg>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.component('mini-chart', {
  props: {
    stock: Object,
  },
  data() {
    return {
      series: [],
    }
  },
  created() {
    const { name } = this.stock;
    this.series = this.$store.getters.movementSeriesByStock(name);
  },
  computed: {
    ...mapGetters({ movementRaw: 'movementRaw' }),
    /**
     * Transform daily stock movement into svg path.
     * 
     * @returns {String}
     */
    transformed() {
      const min = Math.min(...this.series);
      const max = Math.max(...this.series);
      let scaled = 1;
      let d = 'M ';
      const series = this.series.map(n => {
        // Flip value (max - n), because svg canvas `y` coordinates flipped upside down.
        scaled = Math.round(((max - n) / max) * 100);
        return scaled;
      });

      // transformation happen here, `x axis` moving forward by 5 points,
      // while `y axis` is got from scaled value from stock's daily 
      // movement 
      d += series.map((n, index) => {
        return `${index * 5} ${n}`;
      });
      
      return d;
    }
  },
});
</script>
