<template>
  <div class="FootComment">
    <comment-list :commentlist="commentlist"></comment-list>
    <b_comment
      ref="my_comment"
      :placeholder="placeholder"
      :if_not_logined="if_not_logined"
      :emoji_list="emoji_list"
      :verify_once="verify_once"
      @submit_click="submit_click"
    />
  </div>

</template>

<script>
  import CommentList from "./CommentList";
  import b_comment from './vue_comment/b_comment.vue'
  import { CommentItem } from "network/commentitem";
  import { getComment } from 'network/commentitem'

  export default {
    name: "FootComment",
    components: {
      'b_comment':b_comment,
      CommentList
    },
    mounted() {
      setTimeout( () => {
        console.log(this.id)
        getComment(this.id).then( res => {
          this.commentlist = res
        })
      },300)
    },
    data() {
      return {
        placeholder: "想说点什么？",//默认文字提示。
        if_not_logined: true,//用户是否没有登录。
        //颜文字列表。
        emoji_list: ['(⌒▽⌒)', '（￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', '←_←', '→_→', '(<_<)', '(>_>)', '(;¬_¬)', '("▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', '(｡･ω･｡)', '(´･_･`)', '（￣へ￣）', '(╯°口°)╯(┴—┴', '_(:3」∠)_'],
        verify_once: false,//未登录时，每次评论都需输入验证码。
        commentlist: []
      };
    },
    computed:{
      comment_text(){//获取子组件的评论内容。
        return this.$refs.my_comment.insert_comment.comment_text;
      },
      comment_name(){//获取子组件的评论昵称。
        return this.$refs.my_comment.insert_comment.comment_name;
      }
    },
    props: {
      id: String
    },
    methods:{
      //点击评论按钮后，触发的事件。
      //（在这之前会先检验是否为空、是否输入验证码）
      submit_click(){
        console.log("用户输入的评论内容是：" + this.comment_text);
        if(this.comment_name !== ""){
          console.log("用户输入的昵称是：" + this.comment_name);
        }

        //你可以在这里验证用户输入的格式。
        //若格式错误可调用此函数：
        //this.$refs.my_comment.err_submitFn("格式错误",1500)

        //你可以在这儿请求AJAX
        // this.newData._id = this.id
        // this.newData.nickname = this.comment_name
        // this.newData.content = this.comment_text
        CommentItem({'_id': this.id,nickname:this.comment_name,content:this.comment_text}).then(res => {
          this.commentlist = res
          console.log(this.commentlist);
        })
        //失败回调：
        // this.$refs.my_comment.err_submitFn("评论失败",1500)
        //成功回调
        this.$refs.my_comment.success_submit("评论成功",1500)
      }
    },
  };
</script>

<style scoped>
  .FootComment{width: 100%;}
</style>