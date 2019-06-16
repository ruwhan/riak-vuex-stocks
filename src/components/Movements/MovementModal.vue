<template>
  <modal name="movement_chart" :adaptive="true" width="100%" height="100%">
    <div slot="top-right">
      <button @click="hideMovementChart">
        <i class="glyphicon glyphicon-remove"></i>
      </button>
    </div>
    <Movement />
  </modal>
</template>
<style>
  .glyphicon.glyphicon-remove {
    z-index: 1;
    top: 12px;
  }
</style>

<script>
import Movement from "./Movement.vue";

export default {
  components: {
    Movement
  },
  methods: {
    /**
     * On click hide movement chart event handler.
     */
    hideMovementChart() {
      this.$modal.hide('movement_chart');
    }
  }
}
</script>

