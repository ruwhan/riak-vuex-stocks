<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" >
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          <router-link to="/split" activeClass="active" tag="li"><a>Split View</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Cash: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a href="#" class="dropdown-toggle" 
              data-toggle="dropdown" 
              role="button" 
              aria-haspopup="true" 
              aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save</a></li>
              <li><a href="#" @click="loadData">Load</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
      <div>
        <floating-alert />
      </div>
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import { FloatingAlert } from "./FloatingAlert.vue";

  export default {
    data () {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      ...mapGetters(['stocks','portfolio','funds'])
    },
    methods: {
      ...mapActions({
        endDayAction: 'endDay',
        loadDataAction: 'loadData',
        saveDataAction: 'saveData'
      }),
      endDay() {
        this.endDayAction();
        this.$modal.show('movement_chart');
        // this.$router.push({ path: '/movement' });
      },
      saveData() {
        this.saveDataAction();
      },
      loadData() {
        this.loadDataAction();
      }
    }
  }
</script>