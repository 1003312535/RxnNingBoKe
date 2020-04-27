<template>
  <div id="Reserch">
    <input type="text" placeholder="收索内容" name="reserch" class="reserch">
    <i class="iconfont icon-shousuo">...</i>
  </div>
</template>

<script>
  export default {
    name: "Reserch"
  }
</script>

<style scoped>
  #Reserch{float: right;}
  .reserch{width: 250px; height: 30px;border-radius: 4px; padding-right: 25px;border: none;padding: 10px;font-size: 14px;background: none;color: white;outline-style: none;}
  i{display: inline-block; margin-left: -25px;opacity: .6; color: white}
  i:hover, .reserch:focus+i{opacity: 1;}
</style>