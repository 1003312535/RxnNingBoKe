<template>
  <div class="LeftTop">
    <div class="left">
      首页
    </div>
    <div class="right">共{{count}}章</div>
  </div>
</template>

<script>
  export default {
    name: "LeftTop",
    props: {
      count: Number
    }
  }
</script>

<style scoped>
  .LeftTop{width: 100%; height: 50px; background: #8a6d3b;line-height: 50px;padding: 0 10px;font-size: 24px;font-weight: 700;color: yellow;border-radius: 6px;border-bottom: 5px solid #bce8f1;}
  .left{float: left;}
  .right{float: right}
</style>