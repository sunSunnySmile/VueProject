// 将与商品相关的路由单独分离出来

// 1.引入商品相关组件
// 引入商品相关组件
// 1.1----内容组件
import goodsContentAddComponent from '../component/admin/goods/content/goodsContentAdd.vue';
import goodsContentEditComponent from '../component/admin/goods/content/goodsContentEdit.vue';
import goodsContentListComponent from '../component/admin/goods/content/goodsContentList.vue';
// 1.2----分类组件
import goodsCategoryAddComponent from '../component/admin/goods/category/goodsCategoryAdd.vue';
import goodsCategoryEditComponent from '../component/admin/goods/category/goodsCategoryEdit.vue';
import goodsCategoryListComponent from '../component/admin/goods/category/goodsCategoryList.vue';
// 1.3----评论组件
import goodsCommentAddComponent from '../component/admin/goods/comment/goodsCommentAdd.vue';
import goodsCommentEditComponent from '../component/admin/goods/comment/goodsCommentEdit.vue';
import goodsCommentListComponent from '../component/admin/goods/comment/goodsCommentList.vue';



// 2.暴露配置好的商品组件
export default [
    { name: "gcta", path: "goods/content/add", component: goodsContentAddComponent },
    { name: "gcte", path: "goods/content/edit", component: goodsContentEditComponent },
    { name: "gctl", path: "goods/content/list", component: goodsContentListComponent },


    { name: "gcga", path: "goods/category/add", component: goodsCategoryAddComponent },
    { name: "gcge", path: "goods/category/edit", component: goodsCategoryEditComponent },
    { name: "gcgl", path: "goods/category/list", component: goodsCategoryListComponent },


    { name: "gcma", path: "goods/comment/add", component: goodsCommentAddComponent },
    { name: "gcme", path: "goods/comment/edit", component: goodsCommentEditComponent },
    { name: "gcml", path: "goods/comment/list", component: goodsCommentListComponent }
]