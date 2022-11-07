<!--
 * @Date: 2022-08-04 15:32:20
 * @LastEditors: kinfai
 * @Description: 个人中心菜单
 * @LastEditTime: 2022-08-12 16:27:27
 * @FilePath: \neekde-merchants\src\layout\component\personalMenu.vue
-->
<template>
  <div class="g-link-group">
    <div class="g-link">
      <router-link to="/home" style="color: #595959">
        <left-outlined></left-outlined>
        个人中心</router-link
      >
    </div>
    <div class="g-link" v-for="(item, index) of list" :key="index">
      <router-link :to="{ name: item.name }">{{ item.meta.title }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { LeftOutlined } from "@ant-design/icons-vue";

// 路由配置文件
const modules = import.meta.globEager("../../router/*/index.js");

const findByDir = (dir) => {
  const path = Object.keys(modules).find((path) =>
    String(path).includes(`/${dir}/`)
  );

  return modules[path].default
    ? modules[path].default.filter((item) => !item.meta.hideMenu)
    : [];
};

const list = findByDir("personalCenter");
</script>

<style lang="scss" scoped>
.g-link-group {
  padding: 2px 14px;
}
.g-link {
  border-bottom: 1px solid #efefef;
  padding: 15px;
}
a {
  color: black;
}

:deep(.router-link-exact-active) {
  color: #f95b3d;
}
</style>
