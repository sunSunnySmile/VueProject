<template>
    <div>
       <el-dropdown @command="handleCommand">
           <span class="el-dropdown-link">
               <!-- 你好，{{username}} -->
               你好，{{user.uname}}
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
                // 方法一：通过路由参数拿到用户名
                // username:this.$route.params.uname
                // 方法二：通过localstorage拿到参数，如果没有设置一个空对象
                user:JSON.parse(localStorage.getItem('user'))||{}

            }
        },
        methods:{
                logout(){
                    //方法一： logout时,调用接口注销登陆, 成功后跳转到登陆页
                        // this.$http.get(this.$api.logout)
                        // .then(rsp=>this.$router.push('login'))
                    //  方法二：调用接口注销登录，成功后清除localstorage存储的登录信息，然后再跳转到登录页
                            this.$http.get(this.$api.logout)
                            .then((rsp)=>{
                                 localStorage.removeItem('user');
                                 this.$router.push('login');
                            })
                           
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