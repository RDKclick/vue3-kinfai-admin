/*
 * @Date: 2022-10-26 09:22:41
 * @LastEditors: kinfai
 * @Description: 应用生命周期
 * @LastEditTime: 2022-10-26 09:51:36
 * @FilePath: \wml-vue3-antd\src\config\appLifeCycle\index.js
 */
import useSocket from "@/utils/socket/hook.js";
import useTurms from "@/utils/turms/hook.js";
import { useMainStore } from "@/store/index.js";

export default {
    // 每次切换页面 - 已登录状态执行
    routeLogged: async () => {
        console.log("路由鉴权 - 已登录 - appLifeCycle");
        const store = useMainStore()
        await store.getUnique()
    },
    // 首次打开主布局
    mainLayoutCreated: async () => {
        console.log("主布局初始化 - appLifeCycle");
        // useSocket(true);
        // useTurms(true);
    }
}