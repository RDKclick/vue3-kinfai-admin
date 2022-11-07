/*
 * @Date: 2022-03-08 15:53:31
 * @LastEditors: kinfai
 * @Description: 自动注册全局组件
 * @LastEditTime: 2022-06-14 16:57:11
 * @FilePath: \neekde-merchants\src\components\index.js
 */
import systemConfig from "../config/settings.js";

export default {
  install(app) {
    const modules = import.meta.globEager("./*/index.vue");

    for (const componentName in modules) {
      const componentFile = modules[componentName].default;
      const name = systemConfig.prefix + componentName.split("/")[1];
      app.component(name, componentFile);
    }
  },
};
