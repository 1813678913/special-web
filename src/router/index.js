import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../Layout";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "home",
        hidden: true,
        meta: {
            name: "主页"
        }
    },

    {
        path: "/login",
        name: "Login",
        hidden: true,
        meta: {
            name: "登录"
        },
        component: () => import("../views/login/index.vue")
    },
    {
        path: "/layout",
        name: "Layout",
        redirect: "home",
        meta: {
            name: "控制台",
            icon: "home"
        },
        component: Layout,
        children: [
            {
                path: "/home",
                name: "Home",
                meta: {
                    name: "首页"
                },
                component: () => import("../views/home/index.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;
