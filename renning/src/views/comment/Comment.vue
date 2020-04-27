<template>
  <div class="Comment">
    <div id="bg"></div>
    <comment-content :allcontent="allcontent"></comment-content>
  </div>
</template>

<script>
  import { Comment } from "network/comment";

  import CommentContent from "./childeren/CommentContent";
  export default {
    name: "Comment",
    data(){
      return {
        allcontent: {}
      }
    },
    mounted() {
      Comment(this.$route.params.title).then( (res) => {
        this.allcontent = res[0]
        var img = this.allcontent.img.replace(/\s/g, encodeURIComponent(' '))
        this.allcontent.img = img
        var bg = document.getElementById('bg')
        this.$bus.$on('height', (height) =>{
          console.log(height)
        })
        bg.style.background = `url(${this.allcontent.img})`
        bg.style.backgroundPosition = "center";
        bg.style.backgroundSize ="cover";
        bg.style.filter= "blur(3px)";
      })
    },
    components: {
      CommentContent
    }
  }
</script>

<style scoped>
  .Comment{width:100%;height: 100%}
  #bg{width: 100%;background: blue;position: fixed ;z-index: -11;height: 100%;left: 0; top: 0;}
</style>