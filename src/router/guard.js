// 向外导出一个路由守护函数-----判断是否登录，并做出相应处理

// 1.因为这不是组件，没有组件实例，也就没有实例的方法和api。需要手动导入
import axios from 'axios';
import apiConfig from '../js/api_config.js';

// 2.默认向外导出一个守卫函数，并根据去到的路径不同做出不同的处理
export default function(to, from, next) {
    // 1 调用接口判断用户的登陆状态
    // 2 再通过to对象的name属性得知用户去往的页面
    // 2.1 如果去往登陆页面
    // 2.2 登陆 -> 自动跳转到首页 -> 调next('/')
    // 2.3 未登陆 -> 允许访问 -> 调next()
    // 3.1 如果去往非登陆页面
    // 3.2 登陆 -> 允许访问 -> 调next()
    // 3.3 未登陆 -> 自动跳转到登陆页 -> 调next('/login')
    axios.get(apiConfig.islogin).then(rsp => {
        let isLogin = rsp.data.code == 'logined';
        let toPage = to.name;
        if (toPage == 'l') {
            if (isLogin) {
                next("/");
            } else {
                next();
            }
        };
        if (toPage != 'l') {
            if (isLogin) {
                next();
            } else {
                next("/login");
            }
        }
    });

}