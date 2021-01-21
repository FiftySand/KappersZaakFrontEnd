<template>
  <div id="app">
    <div id="nav">
      <kapper-header v-if="Role == 'kapper'"></kapper-header>
      <customer-header v-if="Role == 'klant'"></customer-header>
      <top-header v-if="Role == '' || Role == null"></top-header>
    </div>
    <router-view />
  </div>
</template>
<script>
import KapperHeader from "@/components/KapperHeader.vue";
import CustomerHeader from "@/components/CustomerHeader.vue";
import TopHeader from "@/components/TopHeader.vue";
export default {
  components: {
    KapperHeader,
    CustomerHeader,
    TopHeader,
  },
  data() {
    TopHeader;
    return {
      Role: localStorage.getItem("userRole"),
    };
  },
  created() {},
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0000;

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
