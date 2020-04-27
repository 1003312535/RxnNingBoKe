<template>
  <div class="Nav">
    <nav-item path="/home">
      <i class="iconfont icon-iconfontzhizuobiaozhun023101" ></i>首页
    </nav-item>
    <nav-item path="/category/0">
      <i class="iconfont icon-denglu"></i>分类
    </nav-item>
    <nav-item path="/tag/0">
      <i class="iconfont icon-gerenxinxi"></i>标签
    </nav-item>
    <nav-item path="/interfile">
      <i class="iconfont icon-guidang"></i>归档
    </nav-item>
  </div>
</template>

<script>
  import NavItem from './NavItem'
  export default {
    name: "Nav",
    props: {
      path: String
    },
    components: {
      NavItem
    },
    methods: {
      logonin(){
        this.$router.push('/logon')
      },
      register(){
        this.$router.push('/register')
      },
      comment(){
        this.$router.push('/tcommen')
      },
      home(){
        this.$router.push('/home')
      }

    }
  }
</script>

<style scoped>
  .Nav{
    float: left;
  }

</style>