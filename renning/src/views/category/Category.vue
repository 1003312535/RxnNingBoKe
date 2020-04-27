<template>
  <div class="Category">
    <Content1></Content1>
  </div>
</template>

<script>
  import Content1 from "./childeren/Content";
  export default {
    name: "Category",
    components: {
      Content1
    },
    created() {
      console.log(this.$route.params.currentindex);
    }
  }
</script>

<style scoped>
  .Category{width: 100%;background: red;}
</style>