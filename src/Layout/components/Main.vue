<template>
  <div id="main_wrap">
    <div id="main_content">
      <el-scrollbar style="height:100%;width:100%">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
  
</template>
<script>
  export default {}      
</script>
<style lang="scss" scoped>
#main_wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: #f7f5f5;
  @include webkit(transition, all 0.3s ease 0s);

  #main_content {
    width: 100%;
    height: 100%;
    background: white;
  }
}

.open {
  #main_wrap {
    left: $menuOpenWidth;
  }
}

.close {
  #main_wrap {
    left: $menuCloseWidth;
  }
}

// el-scrollbar 下拉样式
/deep/.el-scrollbar__wrap {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>