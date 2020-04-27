<template>
  <div class="Tag">
    <a href="javascript:;"><div class="categray"><div><slot>我是分类</slot></div></div></a>
  </div>
</template>

<script>
  export default {
    name: "Tag"
  }
</script>

<style scoped>
  .categray{padding:10px 0;position: relative}
  .categray div{float: left; border: 1px solid red; color: blue;padding:2px; border-radius: 10px;font-size: 14px;border-left: none; color: red;}
  .categray div:before{content: '';position: absolute;width: 14px; height: 14px;left: -4px;top: 16.5px;transform: rotate(45deg);border:1px solid red; border-right-color: transparent;border-top-color: transparent;}
</style>