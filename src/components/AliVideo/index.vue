<!--
 * @Date: 2022-08-09 15:48:46
 * @LastEditors: kinfai
 * @Description: 阿里视频
 * @LastEditTime: 2022-08-11 14:48:31
 * @FilePath: \neekde-merchants\src\components\AliVideo\index.vue
-->
<template>
  <div class="g-ali-video" @click="openEvent">
    <div class="g-uploading" v-if="uploading">
      <a-spin :tip="progress + '%'"></a-spin>
    </div>
    <div class="s-null" v-if="url === ''">+</div>
    <div v-if="url" class="g-url-box">
      <delete-outlined
        v-if="!disableDel"
        class="s-icon-delete"
        @click.stop="delImage"
      />
      <video :src="url" width="160" height="100" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "ali-video",
};
</script>

<script setup>
import { watch, ref, computed } from "vue";
import { message, Modal } from "ant-design-vue";
import { DeleteOutlined } from "@ant-design/icons-vue";
import useAliOss from "@/hooks/curd/aliOss.js";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  disableDel: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 0,
  },
  maxSize: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:value", "update:size"]);

const {
  open,
  reset,
  getAliOssToken,
  getAuthStore,
  multipartUpload,
  files,
  progress,
} = useAliOss();

await getAliOssToken();

const uploading = ref(false);

const url = computed(() => {
  if (String(props.value)) {
    return getAuthStore(props.value);
  } else {
    return "";
  }
});

const openEvent = () => {
  if (uploading.value === true) {
    return false;
  }

  if (props.value === "") {
    open();
  }
};

const delImage = () => {
  Modal.confirm({
    title: "您确定要删除该视频吗？",
    onOk: () => {
      emit("update:value", "");
    },
  });
};

watch(files, async (val) => {
  if (val && val.length) {
    const file = val[0];
    console.log(file, "文件");

    // 拦截
    if (props.maxSize !== 0) {
      const maxSize = props.maxSize;
      const fileSize = Math.floor((file.size / 1024 / 1024) * 100) / 100;
      if (fileSize > maxSize) {
        message.info(`上传文件最大${maxSize}M`);
        return false;
      }
    }

    uploading.value = true;
    const { name, res } = await multipartUpload(file);
    uploading.value = false;
    if (res.statusCode === 200) {
      emit("update:value", name);
      emit("update:size", file.size);
      message.info("上传成功~");
    } else {
      console.log("上传失败~");
      message.info("上次失败，请联系管理员~");
    }
    reset();
  }
});

defineExpose({
  uploading,
});
</script>

<style lang="scss" scoped>
.g-ali-video {
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(220, 220, 220, 100);
  width: 170px;
  height: 90px;
  position: relative;

  .g-url-box {
    background-color: black;
    width: 100%;
  }

  .s-icon-delete {
    position: absolute;
    font-size: 22px;
    color: whtie;
    z-index: 1000;
    color: white;
    top: 5px;
    right: 5px;
    display: none;
    cursor: pointer;
  }

  &:hover .s-icon-delete {
    display: block;
  }

  .s-null {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
  }

  .g-uploading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
