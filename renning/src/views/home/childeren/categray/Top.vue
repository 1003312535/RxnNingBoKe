<template>
  <div class="top">
      <Header>
        <template slot="left"><i class="iconfont icon-leimupinleifenleileibie"></i>分类</template>
        <template slot="right">更多··</template>
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