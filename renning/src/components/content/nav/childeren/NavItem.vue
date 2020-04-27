<template>
  <div id="NavItem" >
    <a href="javascript:;" :class="{active: isActive}" @click="btnClick" class="a">
      <slot></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: "NavItem",
    data(){
      return {
        clickpath: '/home'
      }
    },
    props: {
      path: {
        type: String,
        default: '/home'
      }
    },
    computed: {
      isActive(){
        return this.$route.path == this.path
      }
    },
    methods: {
      btnClick(){
        this.clickpath = this.path
        this.$router.push(this.path)

      }
    }
  }
</script>

<style scoped>

  #NavItem{ float: left; margin:0 5px; font-size: 18px;font-family: "Adobe 楷体 Std R"}
  .a {padding: 5px 10px; border-radius: 5px; text-decoration: none; color: white; opacity: .6}
  .a i{margin-right: 5px; width: 20px; display: inline-block;height: 20px;}
  .a:hover{background: red;opacity: 1;}
  .active{opacity: 1;background: #ff5777;}

</style>