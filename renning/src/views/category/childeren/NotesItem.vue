<template>
  <div class="NotesItem" >
    <div class="left">{{category}}</div>
    <div class="right">1</div>
  </div>
</template>

<script>
  export default {
    name: "NotesItem",
    data(){
      return {

      }
    },
    props: {
      category: String
    },
    methods: {

    }
  }
</script>

<style scoped>
  .NotesItem{border: 1px solid black; justify-content: space-around;  width: 160px;border-radius: 5px;height: 40px; line-height: 40px; overflow: hidden;display: flex;
    margin-right: 20px;background: white  }
  .NotesItem:hover,.NotesItem:hover .right:before{box-shadow: 1px 1px 6px black;background: red}
  .left{flex: 1;padding-left: 10px;font-family: "Adobe 楷体 Std R"}
  .right{border-left: 1px solid black;width: 50px; text-align: center;position: relative;}
  .right:before{content: "";display: inline-block;border: 1px solid black;width: 20px; height: 20px;transform: rotate(45deg); left: -10.5px;
    top: 9px;border-top: transparent;border-right: transparent;background: white;
    position: absolute;}
  .right:before:hover{background: red;}
</style>