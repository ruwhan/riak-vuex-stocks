<template>
  <div>
    <h1>Stock Trading Demo Vuex App</h1>
    <h5>You may Save & Load your data</h5>
    <h5>Click 'End Day' to simulate the closing price</h5>
    <hr>
    <p>Your cash: {{ funds | currency }}</p>
  </div>
</template>
<script>
  export default {
    computed: {
      funds(){
        return this.$store.getters.funds;
      }
    }
  }
</script>