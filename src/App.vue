<template>
  <div class="container">
    <AppHeader></AppHeader>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
export default {
  components: {
    AppHeader
  },
  created(){
    // Vue instance is created in the lifecycle
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
body {
  padding-top: 30px;
}
</style>
