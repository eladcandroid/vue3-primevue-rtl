<template>
  <div class="about">
    <h1>Shuki Page: {{ id }}</h1>
    <router-link to="/shuki/2">Shuki 2</router-link>
    <button @click="check = 10">Dudi</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      check: {
        dudi: 3
      }
    };
  },
  created() {
    console.log("created");

    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     console.log("toParams: ", toParams);
    //     console.log("previousParams: ", previousParams);
    //     // react to route changes...
    //   }
    // );
  },
  mounted() {
    console.log("mounted: $route", this.$route.params);
  },
  updated() {
    console.log("updated");
  },
  watch: {
    id: function(toParams, previousParams) {
      console.log("toParams: ", toParams);
      console.log("previousParams: ", previousParams);
      // react to route changes...
    },
    "check.dudi": function(to, prev) {
      console.log("check2 dudi", to, prev);
    },
    check: function(to, prev) {
      console.log("check1", to, prev);
    }
  }
};
</script>
