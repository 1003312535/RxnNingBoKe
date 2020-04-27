<template>
  <div class="CommentItem">
    <div class="img"><img src="~assets/img/logo.png" alt="1111"></div>
    <div class="content">
      <div class="top">
        <span class="nickname">昵称:{{commentitem.nickname}}</span>
        <span class="time">{{commentitem.created_time}}</span>
      </div>
      <div class="content1">
        <p>{{commentitem.content}}</p>
      </div>
      <div class="foot">
        回复
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentItem",
    props: {
      commentitem:Object
    }
  }
</script>

<style scoped>
  .CommentItem{width: 100%;display: flex;padding: 20px;font-family: "Adobe 宋体 Std L"}
  .img{width: 80px;}
  .img img{width: 60px;height: 60px;border-radius: 50%;background: #dfff8b}
  .content{margin-left: 10px; flex: 1;}
  .nickname{font-size: 24px;font-weight: 700; font-family: "Adobe 楷体 Std R";margin-right: 20px;}
  .time{color: rgb(153,153,153);font-size: 13px;}
  .content1{padding: 5px 15px; font-size: 16px;background: rgba(157,240,250,.5);border-radius: 5px;width: 95%;}
  .foot{color: rgb(153,153,153);font-size: 18px;margin-top: 10px;}
  .foot:hover{color: black;}
</style>