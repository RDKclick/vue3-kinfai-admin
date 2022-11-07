/*
 * @Date: 2022-07-14 10:05:35
 * @LastEditors: kinfai
 * @Description: 首页路由
 * @LastEditTime: 2022-10-26 10:46:35
 * @FilePath: \wml-vue3-antd\src\router\home\index.js
 */
/*
  auth: 是否需要登录
  hideTitle: 是否主布局中自带的标题
  padding: 是否需要自带的边距
  hideMenu：不出现在菜单栏
*/

export default [
  {
    path: "home",
    name: "home",
    component: () => import("@/view/home/homeIndex.vue"),
    meta: {
      title: "首页",
      icon: "icon-shouye",
      keepAlive: false,
      auth: true,
      hideTitle: true,
      padding: false
    },
  },
];
