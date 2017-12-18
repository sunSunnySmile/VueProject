// 导入Vue库
import Vue from 'vue';
import VueRouter from 'vue-router';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import './less/index.less';

// 3.1 导入配置后的axios与api, 并注入到Vue原型中 将来在实例通过this.$http调用

Vue.use(VueRouter);
Vue.use(elementUI);


// 导入根组件
import App from './component/App.vue';
import RouterConfig from './router';

// 3. 导入配置后的axios与api, 注入到Vue的原型当中, 这样所有的组件就可以通过this调用了
import axios from './js/axios_config.js'
import api from './js/api_config.js';

Vue.prototype.$http = axios;
Vue.prototype.$api = api;





// 渲染根组件到占位标签上
new Vue({
    el: '#app',

    render(createElement) {
        return createElement(App);
    },
    router: new VueRouter(RouterConfig),
});