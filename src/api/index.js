/*
 * @Date: 2022-03-07 16:26:00
 * @LastEditors: kinfai
 * @Description: 聚集所有 xxx.api.js 接口
 * @LastEditTime: 2022-06-06 15:25:25
 * @FilePath: \neekde-merchants\src\api\index.js
 */
export default {
  install(app) {
    const modules = import.meta.globEager("./*.api.js");
    const useApiList = {};

    function loadModule(mod) {
      const apiGroup = mod.default;
      for (const key in apiGroup) {
        useApiList[key] = apiGroup[key];
      }
    }

    // 优先加载, 以自动生成文件为辅,编写文件为主(避免命名冲突,导致自动生成接口名覆盖手写接口名)
    if (modules["./autoWrite.api.js"]) {
      loadModule(modules["./autoWrite.api.js"]);
      delete modules["./autoWrite.api.js"];
    }

    for (const path in modules) {
      loadModule(modules[path]);
    }

    app.provide("$api", useApiList);
  },
};
