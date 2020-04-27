<template>
  <div class="Top">
    <Header @btnClick="btnClick">
      <template slot="left" ><i class="iconfont icon-fanhui-copy-copy"></i>返回</template>
      <template slot="right" class="right">
        <a href="javascript:;"><i class="iconfont icon-chakan"></i>
          {{count}}阅读</a>
      </template>
    </Header>
  </div>
</template>

<script>
  import Header from "components/content/header/Header";
  export default {
    name: "Top",
    components: {
      Header
    },
    props: {
      count:Number
    },
    methods: {
      btnClick(){
        console.log('hhh');
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .right {color: black}
</style>