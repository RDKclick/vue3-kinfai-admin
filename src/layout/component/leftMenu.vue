<!--
 * @Date: 2022-05-31 16:28:55
 * @LastEditors: kinfai
 * @Description: 左侧栏
 * @LastEditTime: 2022-08-11 15:18:14
 * @FilePath: \neekde-merchants\src\layout\component\leftMenu.vue
-->
<template>
  <personal-menu v-if="$route.meta.personalCenter"></personal-menu>
  <div class="g-left-menu" v-else>
    <div class="g-row" v-for="route of routerConfig">
      <div class="s-row-title"
           v-if="route.dirList.length === 1"
           :style="{
          fontSize: route.dirList.length === 1 ? '15px' : '16px',
          marginBottom: '0px'
      }">
        <router-link class="g-row-item" :to="`/${ route.dirList[0].path}`">
          <wml-ali-icon
              :type="route.icon"
              :iconStyle="{
            fontSize: route.dirList.length === 1 ? '20px' : '18px',
            marginRight: '5px',
            marginBottom: '0px'
          }"
          ></wml-ali-icon>
          {{ route.title }}
        </router-link>
      </div>
      <div v-else>
        <wml-ali-icon
            :type="route.icon"
            :iconStyle="{
            marginRight: '5px',
            marginBottom: '15px'
          }"
        ></wml-ali-icon>
        {{ route.title }}
      </div>
      <template v-for="dir of route.dirList" v-if="route.dirList.length > 1">
        <a
          class="g-row-item"
          :href="userInfo[dir.meta.href]"
          v-if="dir.meta.link"
          target="_blank"
          >{{ dir.meta.title }}</a
        >
        <router-link v-else class="g-row-item" :to="`/${dir.path}`">
          {{ dir.meta.title }}
        </router-link></template
      >
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useLeftMenu from "@/hooks/layout/leftMenu.js";
import { useMainStore } from "@/store/index.js";

import personalMenu from "./personalMenu.vue";

import { useRoute } from "vue-router";
const route = useRoute();

const store = useMainStore();
const { userInfo } = storeToRefs(store);

// 路由配置文件
const { routerConfig } = useLeftMenu();
</script>

<style lang="scss" scoped>
.g-left-menu {
  padding: 9px 12px;
}

.s-top-title {
  font-size: 14px;
  text-align: left;
  font-family: Roboto;
  line-height: 45px;
  margin-bottom: 12px;
  color: rgba(89, 89, 89, 100);
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid rgba(236, 236, 236, 100);
}

.g-row {
  border-bottom: 1px solid rgba(236, 236, 236, 100);
  padding-bottom: 9px;
  margin-bottom: 12px;

  .g-row-item {
    margin-right: 24px;
    margin-bottom: 10px;
    color: rgba(89, 89, 89, 100);
    font-size: 14px;
    font-family: SourceHanSansSC-regular;
    display: inline-block;
  }

  .s-row-title {
    margin-bottom: 9px;
  }
}

:deep(.router-link-active) {
  color: rgba(249, 91, 61, 100) !important;
}
</style>
