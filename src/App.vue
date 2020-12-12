<template>
  <div id="app">
    <div class="p-field-checkbox ui-rtl" dir="rtl">
      <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
      <label for="city1">Chicago</label>
    </div>
    <counter v-if="showCounter" />
    <button @click="showCounter = false">HIDE</button>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Checkbox from "primevue/checkbox";
export default {
  components: { Counter, Checkbox },
  data() {
    return {
      showCounter: true,
      cities: []
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
