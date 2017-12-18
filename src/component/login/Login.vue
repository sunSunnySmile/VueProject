<template>
        <!-- 屏幕中间的大盒子 -->
       <div class="login">
           <div class="login_content">
               <!-- logo -->
               <section class="login_content_logo">
                   <img src="../../img/logo.png" alt="">
               </section>

               <!-- 表单 -->
                <section class="login_content_form">
                    <!-- form: 如果你的表单要进行效验, 重置, 那么必须设置model属性, 关联整个表单的数据 -->
                        <el-form :model="user" :rules="formRules" status-icon ref="ruleForm2" label-width="70px" class="demo-ruleForm" label-position="left">
                            <!-- 用户名 -->
                            <el-form-item label="用户名" prop="uname">
                                <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="upwd">
                                <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                            </el-form-item>                          
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                                <el-button @click="resetForm('ruleForm2')">重置</el-button>
                            </el-form-item>
                        </el-form>
                </section>            
           </div>
       </div>

</template>

<script>
export default {
    data(){
       return {
           user:{
            uname:'',
            upwd:''
        },
        // 配置校验规则
        formRules:{
            uname:[
                {required:true,message:'请输入用户名',trigger:'blur'},
                {pattern:/\w{5,18}/,message:'长度在4到18个字符，且只能为&_或字母与数字',trigger:'blur'}
            ],
            upwd:[
                {required:true,message:'请输入密码',trigger:'blur'},
                {pattern:/.{6,18}/,message:'长度在6到18个字符',trigger:'blur'}
                ]
            }
       }
    },
    methods:{
     // 点击提交按钮, 调用登陆接口----实现登录操作，进行跳转
    //  跳转之前先校验密码和用户名----不正确的话给出对应的提示，正确就提交
            submitForm(formName){
                // this.$http.post(this.$api.login,this.user)
                // .then(rsp=>(alert.rsp.data.message.realname));
                // 先校验表单再提交
                this.$refs[formName].validate((result)=>{
                    if(result){
                        this.$http.post(this.$api.login,this.user)
                        .then(rsp=>{
                             // 登陆成功后, 通过params把用户名传递给新页面
                             this.$router.push({name:"a",params:{uname:rsp.data.message.uname}});

                            
                        });   
                    }else{
                        alert('你4不4傻啊');
                    }
                })

            },
            resetForm(formName){
                // 这里拿到form组件对象, 调用其重置方法重置表单
                this.$refs[formName].resetFields();
            }
    }
};
</script>

<style scoped lang="less">
  .login {
        height: 100%;
        background-color: rgb(38, 124, 183);
        &_content {
            width: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -200px;
            margin-top: -230px;
            &_logo {
                text-align: center;
            }
            &_form {
                padding:2px 10px;
                border: 1px solid hsla(0,0%,100%,.2);
                border-radius: 10px;
                text-align: left;
            }
        }
    }
</style>