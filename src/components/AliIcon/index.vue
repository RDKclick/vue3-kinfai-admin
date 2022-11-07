<!--
 * @Date: 2022-03-08 23:52:45
 * @LastEditors: kinfai
 * @Description: iconfont图标
 * @LastEditTime: 2022-05-31 16:02:59
 * @FilePath: \neekde-merchants\src\components\AliIcon.vue
-->
<template>
  <MyIcon :type="props.type" :style="props.iconStyle" :spin="props.spin" />
</template>

<script setup>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import config from "@/config/settings.js";

const MyIcon = createFromIconfontCN({
  scriptUrl: config.iconfontUrl, // 在 iconfont.cn 上生成
});

const props = defineProps({
  // iconfont-name
  type: {
    type: String,
    default: "icon-whatsapp",
  },
  // 样式: fontSize && color
  iconStyle: {
    type: Object,
    default: () => {
      return {
        fontSize: "25px",
      };
    },
  },
  // 是否旋转
  spin: {
    type: Boolean,
    default: false,
  },
});
</script>
