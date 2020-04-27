<template>
  <div class="CommentContent">
    <Top :count="allcontent.watch"></Top>
    <Middle :allcontent="allcontent"></Middle>
    <foot-comment :id="allcontent._id"></foot-comment>
  </div>
</template>

<script>
  import Middle from "./Middle";
  import Top from "./Top";
  import FootComment from "./FootComment";
  export default {
    name: "CommentContent",
    data(){
      return {

      }
    },
    components: {
      Top,
      Middle,
      FootComment
    },
    mounted() {
      var height = this.$el.offsetHeight
      // console.log(this.$el.offsetHeight)
      // this.$bus.$emit('height', height)
    },
    props: {
      allcontent: Object
    }
  }
</script>

<style scoped>
  .CommentContent{width: 1300px; background: rgba(255,255,255,.6);margin:auto;}
</style>