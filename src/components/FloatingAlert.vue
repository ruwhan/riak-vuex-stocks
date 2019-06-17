<template>
  <div :class="isHidden">
    Save success!
  </div>
</template>
<style>
  .alert.floating-alert {
    position: fixed;
    top: 32px;
    left: 50%;
    width: 420px;
    margin-left: -210px;
    z-index: 1;
  }
</style>
<script>
  import Vue from "vue";
  import { mapGetters } from "vuex";

  export default Vue.component('floating-alert', {
    computed: {
      ...mapGetters({
        successMessageShown: 'successMessageShown'
      }),
      /**
       * Get success message hidden state.
       * 
       * @returns {Boolean}
       */
      isHidden() {
        return this.successMessageShown 
          ? "alert alert-success floating-alert" 
          : "alert alert-success floating-alert hidden";
      }
    }
  });
</script>
