<template>
  <div class="Top">
    <Header>
      <template slot="left"><i class="iconfont icon-yinyue"></i>音乐</template>
      <template slot="right"></template>
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