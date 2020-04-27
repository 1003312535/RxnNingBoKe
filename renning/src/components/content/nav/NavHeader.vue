<template>
  <transition name="fade1">
    <div class="NavHeader"  v-show="isshow">
      <div class="centent">
        <logo></logo>
        <Nav></Nav>
        <Logon></Logon>
        <Reserch></Reserch>

      </div>
    </div>
  </transition>

</template>

<script>
  import Logo from './childeren/logo'
  import Nav from "./childeren/Nav"
  import Logon from "./childeren/Logon";
  import Reserch from "./childeren/Reserch";
  export default {
    name: "NavHeader",
    components: {
      Logo,
      Nav,
      Reserch,
      Logon
    },
    data(){
      return {

      }
    },
    props: {
      isshow: {
        type: Boolean,
        default: true
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .NavHeader{width: 100%;background: black;overflow: hidden; height: 60px;}
  .centent{width: 1300px;height: 60px; margin: 0 auto;background: rgba(20,20,20);line-height: 60px;}
  .fade1-enter-active, .fade1-leave-active {
    transition: all 1s;
  }
  .fade1-enter, .fade1-leave-to  .fade-leave-active below version 2.1.8 {
    height: 0;
  }
</style>