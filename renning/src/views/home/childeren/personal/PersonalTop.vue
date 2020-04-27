<template>
  <div class="PersonalTop">
    <Header>
      <template slot="left"><i class="iconfont icon-denglu"></i>个人资料</template>
      <template slot="right">更多</template>
    </Header>
  </div>
</template>

<script>
  import Header from 'components/content/header/Header'
  export default {
    name: "PersonalTop",
    components: {
      Header
    }
  }
</script>

<style scoped>
  .PersonalTop{}
</style>