<template>
  <div class="RightContent">
    <personal-data :contentlist="contentlist" :allcount="allcount"></personal-data>
    <right-categray></right-categray>
    <right-edit></right-edit>
    <right-music></right-music>
  </div>
</template>

<script>
  import PersonalData from "./PersonalData";
  import RightCategray from "./RightCategray";
  import RightEdit from "./RightEdit";
  import RightMusic from "./RightMusic";
  export default {
    name: "RightContent",
    components: {
      PersonalData,
      RightCategray,
      RightEdit,
      RightMusic
    },
    props: {
      contentlist : {
        type:Array,
        default(){
          return []
        }
      },
      allcount:Number
    }
  }
</script>

<style scoped>
  .RightContent{width: 25%;height: 100%;float: right}
</style>