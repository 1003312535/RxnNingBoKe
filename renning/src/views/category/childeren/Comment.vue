<template>
  <div class="LeftComment">
    <comment-item v-for="(item, index) in contentlist" :contentitem="item" :key="index"></comment-item>
  </div>
</template>

<script>
  import CommentItem from "./Comment-item"
  import { FindCategory } from 'network/category'
  export default {
    name: "Comment",
    components: {
      CommentItem
    },
    data(){
      return {
        contentlist:[],
        categ:['学习笔记','环境搭建','拆坑记录','博客搭建史','Web之路']
      }
    },
    mounted() {
      FindCategory(this.categ[this.$route.params.currentindex]).then( res => {
        this.contentlist = res
      })
      this.$bus.$on('findcategory', (category) => {
        // console.log('haaaaa');
        FindCategory(category).then( res => {
          this.contentlist = res
        })
      })
    }
  }
</script>

<style scoped>
  .LeftComment{width: 100%;height: calc(100% - 55px);background: #ffe26f; border-radius: 5px;overflow: auto;}

</style>