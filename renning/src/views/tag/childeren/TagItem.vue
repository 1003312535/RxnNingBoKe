<template>
  <div class="TagItem">
      <div class="left">
        <a href="javascript:;">
          {{tagdata}}
        </a>
    </div>
      <span>
        0
      </span>

  </div>
</template>

<script>
  export default {
    name: "TagItem",
    props: {
      tagdata: String
    }
  }
</script>

<style scoped>
  .TagItem{border: 1px solid black;border-radius: 5px;background: white;padding: 5px 10px;margin-right:10px;
  margin-bottom:10px;display: flex;
  }
  .TagItem:hover{box-shadow: 1px 1px 6px black;background: red}
  a{text-decoration: none;color: black}
  .left{padding-right: 4px;}
  span{margin-left: 15px;}
</style>