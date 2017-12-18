<template>
    <div class="aside">
            <img src="../../../img/logo.png" alt="">        
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose"  background-color="#267cb7"
      text-color="#fff"  active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
            <template slot="title">
                <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menuList:[]
        }
    }

};
</script>

<style scoped>

</style>