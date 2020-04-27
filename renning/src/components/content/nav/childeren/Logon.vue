<template>
  <div class="Logon">
    <nav-item path="/logon">
      <i class="iconfont icon-denglu"></i>登录
    </nav-item>
    <nav-item path="/home">
      <i class="iconfont icon-tuichu"></i>退出
    </nav-item>
  </div>
</template>

<script>
  import NavItem from "./NavItem";
  export default {
    name: "LogonIn",
    components: {
      NavItem
    }
  }
</script>

<style scoped>
 .Logon{float: right; margin-left: 30px;}
</style>