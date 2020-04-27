<template>
  <div class="Top">
    <Header>
      <template slot="left">标签</template>
      <template slot="right">共20章</template>
    </Header>
  </div>
</template>

<script>
  import Header from "components/content/header/Header";
  export default {
    name: "Top",
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>