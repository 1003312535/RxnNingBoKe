<template>
  <div class="Content1">
    <Top></Top>
    <tag-list></tag-list>
    <Comment></Comment>
  </div>
</template>

<script>
  import Top from "./Top"
  import TagList from "./TagList";
  import Comment from "./Comment";
  export default {
    name: "Content1",
    components: {
      Top,
      TagList,
      Comment
    }
  }
</script>

<style scoped>
  .Content1{width: 1300px; height: 1000px;background: #bce8f1;margin:20px auto;}
</style>