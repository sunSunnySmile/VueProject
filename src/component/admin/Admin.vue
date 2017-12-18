<template>
        <el-container>
            <!-- 左侧公共导航 -->
            <el-aside width="200px">
                <app-aside></app-aside>
            </el-aside>
                <el-container>
                <!-- 右侧头部公共样式 -->
                <el-header>
                    <app-header></app-header>
                </el-header>
                <!-- 这一块是动态变化的, 将来通过子路由控制 -->
                <el-main>Main</el-main>
            </el-container>
        </el-container>
</template>

<script>
  // 导入公共的组件，注册为专用组件
    import AsideComponent from './frame/Aside.vue';
    import HeaderComponent from './frame/Header.vue';

export default {
    //  注册子组件, key为组件使用时的标签名, value为对应组件
    components:{
        appAside:AsideComponent,
        appHeader:HeaderComponent
    }
};
</script>

<style scoped lang="less">
.el-container {
    height: 100%;
  }
     // 右侧头部
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
    //   左侧高度100%
  .el-aside {
    background-color: #267cb7;
    color: #fff;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>