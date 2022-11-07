/*
 * @Date: 2022-03-07 14:07:32
 * @LastEditors: kinfai
 * @Description: JS-主程序
 * @LastEditTime: 2022-09-13 17:30:48
 * @FilePath: \neekde-merchants\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index.js";
import pinia from "@/store/pinia";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

import httpTool from "@/api/index.js";
import utils from "@/utils/tool";
import globalComponents from "@/components/index.js";

import VueCropper from "vue-cropper";
import "vue-cropper/dist/index.css";

import socket from "./utils/socket/plugin.js";
import turms from './utils/turms/index.js'

// vxe-table
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
function useVxeTable(app) {
  app.use(VXETable);

  // 给 vue 实例挂载内部对象，例如：
  // app.config.globalProperties.$XModal = VXETable.modal
  // app.config.globalProperties.$XPrint = VXETable.print
  // app.config.globalProperties.$XSaveFile = VXETable.saveFile
  // app.config.globalProperties.$XReadFile = VXETable.readFile
}

createApp(App)
  .use(httpTool)
  .use(utils)
  .use(router)
  .use(Antd)
  .use(VueCropper)
  .use(useVxeTable)
  .use(globalComponents)
  .use(pinia)
  .use(socket)
  .use(turms)
  .mount("#app");
