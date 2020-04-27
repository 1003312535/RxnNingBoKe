<template>
  <div class="RightEdit">
    <Top></Top>
    <div class="content">
      <a href="javascript:;" @click="btnClick">进入编辑页面</a>
      <Calendar
        :sundayStart="true"
      ></Calendar>
    </div>

  </div>
</template>

<script>
  import Top from "./edit/Top";
  import Calendar from 'vue-calendar-component';
  export default {
    name: "RightEdit",
    components: {
      Calendar,
      Top
    },
    methods: {
      btnClick(){
        this.$router.push('/edit')
      }
    }
  }
</script>

<style scoped>
  /*.RightEdit{width: 100%;height: 100px;background: yellow;background: }*/
  .RightEdit{margin-top: 20px;border-radius: 10px; overflow: hidden; background: #ff5777;border:1px solid rgba(34,36,38,.15);}
  .RightEdit:hover{box-shadow: 1px 1px 10px black}
  .content{padding: 10px 20px; line-height: 30px;}
  .card div:nth-child(1){
    background-color:black;
    padding-bottom:0;
  }
  .card div:nth-child(3) div ,.card div:nth-child(2) div{
    height: 35px;
    width: 35px;
  }
  /*今天*/
  .wh_content_item .wh_isToday[data-v-2ebcbc83]{
    background-color:rgb(1,1,1);
  }
  /*日历点击*/
  .wh_content_item .wh_chose_day[data-v-2ebcbc83]{
    background-color:transparent;
  }
  /*日历划过*/
  .wh_item_date[data-v-2ebcbc83]:hover{
    background-color:rgb(1, 1, 1);
    border-radius: 100%;
  }
</style>