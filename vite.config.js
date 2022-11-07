/*
 * @Date: 2022-03-07 14:07:32
 * @LastEditors: kinfai
 * @Description: vite配置
 * @LastEditTime: 2022-07-05 09:09:11
 * @FilePath: \neekde-merchants\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      store: path.resolve(__dirname, "./src/store"),
      bsConfig: path.resolve(__dirname, "./src/config/businessConfig"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          "primary-color": "#F95B3D",
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: "7265",
    strictPort: true,
    open: false,
    https: false,
    proxy: {
      "/baiduApi": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baiduApi/, ""),
      },
      "/devApi": {
        target: "http://dev.manager.needke.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/devApi/, ""),
      },
      "/myServerApi": {
        target: "http://localhost:8001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/myServerApi/, ""),
      },
    },
    build: {
      terserOptions: {
        compress: {
          // eslint-disable-next-line camelcase
          drop_console: true,
          // eslint-disable-next-line camelcase
          drop_debugger: true,
        },
      },
    },
  },
});
