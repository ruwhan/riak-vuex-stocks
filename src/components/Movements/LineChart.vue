<script>
  import Vue from "vue";
  import Chartist from "chartist";

  export default Vue.component('LineChart', {
    props: {
      dataSource: Object,
    },
    data () {
      return {
        options: {
          fullWidth: true,
          height: 420,
          lineSmooth: true,
        },
      }
    },
    template: `<div ref="divNode" class="ct-chart ct-perfect-fourth"></div>`,
    mounted() {
      const _me = this;
      const divNode = this.$refs.divNode;
      
      // Init Chartist line chart.
      this.$nextTick(() => {
        new Chartist.Line(divNode, _me.dataSource, _me.options);
      })
    },
  });
</script>