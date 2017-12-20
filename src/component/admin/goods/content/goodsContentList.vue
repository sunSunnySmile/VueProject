<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>内容列表</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
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
                <el-input size="small" placeholder="请输入搜索内容" prefix-icon="el-icon-search" @blur="getTableList">
                </el-input>
            </div>            
        </section>
            <!-- 表格  表格: data属性为列表数据, 传入后会根据这个数据自动渲染  -->
        <el-table ref="multipleTable" :data="dataList" tooltip-effect="dark" style="width: 100%"    
        height="400"  @selection-change="handleSelectionChange" >
            <!-- 多选框列 -->
            <el-table-column type="selection">
            </el-table-column>

            <!-- 普通列: label用于设置表头, prop用于指定该列展示的字段名称 -->
            <el-table-column label="标题">
                <template slot-scope="scope"></template>
            </el-table-column>
            
            <el-table-column prop="categoryname" label="所属类别">                
                <template slot-scope="scope"></template>
            </el-table-column>

             <!-- 库存 -->
            <el-table-column prop="stock_quantity" label="库存">
                <template slot-scope="scope"></template>
            </el-table-column>

             <!-- 市场价 -->
            <el-table-column prop="market_price" label="市场价">
                <template slot-scope="scope"></template>
            </el-table-column>
             <!-- 销售价 -->
            <el-table-column prop="sell_price" label="销售价">
                <template slot-scope="scope"></template>
            </el-table-column>
             <!-- 属性 -->
              <!-- 普通列: label用于设置表头, 里面的template可以用于设定任意html结构 -->
              <!-- 在temoplate里面, 需要通过scope.row拿到每一行数据 -->
            <el-table-column prop="status" label="属性">
                <template slot-scope="scope">
                    <i z="is_top"></i>
                    <i z="is_hot"></i>
                    <i z="is_slide"></i>
                </template>
            </el-table-column>
             <!-- 操作 -->
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link :to="{name:'gcte',params:{id:scope.row.id}}">修改</router-link>
                </template>
                
            </el-table-column>

        </el-table>
        <!-- 分页器 -->
        <!-- 分页: size-change用于监听每页展示条目的变化, current-change用于监听页码的变化 -->
        <!-- 分页: current-page属性用于设置当前处于第几页, page-size属性用于设置每页条目的可选项 -->
        <!-- 分页: layout用于设置要使用那些分页小组件, total用于设置数据总量 -->
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="query.pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="query.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="40">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                query:{
                    pageIndex:1,
                    pageSize:10,
                    searchValue:''
                },
                totalcount:0,
                dataList:[]
               
            }
        },
        methods:{
            //1. 当焦点离开搜索框时, 调用接口获取搜索后的数据列表
            getTableList(){
                 // get方法的第二个参数可以用来指定查询字符串, header头信息等内容---用params将数据传过去
                this.$http.get(this.$api.gsList,{params:this.query})
                .then(rsp=>{
                   this.totalcount=rsp.data.totalcount;
                    this.dataList=rsp.data.message;
                    
                })
            },
            handleSelectionChange(){},
            handleSizeChange(){},
            handleCurrentChange(){}
       
        },
    // 刚进入页面的时候应该请求数据
            created(){
                this.getTableList();
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
        .block{
            padding: 10px;
        }
    }
</style>