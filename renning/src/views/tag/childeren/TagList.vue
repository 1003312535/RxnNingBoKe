<template>
  <div class="TagList">
    <tag-item v-for="(item, index) in taglist"
              :tagdata="item" :key="index"
              @click.native="btnClick(index)" :class="{active: index == currentIndex}"></tag-item>
  </div>
</template>

<script>
  import TagItem from "./TagItem";
  export default {
    name: "TagList",
    data(){
      return {
        taglist: ['Java', 'Linux', '服务器', 'Python', 'Jquery', 'qinghoudiang ', 'Linux', '服务器', 'Python', 'Jquery', 'qinghoudiang', 'Linux', '服务器', 'Python', 'Jquery', 'qinghoudiang ', 'Linux', '服务器', 'Python', 'Jquery', 'qinghoudiang '],
        currentIndex: 0
      }
    },
    components: {
      TagItem
    },
    methods: {
      btnClick(index){
        // console.log(index);
        this.currentIndex = index
        this.$bus.$emit('findtag', this.taglist[index])
      }
    }
  }
</script>

<style scoped>
  .TagList{width: 100%;background: royalblue;border-bottom: 10px solid black;padding: 30px 40px;display: flex; flex-wrap: wrap;}
  .active{background: yellow;box-shadow: 1px 1px 10px black}
</style>