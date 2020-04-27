<template>
  <div class="CommentList">
    <h1>评论区</h1>
    <div class="xian"></div>
      <comment-item v-for="(item, index) in commentlist" :key="index" :commentitem="item"></comment-item>
<!--    {{commentlist}}-->
  </div>
</template>

<script>
  import CommentItem from "./CommentItem";
  export default {
    name: "CommentList",
    components: {
      CommentItem
    },
    props: {
      commentlist:Array
    }
  }
</script>

<style scoped>
  .CommentList{width: 90%;margin: auto; border-radius: 10px;background: rgba(255,255,255,.6)}
  h1{font-size: 30px; font-weight: 600;}
  .xian{height: 3px;background: black;margin-bottom: 5px;}
</style>