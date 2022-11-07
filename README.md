<!--
 * @Date: 2022-03-07 14:07:32
 * @LastEditors: kinfai
 * @Description: 项目简介
 * @LastEditTime: 2022-10-26 10:50:05
 * @FilePath: \wml-vue3-antd\README.md
-->

# Vue 3 + Vite + antd + vueuse

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


# 安装依赖之前请修改源为内部npm仓库 - http://192.168.2.86:4873/
yarn --- yarn config set registry http://192.168.2.86:4873/
npm --- npm config set registry http://192.168.2.86:4873/

## 配置文件 - src/config

> 业务模块映射: 已配置**bsConfig**相对路径
>
> 使用案例:
> bsConfig/aboutUs.js 相当于 src/config/businessConfig/aboutUs.js

1. settings.js --- 项目配置
   - iconfont --- 阿里图标配置
2. src/config/businessConfig --- 该文件夹下的业务模块配置
   - aboutUs.js --- 关于我们
   - produceDetails.js --- 商品详情

---

## 自动注入:

1. 路由 (src/router/xxx.router.js)
2. API (src/api/xxx.api.js)
3. 全局组件
   - 基于项目配置文件,前缀 --- wml 拼接文件名自动注册
   - 使用的时候 **前缀-ali-icon**即可

# router.meta配置
   * auth: 是否需要登录
   * hideTitle: 是否主布局中自带的标题
   * padding: 是否需要自带的边距
   * hideMenu：当为ture不出现在菜单栏

#### 项目配置统一配置文件 - @/config

1. appLifeCycle - 项目生命周期
   1. 登录后执行 - 函数
      1. 调用 store仓库， 全局一次性接口。后续访问相关接口，直接访问store不请求接口
   2. 主布局初始化 - 函数
      1. 初始化 turms/socket
2. settings
   1. iconfont 配置
   2. prefix - 全局组件
   3. authLogin - 路由是否需要登录
   4. loginDate - 登录有效时间
   5. errorImg - 加载失败使用该图片
   6. apiTimeout - 接口超时时间

---

# 全局组件 - 常用业务组件

1. Aliicon - iconfont 图标
2. AliShowVideo - 播放 ali-oss 视频 - 只能播放
3. AliVideo - 上传 ali-oss 视频控件
4. CropperImage - 在线剪切图片尺寸
5. FileSpace - 全局文件管理器
6. ImageBlock - 图片上传控件 - 上传到公司服务器
7. WangEditor - 富文本编辑器

# hooks
1. curd
   1. index.js - 提供针对 ant-table curd 业务
   2. aliOss - 封装对接 ali-oss 权限
   3. time - 封装常用时间
   4. tipUtils - 扩展 ant 弹窗，无需二次编写组件
      1. confirmInput - 弹出一个 input 确认框并返回值
      2. confirmDel - 红标删除弹窗

# utils

1. http - 使用 axios 封装 http 请求
2. socket - 对接后端 socket.io 服务
3. turms - 对接后端 turms-IM 服务
4. tool - 老项目常用 js 方法
5. fontEndApi - 封装该项目对外开放 json 文件接口

---

## 快捷工具

- **yarn autoApi** - 运行该命令.将自动编写*autoWrite.api.js*
- **yarn autoDeploy:pro** - 运行该命令，使用生产环境变量打包，部署对应环境
- **yarn autoDeploy:dev** - 运行该命令，使用测试环境变量打包，部署对应环境

---
