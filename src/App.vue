<!--
 * @Author: kinfai
 * @Date: 2022-03-07 14:07:32
 * @LastEditTime: 2022-05-31 15:16:00
 * @LastEditors: kinfai
 * @Description: 主界面
 * @FilePath: \neekde-merchants\src\App.vue
-->
<template>
  <a-config-provider :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup>
import "nprogress/nprogress.css";
import zhCN from "ant-design-vue/es/locale/zh_CN";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  padding: 0;
}

body {
  padding: 0;
}
.app-container {
  padding: 20px;
  background-color: #ecedf0;
}
.centerContainer {
  width: 1024px;
  margin: auto;
}
.modal-container {
  &-footer {
    float: right;
    .ant-btn {
      margin-left: 10px;
      border-radius: 4px;
      width: 80px;
      height: 30px;
    }
  }
}

.tooltipColor {
  .ant-tooltip-inner {
    // 这里是框框
    color: #333;
    background-color: #fff !important;
  }

  .ant-tooltip-arrow-content {
    background-color: #fff !important;
  }
}
</style>
