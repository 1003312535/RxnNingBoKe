<template>
  <div class="Notes" >
    <notesItem v-for="(item, index) in categorys"
               :key="index" :category="item"
               :class="{active: index == currentIndex}"
               @click.native="btnClick(index)"
    ></notesItem>
  </div>
</template>

<script>
  import NotesItem from "./NotesItem";
  export default {
    name: "Notes",
    data(){
      return {
        categorys:['学习笔记','环境搭建','拆坑记录','博客搭建史','Web之路'],
        currentIndex: 0
      }
    },
    components: {
      NotesItem
    },
    created() {
      this.currentIndex = this.$route.params.currentindex
    },
    methods: {
      btnClick(index){
        // console.log(index);
        this.currentIndex = index
        this.$bus.$emit('findcategory', this.categorys[index])

      }
    }
  }
</script>

<style scoped>
  .Notes{width: 100%;background: royalblue;border-bottom: 10px solid black;padding: 30px 40px;display: flex}
  .active{background: yellow;box-shadow: 1px 1px 10px black}
</style>