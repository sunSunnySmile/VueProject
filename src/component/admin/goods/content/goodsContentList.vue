<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>内容列表</el-breadcrumb-item>
            <el-breadcrumb-item>评论详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 工具条 -->
        <section class="list_util">
            <!-- 左边按钮 -->
            <div class="list_util_btns">
                <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
                <el-button size="small" type="primary" icon="el-icon-check">全选</el-button>
                <el-button size="small" type="primary" icon="el-icon-delete">删除</el-button>
            </div>

            <!-- 右边搜索框 -->
            <div class="list_util_search">
                <el-input size="small" placeholder="请输入搜索内容" prefix-icon="el-icon-search">
                </el-input>
            </div>            
        </section>
            <!-- 表格  表格: data属性为列表数据, 传入后会根据这个数据自动渲染  -->
        <el-table ref="multipleTable" :data="dataList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <!-- 多选框列 -->
            <el-table-column type="selection">
            </el-table-column>
            <!-- 普通列: label用于设置表头, prop用于指定该列展示的字段名称 -->
            <el-table-column label="标题">
                <template slot-scope="scope">1111</template>
            </el-table-column>
             <!-- 普通列: label用于设置表头, 里面的template可以用于设定任意html结构 -->
            <el-table-column prop="" label="所属类别">
                <!-- 在temoplate里面, 需要通过scope.row拿到每一行数据 -->
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="40">
            </el-pagination>
        </div>

    



    </div>
</template>

<script>
    export default {
        data(){
            return {
                dataList:[
                    { date: 2017, name: '大花' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '小花' },
                ]
            }
        },
        methods:{
        handleSelectionChange(){},            

        }

    }
</script>

<style scoped lang="less">
    .list{
        .el-breadcrumb{
            padding: 15px;
            border-bottom: 1px solid #cccccc;
            margin-bottom: 15px;
        }
        &_util{
            // 防止父盒子坍塌
            overflow: hidden;
            padding: 15px;
            border: 1px solid #cccccc;
            border-radius: 10px;
            &_btns{
                float: left;
            }
            &_search{
                float: right;
            }
        }
    }
</style>