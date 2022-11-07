/*
 * @Date: 2022-03-08 20:06:27
 * @LastEditors: kinfai
 * @Description: 路由配置
 * @LastEditTime: 2022-10-26 10:08:48
 * @FilePath: \wml-vue3-antd\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import { useMainStore } from "@/store/index.js";
import Cookies from "js-cookie";
import systemConfig from "@/config/settings";
import appLifeCycle from "@/config/appLifeCycle/index.js";

// 模块化
const modules = import.meta.globEager("./*/index.js");
const modulesRoutes = [];
for (const key in modules) {
    modulesRoutes.push(...modules[key].default);
}

// 配置项
// title:string; 页面标题，通常必选。
// icon?:string; 图标，一般配合菜单使用。
// auth?:boolean; 是否需要登录权限。
// ignoreAuth?:boolean; 是否忽略权限。
// roles?:RoleEnum[]; 可以访问的角色
// keepAlive?:boolean; 是否开启页面缓存
// hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
// order?:number; 菜单排序。
// frameUrl?:string; 嵌套外链。
const router = createRouter({
    history: createWebHashHistory("/vue3-antd-manage/"),
    routes: [
        {
            path: "/demo",
            component: () => import("@/view/demo/index.vue"),
            meta: {
                title: "演示页",
            },
        },
        {
            path: "/",
            component: () => import("@/layout/mainLayout.vue"),
            redirect: "/home",
            meta: {
                title: "主页",
                icon: "icon-shouye",
                auth: true,
            },
            children: [...modulesRoutes],
        },
        {
            path: "/login",
            component: () => import("@/view/login/index.vue"),
            meta: {
                title: "登录",
                keepAlive: false,
                auth: false,
            },
        },
    ],
});

// 离开前
router.beforeEach(async (to, form, next) => {
    if (!NProgress.isStarted()) {
        NProgress.start();
    }

    if (to.matched.length === 0) {
        next("/"); // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
    }

    if (systemConfig.authLogin) {
        const isLogin = Cookies.get("isLogin");
        if (to.meta.auth) {
            if (isLogin) {
                // 若登录,自动加载用户信息
                const store = useMainStore();
                const isLogin = Cookies.get("isLogin");
                if (isLogin && !store.isLogin) {
                    appLifeCycle.routeLogged()
                }

                next();
            } else if (to.fullPath !== "/login") {
                next("/login");
            }
        } else {
            next();
        }
    }

    // next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
