<template>
  <div data-test="count">{{ count }} {{ seconds }}</div>
  <button @click="increment()">Increment</button>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { mapGetters, mapState, useStore } from "vuex";

function useInterval(secondsToInterval = 1) {
  const seconds = ref(0);
  const interval = ref(null);
  onMounted(
    () =>
      (interval.value = setInterval(() => {
        seconds.value++;
        console.log("blah");
      }, secondsToInterval * 1000))
  );
  onUnmounted(() => clearInterval(interval.value));
  return {
    seconds
  };
}

export default {
  name: "counter",
  data() {
    return {
      title: "BEST COUNTER EVER"
    };
  },
  setup() {
    const store = useStore();
    const { seconds } = useInterval(3);
    return {
      increment: () => store.commit("increment"),
      seconds
    };
  },
  methods: {
    // ...mapMutations(["increment"])
    // increment() {
    //   this.$store.commit("increment");
    // }
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
