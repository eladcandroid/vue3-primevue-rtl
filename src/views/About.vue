<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$router);
    console.log("$route", this.$route);
    // setTimeout(() => this.$router.push({ name: "About" }), 3000);
  }
};
</script>
