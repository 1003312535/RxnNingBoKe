<template>
  <div class="PersonalData">
    <personal-top></personal-top>
    <div class="content">
      <div class="header">
        <img src="~assets/img/logo.png" alt="touxiao">
        <h4>Renning博客</h4>
      </div>
      <div class="description">
        <p>博客年龄：{{year}}年-{{month}}月-{{day}}日</p>
        <p>博客数量：{{contentlist.length}} 章</p>
        <p>浏览总次数：{{allcount}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import { formatDate } from '@/common/utils.js'

  import PersonalTop from "./personal/PersonalTop";
  export default {
    name: "PersonalData",
    components: {
      PersonalTop
    },
    data(){
      return {
        year:null,
        month:null,
        day:null
      }
    },
    props: {
      contentlist : {
        type:Array,
        default(){
          return []
        }
      },
      allcount:Number
    },
    mounted() {
      var old_time =new Date(1587694934425);
      var oldYear = old_time.getFullYear()
      var oldMonth = old_time.getMonth()+1
      var oldDay = old_time.getDate()
      var new_time = new Date(new Date())
      var newYear = new_time.getFullYear()
      var newMonth = new_time.getMonth()+1
      var newDay = new_time.getDate()
      this.year = newYear-oldYear
      this.month = newMonth-oldMonth
      this.day = newDay-oldDay
      // console.log( +'-'+ +'-'+ )
    },
    computed: {
      time1(){
        // var created_time = new_time - old_time
        // var time1 = new Date(created_time)
        // return formatDate(time1, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .PersonalData{width: 100%;height: 350px;background: #53ffa1;border-radius: 8px; overflow: hidden;border:1px solid rgba(34,36,38,.15);}
  .PersonalData:hover{box-shadow: 1px 1px 10px black;}
  .content{padding: 10px 20px;}
  .header{text-align: center;}
  .header img{width: 120px;height: 120px;border-radius: 50%;background: red}
  h4{margin-top: 10px;margin-bottom: 10px;}
  .description{}
  p{line-height: 14px;}
</style>