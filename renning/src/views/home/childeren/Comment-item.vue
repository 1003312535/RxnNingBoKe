<template>
  <div class="Comment-item">

    <div class="left">
      <a href="javascript:;" @click="btnClick">
        <h3>{{contentitem.title}}</h3>
      </a>
      <p class="description">{{contentitem.description}}</p>
      <div class="profile">
        <div class="nickname">
          <img src="~assets/img/logo.png" alt="我是头像">
          {{contentitem.nickname}}
        </div>
        <div class="tag" v-for="item in contentitem.tag">{{item}}</div>
      </div>
      <div class="createTime">
        <a href="javascript:;"><i class="iconfont icon-leimupinleifenleileibie"></i>
          {{time}}</a>
        <a href="javascript:;"><i class="iconfont icon-pinglun"></i>{{contentitem.comment.length}}</a>
        <a href="javascript:;" @click.once="likebtn($event)"><i class="iconfont icon-dianzan"></i>
          {{contentitem.like}}</a>
        <a href="javascript:;"><i class="iconfont icon-chakan"></i>{{contentitem.watch}}</a>
      </div>
      <div class="categray">
        <div class="box" v-for="item in contentitem.category"><div><a href="javascript:;">{{item}}</a></div></div>
        </div>
    </div>
    <!--    图片-->
    <div class="right">
      <a href="javascript:;" class="right" @click="btnClick">
        <img :src="contentitem.img" alt="tupian">
      </a>

    </div>
  </div>
</template>

<script>
  import { formatDate } from '@/common/utils.js'
  import { Like } from 'network/like.js'
  import { Watch } from "network/watch";

  export default {
    name: "Comment-item",
    components: {
    },
    methods: {
      //点击进入
      btnClick(){
        this.contentitem.watch++
        Watch(this.contentitem._id, this.contentitem.watch).then(res => {console.log('hahaha')})
        var contentitem =this.contentitem
        this.$router.push('/comment/'+this.contentitem.title)
      },
      //点赞
      likebtn($event){
        this.contentitem.like++
        $event.target.style.color = 'red'
        Like(this.contentitem._id, this.contentitem.like).then(res => {console.log('hahaha')})
      }
    },
      computed: {
        time(){
          var time = new Date(this.contentitem.created_time).getTime() // 获取时间戳
          var create_time = new Date(time)
          return formatDate(create_time,'yyyy/MM/dd hh:mm:ss')
        }
      },
    props: {
      contentitem:Object,
      default(){
        return {}
      }
    }
  }
</script>

<style scoped>
  .Comment-item{display: flex; width: 95%;height: 280px;margin: 0 auto;border-bottom: 1px solid black;padding: 50px 0;font-family: "Adobe 楷体 Std R";padding: 5%}
  .Comment-item:hover{position:relative; left: -2px; border:1px solid red; box-shadow: 1px 1px 10px red;}
  a{color: black}
  .left{width: 75%;height: 100%;margin-right: 10px;}
  h3{font-size: 30px;font-weight: 70;}
  .profile{ padding: 2px 0;margin-top: -14px;overflow: hidden}
  .description{overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;}
  .nickname img{ width: 30px; height: 30px;margin-right: 10px;}
  .nickname{float: left}
  .profile .tag {float: right; border:1px solid black;border-radius: 5px;color: rgb(0,187,174);margin-left: 20px;padding: 1px 5px;}
  .clear{width: 100%;padding-top: 1px;}
  .createTime{width: 100%; padding-top:10px;  }
  .createTime i{margin: 0 10px}
  /*.categray{overflow: hidden}*/
  /*.box{padding-right: 10  px;}*/
  .box a{color: red; margin-right: 10px;}
  .categray .box div{float: left; border: 2px solid red; color: blue;padding:2px; border-radius: 10px;font-size: 14px;border-left: none; color: red;  margin-right: 20px;}
  .categray .box div:before{display: inline-block; content: '';position: relative;width: 14px; height: 14px;left: -6px;top: 3px;transform: rotate(45deg);border:1px solid red; border-right-color: transparent;border-top-color: transparent;}
  .right{flex: 1; overflow: hidden; text-align: center}
  .right img{width: 100%;height: 100%}
</style>