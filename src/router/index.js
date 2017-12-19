// index.js仅仅是在这里叫index.js,实际的作用是引入路由，所有的路由都是在这里引入，然后根据不同的路由加载不同的组件，再导出去

// 引入路由组件-------对外导出路由配置对象

// 引入路由组件
import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/admin.vue';



// 导入商品路由配置文件
import goodsRouterConfig from './goods.js';
let adminChildren = [...goodsRouterConfig];


export default {
    routes: [
        // 首页--后台管理页面
        {
            name: "h",
            path: "/",
            component: AdminComponent,
            children: [

            ]
        },
        { name: "a", path: "/", component: AdminComponent, children: adminChildren },
        { name: "l", path: "/login", component: LoginComponent },
    ],
};