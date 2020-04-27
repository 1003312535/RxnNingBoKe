<template>
  <div class="LeftComment">
    <comment-item v-for="(item, index) in contentlist" :contentitem="item" :key="index"></comment-item>

  </div>
</template>

<script>
  import CommentItem from "./Comment-item"
  export default {
    name: "LeftComment",
    components: {
      CommentItem
    },
    props: {
      contentlist: Array,
      default(){
        return []
      }
    }
  }
</script>

<style scoped>
  .LeftComment{width: 100%;height: calc(100% - 55px);background: #ffe26f; border-radius: 5px;overflow: auto;}

</style>