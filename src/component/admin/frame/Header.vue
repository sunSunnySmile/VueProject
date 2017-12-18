<template>
    <div>
       <el-dropdown @command="handleCommand">
           <span class="el-dropdown-link">
               你好，{{username}}
                <i class="el-icon-caret-bottom el-icon--right"></i>
                功能
           </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>预览网站</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">注销登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // 通过路由参数拿到用户名
                username:this.$route.params.uname
            }
        },
        methods:{
            // logout时,调用接口注销登陆, 成功后跳转到登陆页
                logout(){
                   this.$http.get(this.$api.logout)
                   .then(rsp=>this.$router.push('login'))
                },
            // 点击菜单时的处理函数
            handleCommand(command){
                switch(command){
                    case 'logout':
                    this.logout();
                    break;
                }
            }
        }
    }
</script>

<style scoped>

</style>