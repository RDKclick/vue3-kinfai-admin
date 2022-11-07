<!--
 * @Date: 2022-06-14 17:02:57
 * @LastEditors: kinfai
 * @Description: 通用图片空间
 * @LastEditTime: 2022-08-05 10:31:30
 * @FilePath: \neekde-merchants\src\components\FileSpace\index.vue
-->
<template>
  <a-modal
    v-bind="$attrs"
    @cancel="$emit('update:visible', false)"
    title="文件空间"
    :width="950"
    :footer="null"
    :bodyStyle="{
      padding: `5px`,
      minHeight: '630px',
      height: '100%',
      background: '#f7f7f7',
    }"
  >
    <div class="g-body">
      <div class="g-left">
        <div class="g-left-top">
          <!-- <a-button type="primary" :size="SIZE">添加分类</a-button> -->
          <a-input
            :size="SIZE"
            placeholder="输入关键字搜索"
            v-model:value="searchKey"
          ></a-input>
        </div>
        <ul class="g-left-list">
          <li
            v-for="(item, index) of classifyList"
            :key="index"
            :class="{ active: item.key === path_type }"
            @click="handleChangeCls(item)"
          >
            {{ item.value }}
          </li>
        </ul>
      </div>
      <div class="g-right">
        <div class="g-right-top">
          <a-button
            :size="SIZE"
            @click="handleRefresh"
            :loading="refreshLoading"
            >刷新</a-button
          >
          <a-upload
            :multiple="true"
            :action="uploadUrl"
            :headers="uploadHeader"
            :name="uploadKey"
            :data="handleUploadData"
            :before-upload="handleBeforeUpload"
            @change="handleUploadChange"
            :showUploadList="false"
          >
            <a-button :size="SIZE" type="primary">点击上传</a-button>
          </a-upload>
          <a-button
            :size="SIZE"
            type="primary"
            :disabled="!multipleAction"
            @click="handleSubmit"
            >使用选中的文件{{ checkTip }}</a-button
          >
          <a-button
            :size="SIZE"
            danger
            :disabled="!multipleAction"
            @click="delFile"
            >删除选中的文件</a-button
          >
          <a-button
            type="primary"
            :size="SIZE"
            :disabled="!multipleAction"
            @click="handleDownload"
          >
            <template #icon>
              <DownloadOutlined />
            </template>
          </a-button>
        </div>
        <div class="g-file-container">
          <div class="g-file-list">
            <div
              v-for="file of rightInfo.fileList"
              @click="selectFile(file)"
              class="g-file-box"
              :key="file.id"
              :class="{ mask: file.mask, canHover: file.type !== 'video' }"
            >
              <img alt="404" :src="file.url" v-if="file.type === 'image'" />
              <video
                :src="file.url"
                controls
                v-else-if="file.type === 'video'"
              ></video>
              <div v-else="file.type === 'file'" class="g-type-file">
                <FolderFilled :style="{ fontSize: '60px', color: '#ffe896' }" />
                <span class="s-tip">{{ file.title }}</span>
              </div>
              <div class="g-hover-tool">
                <EyeOutlined
                  v-show="file.type === 'image'"
                  :style="{ color: 'white', fontSize: '18px' }"
                  @click.stop="viewImage(file)"
                />
              </div>
            </div>
            <a-spin size="large" v-if="rightInfo.loading" />
          </div>
        </div>
        <div class="g-right-bottom">
          <a-pagination
            show-quick-jumper
            :size="SIZE"
            v-model:current="rightInfo.pageInfo.page"
            :total="rightInfo.total"
            :defaultPageSize="rightInfo.pageInfo.num"
            @change="pageChange"
          />
        </div>
      </div>
    </div>
    <a-modal
      :visible="previewVisible"
      :footer="null"
      @cancel="handleCancel"
      :centered="true"
      width="70%"
      style="text-align: center"
    >
      <img alt="example" style="width: 80%" :src="previewImage" />
    </a-modal>
  </a-modal>
</template>

<script>
export default {
  name: "fileSpace",
  // inheritAttrs: false,
};
</script>

<script setup>
import { ref, inject, onMounted, reactive, computed, createVNode } from "vue";
import {
  FolderFilled,
  DownloadOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
import { message, Modal } from "ant-design-vue";
import useUpload from "@/hooks/upload";

import TYPE_INFO from "bsConfig/file.js";
const searchKey = ref("");
const classifyList = computed(() => {
  if (String(searchKey.value).trim() === "") {
    return TYPE_INFO.FILE_CLASSIFY;
  }

  return TYPE_INFO.FILE_CLASSIFY.filter((item) =>
    String(item.value).includes(searchKey.value)
  );
});

const SIZE = "small";

const rightInfo = reactive({
  fileList: [],
  pageInfo: {
    page: 1,
    num: 16,
  },
  total: 0,
  loading: false,
});
const multipleAction = computed(
  () => rightInfo.fileList.filter((item) => item.mask).length
);

const refreshLoading = ref(false);
const handleRefresh = () => {
  refreshLoading.value = true;
  getList();
};

const handleChangeCls = (target) => {
  path_type.value = target.key;
  getList();
};

const pageChange = () => {
  rightInfo.loading = true;
  getList();
};

// 拉取图片
const $api = inject("$api");
const $utils = inject("$utils");
const getList = $utils.debounce(async () => {
  rightInfo.loading = true;

  rightInfo.fileList = [];
  const res = await $api
    .apiV1CompanyUeditorList(
      Object.assign(rightInfo.pageInfo, {
        path_type,
      })
    )
    .catch((err) => {
      console.log(err, "错误");
      message.error("服务错误,请联系管理员~");
    });

  setTimeout(() => {
    refreshLoading.value = false;
    rightInfo.loading = false;

    rightInfo.fileList = res.data.list.map((item) =>
      Object.assign(item, { mask: false })
    );
    rightInfo.total = res.data.total;
  }, 500);
}, 500);

// 图片
const {
  uploadUrl,
  uploadHeader,
  uploadKey,
  handleUploadData,
  handleBeforeUpload,
  path_type,
} = useUpload();
const handleUploadChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }

  if (info.file.status === "done") {
    console.log("info", info);
    if (info.file.response.code === 200) {
      message.success("上传成功~");
      getList();
    } else {
      message.error(`上传失败,${info.file.response.msg}`);
    }
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} 上传失败~`);
  }
};

// 选择文件
const selectFile = (row) => {
  if (
    !row.mask &&
    props.maxChecked === 1 &&
    multipleAction.value === props.maxChecked
  ) {
    rightInfo.fileList = rightInfo.fileList.map((item) =>
      Object.assign(item, { mask: false })
    );
  }

  if (
    !row.mask &&
    props.maxChecked > 0 &&
    multipleAction.value === props.maxChecked
  ) {
    message.info(`最多只能选择${multipleAction.value}个文件~`);

    return false;
  }

  let target = rightInfo.fileList.find((item) => item.id === row.id);
  target.mask = !target.mask;
};
const delFile = () => {
  Modal.confirm({
    title: "删除",
    icon: createVNode(ExclamationCircleOutlined),
    content: "您确定要删除选中的文件吗?",
    okText: "确定",
    okType: "danger",
    cancelText: "取消",

    onOk() {
      const ids = rightInfo.fileList
        .filter((item) => item.mask)
        .map((item) => item.id)
        .join(",");

      $api
        .apiV1CompanyUeditorDelete({
          action: "deletefile",
          ids,
        })
        .then((res) => {
          if (res.code === 200) {
            message.success("删除成功~");
            getList();
          } else {
            message.error("删除失败~");
          }
        });
    },
  });
};

const downloadFile = (url, fileName) => {
  const link = document.createElement("a");
  const body = document.querySelector("body");

  link.href = url;
  link.download = fileName;

  // fix Firefox
  // link.style.display = "none";
  body.appendChild(link);

  link.click();
  body.removeChild(link);
};

const handleDownload = () => {
  console.log(rightInfo.fileList.filter((item) => item.mask));
  rightInfo.fileList.forEach((item) => {
    if (item.mask) {
      downloadFile(item.url, item.original);
    }
  });
};

const props = defineProps({
  maxChecked: {
    type: Number,
    default: 0,
  },
});

const checkTip = computed(() => {
  if (props.maxChecked > 0) {
    return `(${multipleAction.value}/${props.maxChecked})`;
  }

  if (multipleAction.value) {
    return `(${multipleAction.value})`;
  }
});

// 预览
const previewVisible = ref(false);
const previewImage = ref("");
const handleCancel = () => {
  previewVisible.value = false;
  previewImage.value = false;
};
const viewImage = (file) => {
  previewVisible.value = true;
  console.log("查看", file);
  previewImage.value = file.url;
};

const emtier = defineEmits(["submit", "update:visible"]);
const handleSubmit = () => {
  const checkedList = rightInfo.fileList.filter((item) => item.mask);
  emtier("update:visible", false);
  emtier("submit", checkedList);
};

onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
@mixin mask() {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.g-body {
  height: 630px;
  display: flex;
  justify-content: space-between;
}
.g-left {
  margin-right: 5px;
  width: 260px;
  height: 100%;
  background: white;
  border-radius: 5px;
  padding: 5px;
  overflow-y: auto;

  .g-left-top {
    display: flex;
    margin-bottom: 12px;

    & > *:nth-child(2) {
      margin-left: 10px;
    }
  }

  .g-left-list {
    padding-left: 0px;

    li {
      list-style: none;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px dashed #eee;
      padding: 0 10px;
      cursor: pointer;
      user-select: none;

      &.active,
      &:hover {
        color: #4165d7;
      }

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
.g-right {
  flex: 1;
  height: 100%;
  background: white;
  border-radius: 5px;
  padding: 5px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .g-right-top {
    padding-bottom: 8px;
    background: white;

    .ant-btn {
      margin-right: 8px;
    }
  }

  .g-file-container {
    position: relative;
    flex: 1;
    overflow: auto;
    @include scroll-buty();
  }

  .g-file-list {
    display: flex;
    flex-wrap: wrap;

    .g-type-file {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;

      .s-tip {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: black;
        color: white;

        @include ellipseText();
      }
    }

    :deep(.ant-spin) {
      position: absolute;
      top: 50%;
      left: 50%;
    }

    .g-file-box {
      height: 140px;
      width: 23%;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 8px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      overflow: hidden;

      &:nth-child(2n) {
        margin: 0px 13px;
      }

      &:nth-child(4n) {
        margin-right: 0px;
      }

      .g-hover-tool {
        width: 100%;
        height: 100%;
        position: absolute;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
      }

      &.canHover:hover {
        .g-hover-tool {
          visibility: visible;
          z-index: 3;
        }
      }

      &.canHover:hover::before {
        @include mask();
      }

      &.mask::before {
        @include mask();
        content: "✅" !important;
        text-align: right;
        color: white;
      }

      :deep(.ant-image) {
        max-height: 98%;
        width: 100%;
      }

      img,
      video {
        max-height: 140px;
        width: 100%;
        -webkit-user-drag: none;
      }
    }
  }

  .g-right-bottom {
    padding-top: 8px;
  }
}
</style>
