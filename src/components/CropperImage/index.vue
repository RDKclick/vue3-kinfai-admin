<!--
 * @Date: 2022-07-21 15:39:38
 * @LastEditors: kinfai
 * @Description: 剪切图片
 * @LastEditTime: 2022-08-05 10:24:29
 * @FilePath: \neekde-merchants\src\components\CropperImage\index.vue
-->
<template>
  <a-modal
    :title="title"
    v-bind="$attrs"
    @ok="handleOk"
    @cancel="handleCancel"
    :keyboard="false"
  >
    <div style="height: 450px; width: 80%; margin: 0 auto">
      <vue-cropper
        ref="cropperRef"
        :img="imgUrl"
        :outputSize="1"
        outputType="jpeg"
        :autoCrop="true"
        :centerBox="true"
        :fixed="fixedBox"
        :fixedNumber="aspectRatio"
      ></vue-cropper>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: "cropper-modal",
};
</script>

<script setup>
import { computed, ref } from "vue";
import useUpload from "@/hooks/upload";

const props = defineProps({
  title: {
    type: String,
    default: "魔法空间",
  },
  imgUrl: {
    type: String,
    default: "",
  },
  // 宽高比 [宽, 高]
  aspectRatio: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:visible", "update:imgUrl"]);

const handleCancel = () => {
  emit("update:visible", false);
};

const fixedBox = computed(() => (props.aspectRatio.length ? true : false));
const cropperRef = ref();
const { apiUpload } = useUpload();

const handleOk = () => {
  cropperRef.value.startCrop();
  cropperRef.value.getCropBlob((data) => {
    emit("update:visible", false);
    const file = new File([data], "resize", { type: data.type });
    apiUpload(file).then((res) => {
      if (res.code === 200) {
        emit("update:imgUrl", res.data.url);
      }
    });
  });
};
</script>
