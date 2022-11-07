<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <div class="g-top-left">
        <!--        <img :src="needkeIcon"-->
        <!--             width="120"-->
        <!--             style="margin-left: 15px"-->
        <!--             @click="store.editMenuStatus"-->
        <!--             class="u-menu-switch"-->
        <!--        />-->
        <a-tooltip placement="rightBottom" :mouseEnterDelay="0.5">
          <template #title>
            <div style="font-size: 12px">点击我试试，
              <br>
              可以切换左侧菜单状态哦！
            </div>
          </template>
          <img :src="needkeIcon"
               width="120"
               style="margin-left: 15px"
               @click="store.editMenuStatus"
               class="u-menu-switch"
          />
        </a-tooltip>
        <router-link v-for="(module, index) of moduleConfig"
                     :style="{ marginLeft: index === 0 ? '20px' : '20px', padding: '0 0' }" :key="module.id"
                     :to="{ name: module.name }">
          <div class="u-link" :class="{
            active: activeModuleId === module.id
          }" :style="{ color: 'black' }">{{ module.title }}
          </div>
        </router-link>
      </div>
      <div class="g-top-right">
        <a-dropdown :trigger="['click']">
          <a-avatar shape="square" :size="40" @click.prevent class="s-user-logo" :src="store.userInfo.avatar">
            <template #icon>
              <UserOutlined/>
            </template>
          </a-avatar>
          <template #overlay>
            <a-menu>
              <!-- <a-menu-item key="0">
                <router-link :to="{
                  name: 'ppBasicInformation',
                }">个人中心
                </router-link>
              </a-menu-item> -->
              <a-menu-item key="1">
                <span @click="handleExit">退出登录</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
          style="background: #fff"
          :width="leftMenuWidth"
      >
        <left-menu v-if="store.leftMenuStatus === 'menu'"></left-menu>
        <div v-else>
          <personal-menu v-if="$route.meta.personalCenter"></personal-menu>
          <left-menu-tree v-else></left-menu-tree>
        </div>
      </a-layout-sider>
      <a-layout :style="{
        padding: $route.meta.padding !== false ? '15px 19px 0 20px' : '0px 0px 0 13px'
      }">
        <a-layout-content :style="{
          background: '#f2f2f2',
          margin: 20,
          minHeight: '280px',
        }">
          <suspense>
            <div style="height: 100%; display: flex; flex-direction: column">
              <p v-if="title" style="margin-bottom: 10px">{{ title }}</p>
              <router-view class="g-view"></router-view>
            </div>
            <template #fallback>
              <a-spin style="
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                " :indicator="indicator"/>
            </template>
          </suspense>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {UserOutlined, LoadingOutlined} from "@ant-design/icons-vue";
import leftMenuTree from "./component/leftMenuTree.vue";
import personalMenu from "./component/personalMenu.vue";
import leftMenu from "./component/leftMenu.vue";

import {defineComponent, computed, h} from "vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/store/index.js";
import useLeftMenu from "@/hooks/layout/leftMenu.js";

import needkeIcon from "@/assets/image/needkeIcon.png";
import appLifeCycle from "@/config/appLifeCycle/index.js";

export default defineComponent({
  components: {UserOutlined, leftMenuTree, personalMenu, leftMenu},
  setup() {
    appLifeCycle.mainLayoutCreated()

    const store = useMainStore();
    const handleExit = () => {
      store.logout();
    };

    const route = useRoute();
    const title = computed(() => {
      const title = route.meta.title;
      const hideTitle = route.meta.hideTitle;
      if (!hideTitle && title) {
        return title;
      }

      return false;
    });

    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: "35px",
      },
      spin: true,
    });



    // 模块路由配置
    const {moduleConfig, activeModuleId, leftMenuWidth} = useLeftMenu()

    return {
      handleExit,
      title,
      store,
      indicator,
      moduleConfig,
      activeModuleId,
      needkeIcon,
      leftMenuWidth
    };
  },
});
</script>
<style lang="scss">
.header {
  background-color: #ffffff;
  border: 1px solid rgba(220, 220, 220, 100);
  height: 60px;
  padding: 0;
  display: flex;
  justify-content: space-between;

  .s-needke_logo {
    position: relative;
    top: -40px;
    margin-left: 14px;
  }

  .s-user-logo {
    margin-left: 24px;
    margin-right: 14px;
    cursor: pointer;
  }
}

.site-layout-background {
  background: #fff;
}

.g-top-left {
  display: flex;
  align-items: center;
}

.u-link {
  color: unset;
  display: flex;
  align-items: center;
  padding: 0 10px;


  &:hover,
  &.active {
    height: 30px;
    background: #F1F1F1;
    border-radius: 3px;
  }
}

.g-top-right {
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
}

.g-view {
  height: 100%;
  width: 100%;
  flex: 1;
  overflow: auto;

  @include scroll-buty();

  &.g-wml-container {
    background-color: white;
    overflow: auto;
    padding: 24px 26px;
  }
}

:deep(.ant-badge-count) {
  width: 20px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.ant-badge-count) {
  font-size: 6px;
}

.u-menu-switch {
  cursor: pointer;
}
</style>
