// index.js仅仅是在这里叫index.js,实际的作用是引入路由，所有的路由都是在这里引入，然后根据不同的路由加载不同的组件，再导出去

// 引入路由组件-------对外导出路由配置对象

// 引入路由组件
import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/admin.vue';

// 引入商品难关组件
import goodsContentAddComponent from '../component/admin/goods/content/goodsContentAdd.vue';
import goodsContentEditComponent from '../component/admin/goods/content/goodsContentEdit.vue';
import goodsContentListComponent from '../component/admin/goods/content/goodsContentList.vue';

// 配置商品相关组件---是admin的子路由
let adminChildren = [
    { name: "gca", path: "goods/content/add", component: goodsContentAddComponent },
    { name: "gce", path: "goods/content/edit", component: goodsContentEditComponent },
    { name: "gcl", path: "goods/content/list", component: goodsContentListComponent }

];



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