<template>
  <div class="LeftComment">
    <comment-item v-for="(item, index) in contentlist" :contentitem="item" :key="index"></comment-item>

  </div>
</template>

<script>
  import CommentItem from "./Comment-item"
  import { FindTag } from 'network/tag'
  export default {
    name: "Comment",
    components: {
      CommentItem
    },
    data(){
      return {
        contentlist:[]
      }
    },
    mounted() {
      FindTag('Java').then( res => {
        this.contentlist = res
      })
      this.$bus.$on('findtag', (tag) => {
        FindTag(tag).then( res => {
          this.contentlist = res
        })
      })
    }
  }
</script>

<style scoped>
  .LeftComment{width: 100%;height: calc(100% - 55px);background: #ffe26f; border-radius: 5px;overflow: auto;}

</style>