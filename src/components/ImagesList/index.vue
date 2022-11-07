<!--
 * @Date: 2022-07-12 10:39:28
 * @LastEditors: kinfai
 * @Description: 图片管理
 * @LastEditTime: 2022-07-21 10:01:36
 * @FilePath: \neekde-merchants\src\components\ImagesList\index.vue
-->
<template>
  <a-upload
    v-model:file-list="countFileList"
    action="#"
    list-type="picture-card"
    :openFileDialogOnClick="false"
    @preview="handlePreview"
  >
    <div v-if="fileList.length < max" @click="openFile">
      <plus-outlined />
    </div>
  </a-upload>
  <a-form-item-rest>
    <wml-file-space
      v-model:visible="fileSpaceVisible"
      v-if="fileSpaceVisible"
      :maxChecked="maxCheck"
      @submit="handleReceive"
    ></wml-file-space>

    <a-modal v-model:visible="previewVisible" @ok="handleOk" title="魔法空间">
      <div style="height: 450px; width: 80%; margin: 0 auto">
        <vue-cropper
          ref="cropper"
          :img="previewImg"
          :outputSize="1"
          outputType="jpeg"
          :autoCrop="true"
          :centerBox="true"
          :fixed="fixedBox"
          :fixedNumber="aspectRatio"
        ></vue-cropper>
      </div>
    </a-modal>
  </a-form-item-rest>
</template>

<script>
export default {
  name: "wml-images-list",
};
</script>

<script setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { ref, computed } from "vue";
import useUpload from "@/hooks/upload";

const props = defineProps({
  max: {
    type: Number,
    default: 8,
  },
  fileList: {
    type: Array,
    default: () => [],
  },
  // 宽高比
  aspectRatio: {
    type: Array,
    default: () => [],
  },
});
const fixedBox = computed(() => (props.aspectRatio.length ? true : false));

const emiter = defineEmits(["update:fileList"]);

const maxCheck = computed(() => props.max - props.fileList.length);

const countFileList = computed({
  get() {
    return props.fileList;
  },
  set(val) {
    emiter("update:fileList", val);
  },
});

// 图片空间
const fileSpaceVisible = ref(false);
const openFile = () => (fileSpaceVisible.value = true);
const handleReceive = (list) => {
  const result = list.map((item) => {
    return {
      ...item,
      name: item.title,
      uid: item.id,
      status: "done",
      thumbUrl: item.url,
    };
  });

  countFileList.value.push(...result);
};

// 预览图片
const previewImg = ref("");
const previewVisible = ref(false);
const cropper = ref();
const activePreviewImg = ref();
const handlePreview = (file) => {
  console.log("预览图片", file, props.fileList);
  activePreviewImg.value = file;
  previewImg.value = file.url;
  previewVisible.value = true;
};
const { apiUpload } = useUpload();
const handleOk = () => {
  cropper.value.startCrop();
  cropper.value.getCropBlob((data) => {
    const file = new File([data], "resize", { type: data.type });
    apiUpload(file).then((res) => {
      previewVisible.value = false;
      const index = props.fileList.findIndex(
        (item) => item.id === activePreviewImg.value.id
      );
      props.fileList.splice(index, 1, {
        ...res.data,
        thumbUrl: res.data.url,
      });
      console.log(res.data);
    });
  });
};
</script>

<style lang="scss" scoped>
.g-file {
  height: 140px;
  width: 140px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dotted #e1e1e1;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fafafa;
  margin-right: 15px;
  overflow: hidden;
}

:deep(.ant-upload) {
  width: 100% !important;
}

:deep(.ant-upload-list-picture-card-container) {
  width: 100%;
}
:deep(.ant-upload-list-item-list-type-picture-card) {
  padding: 0;
}
:deep(.ant-upload-list-item-image) {
  object-fit: none;
}
</style>
