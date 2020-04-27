<template>
  <div class="RightCategray">
    <Top></Top>
    <div class="content">
      <a href="javascript:;" v-for="(item, index) in category" @click="btnClick(index)"><div>{{item}}<i>数量</i></div></a>
    </div>
  </div>
</template>

<script>
  import Top from "./categray/Top";
  export default {
    name: "RightCategray",
    data(){
      return  {
        category: ['学习笔记','环境搭建','拆坑记录','博客搭建史','Web之路']
      }
    },
    components: {
      Top
    },
    methods: {
      btnClick(index) {
        this.$router.push('/category/'+index)
      }
    }
  }
</script>

<style scoped>
  .RightCategray{margin-top: 20px;border-radius: 10px; overflow: hidden; background: #ff5777;border:1px solid rgba(34,36,38,.15);}
  .RightCategray:hover{box-shadow: 1px 1px 10px black}
  .content{padding: 10px 20px; line-height: 30px;}
  .content a div{border: 1px solid black;-webkit-box-sizing: border-box;border-radius: 5px;box-shadow: 1px 1px 1px 1px red; padding: 4px 10px; margin-bottom: 10px;}
  .content a div i{float: right}
  a{color: black;}
</style>