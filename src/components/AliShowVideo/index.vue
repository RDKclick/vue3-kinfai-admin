<!--
 * @Date: 2022-08-15 14:56:24
 * @LastEditors: kinfai
 * @Description:  阿里展示视频 + 预览图
 * @LastEditTime: 2022-08-15 15:40:44
 * @FilePath: \neekde-merchants\src\components\AliShowVideo\index.vue
-->
<template>
  <div class="g-ali-video">
    <video
      :src="state.video"
      width="150"
      height="90"
      controls
      v-if="state.init"
      autoplay
    ></video>
    <div v-else>
      <div class="b-play" @click="handlePlay">
        <caret-right-filled class="caret-right-filled"></caret-right-filled>
      </div>
      <a-image :src="coverImages" :width="width" :height="height"></a-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "ali-show-video",
};
</script>

<script setup>
import useAliOss from "@/hooks/curd/aliOss.js";
import { reactive } from "vue";
import { CaretRightFilled } from "@ant-design/icons-vue";
const { getAliOssToken, getAuthStore } = useAliOss();
const props = defineProps({
  // 视频地址
  value: {
    type: String,
    default: "",
  },
  //   封面图
  coverImages: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "150px",
  },
  height: {
    type: String,
    default: "90px",
  },
});

const state = reactive({
  init: false,
  loading: false,
  video: "",
});

const handlePlay = async () => {
  if (props.value === "") {
    return false;
  }

  state.init = true;
  state.loading = true;

  await getAliOssToken();
  state.video = getAuthStore(props.value);
  console.log(state.video, props.value);

  state.loading = true;
};
</script>

<style lang="scss" scoped>
.g-ali-video {
  position: relative;

  .b-play {
    position: absolute;
    cursor: pointer;
    z-index: 1000;
    background-color: #ff2525;
    width: 30px;
    height: 20px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 15px;
    bottom: 7px;
  }

  .caret-right-filled {
    color: white;
    border-radius: 3px;
  }
}
</style>
