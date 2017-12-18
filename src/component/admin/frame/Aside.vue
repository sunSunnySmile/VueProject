<template>
    <div class="aside">
            <img src="../../../img/logo.png" alt="">        
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose"  background-color="#267cb7"
      text-color="#fff"  active-text-color="#ffd04b">

      <!-- 导航列表: key属性用于for循环渲染时性能优化, index属性必须设为不一样的值, 这样才能一个一个展开 -->

        <el-submenu v-for="item in menuList" :key="item.title" :index="item.title" >
            <!-- 导航title -->
            <template slot="title">
                <i class="el-icon-menu"></i>
            <span>{{item.title}}</span>
            <!-- 导航item -->
            </template>
            <el-menu-item v-for="subItem in item.children" :key="subItem.title" index="item.children.title">
                <router-link :to="subItem.path">{{subItem.title}}</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
    methods:{
        handleOpen:{},
        handleClose:{}
    },
    data(){
        return {
            menuList:[
                {title:"学员问题汇总",children:[
                    {title:'内容管理',path:'/'},
                    {title:'类别管理',path:'/'},
                    {title:'评论管理',path:'/'}
                ]},
                {title:"前端常用功能",children:[
                     {title:'内容管理',path:'/'},
                    {title:'类别管理',path:'/'},
                    {title:'评论管理',path:'/'}
                ]},
                {title:"重难点专区",children:[
                     {title:'内容管理',path:'/'},
                    {title:'类别管理',path:'/'},
                    {title:'评论管理',path:'/'}
                ]},
                {title:"资源下载",children:[
                    {title:'内容管理',path:'/'},
                    {title:'类别管理',path:'/'},
                    {title:'评论管理',path:'/'}
                ]},
                {title:"购物商城",children:[
                     {title:'内容管理',path:'/'},
                    {title:'类别管理',path:'/'},
                    {title:'评论管理',path:'/'}
                ]},
                {title:"订单管理",children:[
                    {title:'订单列表',path:'/'}
                ]},
            ]
        }
    }

};
</script>

<style scoped lang="less">
    .aside{
        height: 100%;
        overflow: hidden;
    }
    .el-menu{
        text-align: left;
        height: 100%;
        border-right: none;
    }
    &_item{
          // 去掉导航列表的最小宽度限制
        min-width: 0;
    }
</style>