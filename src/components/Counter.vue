<template>
  <div>{{ count }}</div>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style scoped></style>
