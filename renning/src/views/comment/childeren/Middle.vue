<template>
  <div class="Middle">
    <h1>{{allcontent.title}}</h1>
    <p><span class="left">作者：{{allcontent.nickname}}</span><span class="right">时间{{allcontent.created_time}}</span></p>
    <div class="content markdown-body" v-html="allcontent.content"></div>
  </div>
</template>

<script>
    import 'github-markdown-css'
  export default {
    name: "Middle",
    props: {
      allcontent:Object
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .Middle{padding: 30px 40px;}
  h1{text-align: center}
  .left{margin-left: 20px;}
  .right{margin-right: 20px;}
  .content{margin-top: 100px}
</style>