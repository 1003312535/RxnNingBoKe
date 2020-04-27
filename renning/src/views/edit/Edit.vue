<template>
  <div class="Edit">
    <div class="content">
      <form @submit.preven="btnClick">
        <p>
          <label for="title"><span><h1>文章标题</h1></span><input type="text" id="title" name="title" v-model="allData.title" @keydown.enter.prevent="stop"></label>
        </p>
        <p>
          <label for="description"><span><h1>description</h1></span>
            <textarea name="description" id="" cols="80" rows="5" v-model="allData.description" id="description"></textarea>
            <!--            <input type="textarea" id="description" name="description" v-model="allData.description">-->
          </label>
        </p>
        <p>
          <img :src="img" alt="user image" style="width: 200px; border:1px solid red;margin-right: 20px;">
          <label for="file"><span><h1>img</h1></span><input type="file" @change="getFile($event)" ref="file" id="file"></label>
        </p>

        <p>
          <label for="content"><span><h1>content</h1></span>
            <mavon-editor
              v-model="content"
              ref="md"
              @change="change"
              style="min-height: 600px"
            />
          </label>
        </p>
        <p>
          <label for="category"><span><h1>category：</h1></span>
                <div class="checked">
                    <div class="checkeditem categoryitem" v-for="(item,index) in categorys" @click="categorybtn(index, item, $event)">{{item}}</div>
                </div>
<!--            <input type="text" id="category" name="category" v-model="allData.category">-->
          </label>
        </p>
        <p>
                  <label for="tag"><span><h1>tag</h1></span>
                    <div class="checked">
                        <div class="checkeditem tag" v-for="(item,index) in tags" @click="tagbtn(index, item, $event)">{{item}}</div>
<!--                    <input type="text" id="tag" name="tag" v-model="allData.tag">-->
                    </div>
                  </label>
        </p>
        <!--      <button @click="btnClick($event)"> 提交</button>-->
        <button type="submit">发布文章</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {Edit} from 'network/edit'
  // import VueMarkdown from 'vue-markdown'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: "Edit",
    data(){
      return {
        isactive: -1,
        allData:{},
        img: require('@/assets/img/logo.png'),
        content:``,
        html:'',
        tags:['Java','Linux','服务器','SpringBoot','Jquery','前后端分离','Hbase','Hadoop','Html+Css','tomcat','LayUI','Vue','JSONP','chrome','iframe','node.js','session','cookie','AJAX','JavaScript','Express','batter-scall'],
        categorys:['学习笔记','环境搭建','拆坑记录','博客搭建史'],
        tag:[],
        category:[]
      }
    },
    created() {

    },
    computed:{
      // isActive(){
      //   return this. isactive = this.currentIndex;
      // }
    },
    components: {
      mavonEditor
    },
    methods: {
      stop(){
        return false
      },
      //处理上传的图片
      getFile (e) {
        let _this = this
        var files = e.target.files[0]
        if (!e || !window.FileReader) return  // 看支持不支持FileReader
        let reader = new FileReader()
        reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
        reader.onloadend = function () {
          _this.img = this.result
        }
      },
      //发布文章处理
      btnClick($event){
        $event.preventDefault()
        this.allData.img = this.img
        this.allData.content = this.html
        this.allData.tag = this.tag
        this.allData.category = this.category
        if (!(this.allData.title && this.allData.description && this.allData.content && this.allData.tag && this.allData.category)){
          alert('请完善内容')
          return false
        }
        // console.log(this.allData);
        Edit(this.allData).then( (res) => {
            // alert(res)
            this.$router.push('/home')
        })
        return false
      },
      //md 编辑文章
      change(value, render){
        // render 为 markdown 解析后的结果[html]
        this.html = render;
      },
      //tag
      tagbtn(index, item, $event){
        if ($event.target.classList.length == 3){
              var currentIndex = this.tag.findIndex( (value, index, err) => {
                return value == item
              })
          this.tag.splice(currentIndex,1)
          $event.target.classList.remove('active')
          console.log(this.tag);
        }else{
          this.tag.push(this.tags[index])
          console.log(this.tag)
          $event.target.classList.add('active')
          console.log($event.target.classList.length)
        }

      },
      //category
      categorybtn(index, item, $event){
        if ($event.target.classList.length == 3){
          var currentIndex = this.category.findIndex( (value, index, err) => {
            return value == item
          })
          this.category.splice(currentIndex,1)
          $event.target.classList.remove('active')
          console.log(this.category);
        }else {
          this.category.push(this.categorys[index])
          $event.target.classList.add('active')
          console.log(this.category);
        }
      }
    }
  }
</script>

<style scoped>
  /*.Edit{background: url("")}*/
  .content{width:1300px; height: 100%;  margin:40px auto;background: rgba(255, 255, 255, .5)}
  h1{font-size: 20px;font-weight: 900; font-family: "Adobe 仿宋 Std R"}
  p{line-height: 60px; text-align: center}
  textarea{line-height: 30px; resize:none;}
  textarea:focus{box-shadow: 1px 1px 8px #bce8f1}
  input{ width: 500px;height: 40px;border:1px solid black;border-radius: 10px;outline: none;font-size: 25px; text-align: center;}
  input:focus{ box-shadow: 1px 1px 8px #bce8f1}
  input[type='file']{font-size: 10px;line-height: 40px;background: #d6e9c6}
  button{position: fixed; right: 60px;top: 90px;font-size: 40px;border-radius: 10px;background: #5bc0de;padding: 20px;writing-mode: vertical-rl;
    }
  .checked{width: 800px  ; display: flex;font-size: 16px;flex-wrap: wrap;line-height: 16px;}
  .checkeditem{padding: 10px 20px; border:1px solid black; border-radius: 5px;margin: 5px 10px;}
  .checkeditem:hover{background: #10ff8b;box-shadow: 1px 1px 6px black}
  .active{background: red;box-shadow: 1px 1px 6px black}
</style>