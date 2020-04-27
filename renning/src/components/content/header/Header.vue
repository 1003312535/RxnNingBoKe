<template>
  <div id="Header">
    <div class="left" @click="btnClick">
      <slot name="left"></slot>
<!--      首页-->
    </div>
    <div class="right">
      <a href="javascript:;"><slot name="right"></slot></a>

<!--      更多-->
    </div>

  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      btnClick(){
        this.$emit("btnClick")
      }
    }
  }
</script>

<style scoped>
  #Header{width: 100%;height: 49px; background: #68eeff;border-bottom: 4px solid black;line-height: 49px;display: flex;padding:0 10px;}
  .left{width: 50%}
  .right{flex: 1;text-align: right}
  a{color: #34d1ff}
  a:hover{color: #4cae4c}
  i{margin-right: 10px;}
</style>