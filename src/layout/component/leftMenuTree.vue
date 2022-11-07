<template>
  <div
    class="g-left-menu"
    :class="{ active: menuVisible || isHovered }"
    ref="leftMenu"
  >
    <template v-for="(row, index) of routerConfig" :key="index">
      <div v-if="row.dirList.length === 1">
        <div
          class="g-menu-item"
          :class="{
            active: isActiveHandle(row),
          }"
          @click="goFirstPage(row.dirList)"
        >
          <div class="g-left-title">
            <wml-ali-icon :type="row.icon" class="s-left-icon"></wml-ali-icon>
            <span class="s-sub-title" @click="menuEvent(false)">
              {{ row.title }}
            </span>
          </div>
        </div>
      </div>
      <a-dropdown
        v-else
        @visibleChange="menuEvent"
        placement="bottomRight"
        :key="index"
        :overlayStyle="{
          minWidth: '120px',
        }"
        :trigger="['click']"
      >
        <div
          class="g-menu-item"
          :class="{
            active: isActiveHandle(row),
          }"
          @click="goFirstPage(row.dirList)"
        >
          <div class="g-left-title">
            <wml-ali-icon :type="row.icon" class="s-left-icon"></wml-ali-icon>
            <span class="s-sub-title"> {{ row.title }}</span>
          </div>
          <down-outlined class="s-right-icon" />
        </div>

        <template #overlay>
          <a-menu ref="aMenu">
            <a-menu-item v-for="(menuItem, index) of row.dirList" :key="index">
              <a
                v-if="menuItem.meta.link"
                :href="userInfo[menuItem.meta.href]"
                target="_blank"
                @click="menuEvent(false)"
                >{{ menuItem.meta.title }}</a
              >
              <router-link
                v-else
                :to="{
                  name: menuItem.name,
                }"
                @click="menuEvent(false)"
                >{{ menuItem.meta.title }}</router-link
              >
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useElementHover } from "@vueuse/core";
import useLeftMenu from "@/hooks/layout/leftMenu.js";
import { DownOutlined } from "@ant-design/icons-vue"; // 路由配置文件

const { routerConfig, route, userInfo, goFirstPage } = useLeftMenu();

const isActiveHandle = (row) => {
  if (row.name === route.name) {
    return true;
  }

  const { dirList } = row;
  const active = dirList.find((item) => item.name === route.name);
  return active ? true : false;
};

// 点击
const menuVisible = ref(false);
const menuEvent = (visible) => {
  menuVisible.value = visible;
};

// 是否悬浮
const leftMenu = ref();
const isHovered = useElementHover(leftMenu);
</script>

<style lang="scss" scoped>
.g-left-menu {
  padding: 18px 13px;
  position: absolute;
  overflow: hidden;
  z-index: 1000;
  background: white;
  height: 100%;

  .s-sub-title {
    display: none;
    color: black;
  }
  .s-right-icon {
    opacity: 0;
    position: absolute;
  }

  .s-left-icon {
    font-size: 22px;
  }

  &.hover,
  &.active {
    width: 200px;
    box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    animation-duration: 0.6s;
    animation-name: slidein;
    transition: 1s ease;

    .s-left-icon {
      margin-right: 12px;
    }

    .g-menu-item {
      justify-content: space-between;
    }

    .s-right-icon {
      animation: showText 1.5s;
      animation-fill-mode: forwards;
      visibility: visible;
      right: 25px;
    }
    .s-sub-title {
      display: block;
      position: absolute;
      left: 60px;
    }
  }
}

.g-menu-item {
  display: flex;
  align-items: center;
  // justify-content: center;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 0 9px;

  &.active {
    background: #f95b3d;
    color: white;
    border-radius: 4px;
    .s-sub-title {
      color: white;
    }
  }
}

.g-left-title {
  display: flex;
  align-items: center;
}

@keyframes slidein {
  from {
    width: 120px;
  }

  to {
    width: 200px;
  }
}
@keyframes hiddenSlidein {
  from {
    width: 200px;
    justify-content: flex-start;
  }

  to {
    width: 120px;
  }
}

@keyframes showText {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
