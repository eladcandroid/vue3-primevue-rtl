<template>
  <div id="app">
    <counter v-if="showCounter" />
    <button @click="showCounter = false">HIDE</button>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  components: { Counter },
  data() {
    return {
      showCounter: true
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
