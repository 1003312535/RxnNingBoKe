<template>
  <div class="RightMusic">
      <Top></Top>
    <div class="content">
      <aplayer :mutex="bool" autoplay :music="videoUpload.music" ref="aplayer"  theme="#41b883" showLrc float :list="muiceList" controls muted @click.native="btnclick"></aplayer>
    </div>
  </div>
</template>

<script>
  import aplayer from 'vue-aplayer'
  import Top from "./music/Top";
  export default {
    name: "RightMusic",
    components: {
      Top,
      aplayer
    },
    data(){
      return {
        content:['rise','sky','SomethingJustLikeThis','thatgril','bigfish'],
        bool: false,
        currentMuice: '',
        muiceList: [
          {
            title: 'sky',
            author: 'sky',
            url: require('assets/music/sky.mp3'),
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          },
          {
            title: 'rise',
            author: '英雄联盟',
            url: require('assets/music/rise.mp3'),
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          },
          {
            title: 'Something Just Like This',
            author: 'RenNing/孙人杰',
            url: require('assets/music/SomethingJustLikeThis.mp3'),
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          },
          {
            title: '大鱼',
            author: '周深',
            url: require('assets/music/bigfish.mp3'),
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          },
          {
            title: 'That girl',
            author: 'Ren/Sun',
            url: require('assets/music/thatgril.mp3'),
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          }
        ],
        videoUpload: {
          progress: false,
          progressPercent: 0,
          successPercent: 0,
          music: {
            title: 'That girl',
            author: 'Ren/Sun',
            url: require('assets/music/thatgril.mp3'),
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          }
        }
      }
    },
    methods: {
      btnclick(){
        this.currentMusic = this.$refs.aplayer.$refs.audio.src
        for (var i = 0; i < 5; i++){
          // console.log(this.content[i]);
          if ((this.currentMusic.indexOf(this.content[i]) >= 0)){
              this.$bus.$emit("currenturl",this.content[i])
            return false
          }
        }


      }
    }
  }
</script>

<style scoped>
  .RightMusic{margin-top: 20px;border-radius: 10px; overflow: hidden; background: #ff5777;border:1px solid rgba(34,36,38,.15);}
  .RightMusic:hover{box-shadow: 1px 1px 10px black}
  .content{padding: 10px 20px; line-height: 30px;
    opacity: .8;}
</style>