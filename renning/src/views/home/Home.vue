<template>
  <div id="Home">
		<div class="content">
<!--      {{contentlist}}-->
			<left-content :contentlist="contentlist" :btn="btn"></left-content>
      <right-content :contentlist="contentlist" :allcount = allcount></right-content>
		</div>
  </div>
</template>

<script>
  import {Content} from 'network/content';
  import { Home } from 'network/home'

  import LeftContent from "./childeren/LeftContent";
  import RightContent from "./childeren/RightContent";
  export default {
    name: "Home",
    data(){
      return {
        contentlist: [],
        allcount: 0,
        page: 1,
        btn:null
      }
    },
    activated() {
      Content(this.page).then((res) =>{
        this.contentlist = res.newData
        this.btn = res.btn
        // console.log(res)
        // console.log(res.newData)
      }),
        Home().then( (res) => {
          // console.log(res[0].allwatch_count);
          this.allcount = res[0].allwatch_count
        })
    },
    components: {
      LeftContent,
      RightContent
    },
    mounted() {
      this.$bus.$on("gobtn", (page) => {
        Content(page).then((res) =>{
          const count = res.newData.length
          console.log(count)
          this.contentlist.splice(0,5, ...res.newData)
          this.btn = res.btn
        })
      })
      this.$bus.$on("backbtn", (page) => {
        Content(page).then((res) =>{
          // console.log(res.newData)
          // console.log(this.contentlist);
          this.contentlist =[]
          this.contentlist.push(...res.newData)
          // this.contentlist.splice(0,0, ...res.newData)
          this.btn = res.btn

        })
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  #Home{width: 100%;overflow: hidden; margin-top: 50px; border-radius: 5px;}
  .content{width:1300px; height: 100%;  margin:auto;}
</style>