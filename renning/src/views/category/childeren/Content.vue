<template>
  <div class="Content">
    <Top class="top"></Top>
    <Notes></Notes>
    <Comment></Comment>
  </div>
</template>

<script>
  import Top from "./Top";
  import Notes from "./Notes";
  import Comment from './Comment'
  export default {
    name: "Content",
    components: {
      Top,
      Notes,
      Comment
    }
  }
</script>

<style scoped>
  .Content{width: 1300px; height: 1000px;background: #bce8f1;margin:20px auto;}
</style>