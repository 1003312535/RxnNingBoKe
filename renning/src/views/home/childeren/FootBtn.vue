<template>
  <div class="FootBtn">
    <div class="left" @click="backBtn"><i class="iconfont icon-shangyiye"></i>上一页</div>
    <div class="right" @click="goBtn">下一页<i class="iconfont icon-xiayiye"></i></div>
  </div>
</template>

<script>
  export default {
    name: "FootBtn",
    methods: {
      goBtn(){
        // console.log(this.btn)
        if(!this.btn){
          return false
        }
        this.page = this.page + 1
        this.$bus.$emit('gobtn',this.page)
      },
      backBtn(){
        if(this.page <= 1){
          return false
        }
        this.page = this.page - 1
        this.$bus.$emit('backbtn',this.page)
      }
    },
    props: {
      btn:Boolean
    },
    data(){
      return {
        page: 1
      }
    }
  }
</script>

<style scoped>
  .FootBtn{width: 100%;height: 100px; padding: 0 20px;border-top:2px solid black;}
  .FootBtn div{border:1px solid red; background: royalblue;margin-top: 36px;padding: 5px 10px; border-radius: 5px;}
  .FootBtn div:hover{box-shadow: 1px 1px 3px black; background: #ffb346;color: white}
  .left i{margin-right: 10px;}
  .right i {margin-left: 10px}
  .left{float: left}
  .right{float: right}
</style>