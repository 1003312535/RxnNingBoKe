<template>
  <div class="LeftContent">
      <left-top :count="contentlist.length"></left-top>
      <left-comment :contentlist="contentlist"></left-comment>
      <foot-btn :btn="btn"></foot-btn>
  </div>
</template>

<script>
  import LeftTop from "./leftcomment/LeftTop";
  import LeftComment from "./LeftComment";
  import FootBtn from "./FootBtn";
  export default {
    name: "LeftContent",
    components: {
      LeftTop,
      LeftComment,
      FootBtn
    },
    props: {
      contentlist: Array,
      btn:Boolean,
    },

  }
</script>

<style scoped>
  .LeftContent{width: 73%; height: 100%;background: yellow;float: left;border:1px solid rgba(34,36,38,.15);border-radius: 5px;}
  .LeftContent:hover{box-shadow: 1px 2px 10px black}
</style>