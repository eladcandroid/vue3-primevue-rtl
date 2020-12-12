<template>
  <div>doubleCountComputed: {{ doubleCountComputed }}</div>
  <button @click="$store.dispatch('incrementCountBy10')">Increment</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
// import { INCREMENT_MUTATION } from "@/store/mutation-types.js";

export default {
  name: "counter",
  mounted() {
    this.$store.dispatch("users/login");
  },
  data() {
    return {
      title: "BEST COUNTER EVER"
    };
  },
  methods: {
    ...mapMutations("increment"),
    ...mapActions("users", ["login"])
  },
  computed: {
    titleLength() {
      return this.title.length;
    },
    // count() {
    //     return this.$store.state.count
    // }
    ...mapState(["shuki", "count"]),
    ...mapGetters({ doubleCountComputed: "doubleCount" }),
    doubleCountLocal() {
      return this.count * 2;
    }
  }
};
</script>

<style scoped></style>
