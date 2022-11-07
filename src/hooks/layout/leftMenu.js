/*
 * @Date: 2022-08-11 15:15:39
 * @LastEditors: kinfai
 * @Description:左侧菜单
 * @LastEditTime: 2022-10-26 09:52:36
 * @FilePath: \wml-vue3-antd\src\hooks\layout\leftMenu.js
 */
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useMainStore} from "@/store/index.js";
import {computed} from "vue";

export default function useLeftMenu() {
  const route = useRoute();
  const router = useRouter();

  // 个人信息
  const store = useMainStore();
  const { userInfo, leftMenuStatus } = storeToRefs(store);

  // 路由配置文件
  const modules = import.meta.globEager("../../router/*/index.js");

  // 读取路由文件
  const findByDir = (dir) => {
    const path = Object.keys(modules).find((path) =>
      String(path).includes(`/${dir}/`)
    );

    return modules[path].default
      ? modules[path].default.filter((item) => !item.meta.hideMenu)
      : [];
  };

  // 网站
  const webModule = [
    {
      title: "首页",
      icon: "icon-home",
      dirList: findByDir("home"),
    },
    // {
    //   title: "产品管理",
    //   icon: "icon-chanpinmoxing",
    //   dirList: findByDir("produce"),
    // },
    // {
    //   title: "网站管理",
    //   icon: "icon-wangzhan",
    //   dirList: findByDir("website"),
    // },
    // {
    //   title: "询盘中心",
    //   icon: "icon-xunpanC",
    //   dirList: findByDir("inquiry"),
    // },
    // {
    //   title: "数据中心",
    //   icon: "icon-dashuju",
    //   dirList: findByDir("dataCenter"),
    // },
    // {
    //   title: "企业资料",
    //   icon: "icon-qiyeyuanquwuye-xianxing",
    //   dirList: findByDir("enterprise"),
    // },
  ];

  // 获取该模块所有的所属 - route-name
  const getAllName = (mdl) => mdl.map(subModule => subModule.dirList.map(item => item.name)).flat()

  // 模块配置
  const moduleConfig = [
    {
      id: 1,
      title: "网站",
      modules: webModule,
      name: "home",
      allName: getAllName(webModule)
    },
    // {
    //   id: 2,
    //   title: "聊天",
    //   modules: chatModule,
    //   name: "chat",
    //   allName: [...getAllName(chatModule), "basicSetter", "languageSetter", "robot", "shunt", "contactDetailPanel"]
    // }
  ]

  const routerConfig = computed(() => {
    const target = moduleConfig.find(module => module.allName.find(name => name === route.name))
    const result = target ? target : moduleConfig[0]

    return result.modules
  })

  const activeModuleId = computed(() => {
    const target = moduleConfig.find(module => module.allName.find(name => name === route.name))
    return target ? target.id : 0
  })

  // 左侧菜单宽度
  const leftMenuWidth = computed(() => {
    if(route.meta.personalCenter === true) {
      return "200px"
    }else{
      return store.leftMenuStatus === 'menu' ? '230px' : '58px'
    }
  })

  const goFirstPage = (dirList) => {
    if (dirList.length === 1) {
      router.push({
        name: dirList[0].name,
      });
    }
  };

  return {
    route,
    router,
    routerConfig,
    activeModuleId,
    userInfo,
    goFirstPage,
    moduleConfig,
    leftMenuWidth
  };
}
