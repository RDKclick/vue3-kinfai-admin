/*
 * @Date: 2022-03-07 16:03:58
 * @LastEditors: kinfai
 * @Description: axios 配置
 * @LastEditTime: 2022-10-26 09:42:18
 * @FilePath: \wml-vue3-antd\src\utils\http\index.js
 */
import axios from "axios";
import NProgress from "nprogress";
import Cookies from "js-cookie";
import router from "@/router/index.js";
import { message } from "ant-design-vue";
import settings from "@/config/settings.js";

// 把data 转换为 formData
function dataToFromData(data) {
  const formDataObj = new FormData();
  for (const item in data) {
    formDataObj.append(item, data[item]);
  }
  return formDataObj;
}

// 设置请求头和请求路径
const service = axios.create({
  // baseURL: "/devApi",
  baseURL: import.meta.env.VITE_API_URL,
  timeout: settings.apiTimeout,
});

// 撤回请求

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    NProgress.start();

    // token 处理
    const tokenValue = localStorage.getItem("token");

    if (tokenValue !== null) {
      config.headers.Authorization = `Bearer ${tokenValue}`;
    }

    // // 请求方式处理
    if (config.method === undefined) {
      config.method = "get";
    }
    if (config.data === undefined) {
      config.data = {};
    }
    if (config.method === "get" || config.method === "delete") {
      config.params = config.data || {};
    }
    if (["PUT", "POST", "PATCH"].indexOf(config.method.toUpperCase()) !== -1) {
      config.data = config.data || {};
    }
    if (config.file === true) {
      config.headers["Content-Type"] = "multipart/form-data";
      config.data = dataToFromData(config.data);
    }

    return config;
  },
  (error) => {
    return error;
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    let code = res.data.code;

    if (import.meta.env.DEV) {
      console.log(
        `%c${res.config.url}`,
        "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
        res.data
      );
    }

    if (code === 401) {
      Cookies.remove("isLogin");
      router.push({ path: "/login" });
      message.error({
        content: "请重新登陆~",
        key: "errorMsg",
      });
    } else if (code === 417) {
      message.error({
        content: "无权限访问~",
        key: "errorMsg",
      });
    } else if (code === 500) {
      message.error({
        content: "网络错误,请联系管理员~",
        key: "errorMsg",
      });
    }
    // 基于 返回状态码处理
    NProgress.done();
    return res.data;
  },
  (error) => {
    if (import.meta.env.DEV) {
      console.log(
        "%cMyProject%cline:76%cvar",
        "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
        "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
        "color:#fff;background:rgb(17, 63, 61);padding:3px;border-radius:2px",
        error.config.url,
      );

      message.error("服务错误,请联系管理员~")
    }
    // 基于 错误状态码
    NProgress.done();

    return Promise.reject(error.response);
  }
);

export default service;
