<!--
 * @Date: 2022-07-21 10:05:08
 * @LastEditors: kinfai
 * @Description: 图片上传块
 * @LastEditTime: 2022-08-05 10:35:35
 * @FilePath: \neekde-merchants\src\components\ImageBlock\index.vue
-->
<template>
  <div
      class="g-image-block"
      :class="{ hasImg: logoUrl, bordered }"
      :style="{ height, width }"
      @click="handleAdd"
  >
    <appstore-outlined
        class="s-appstore-outlined"
        @click.stop="openGallerVisible"
        v-if="!disableFileSpace"
    />

    <img
        v-if="logoUrl"
        :src="logoUrl"
        :alt="logoUrl"
        class="s-logo"
        onerror="javascript:this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAACYCAMAAAC4aCDgAAABC1BMVEX///9EREQ/Pz80NDQxMTEtLS3Kysrf399xcXE4ODg8PDw5OTn29vaysrI+Pj6bm5vw8PBoaGjCwsJiYmJ+fn5JSUna2tqUlJRbW1t1dXUpKSnm5uZRUVG5ubkjIyOnp6fT09OKioqvnIn/+fD/7+Dt+P/c4eWioqLp6ekTExONjY3R0dGXl5fTzcbf2dPCyc+HclpAU2mbrsBwXEZncn4/XHSOemauwNG0oY1qYV2SorPn2840LyltgZSnlohhZ3E+S1TQwrNVbYFBP0eXj4ZuVTnd7ftPVVsrRV9WPDPHtKFcRSuijnnK2umaqLdZcIPCta3Izt+1tL28rq3Rw76ek5yxwMLMzcW9u8O5+Xr5AAAEfElEQVR4nO3abVfaSBgG4CfvEhIYA0ZgoEaROG1KsC+WVna7tbvr7rpiW3W3/v9fsjPhHQq4X0TPua8vZpLncMJ9ZjIzQSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFjOCYLAnjT50Xa9XvW9xUJZF4iHu6+nyHMNw9weN3etvK7phZzRmC9s1AzjmT1/FqZVXU3Tt8YtQxuy9mbrmLpiIMxVGqY2FaavWq5p6PJPzZkpLOkIcw2W06bDVK3cvhNuF+TJ7enCvazLIsxVVGqTMBsyzEJZHe2ogc4ndY6lIcw1Bv1tHOaWHMpmmF3Ia1p+6qlZ1xHmGlw+IvWpMFW0+ezIMWfG+W5uUIgwl6voclRPwsyyrWSHXjYTjeoiOcjdso4wVyjK/rbj5cdh2sakk6p+aI1W7mpaOlIPVIS5TCj7mxWpGXyY4GT+kQ9JGaA5XByVXU2vk48wV1D9bZe8SZhq1nH3BxfVjGNG2WFgZjM7wlxhP6/623SYRyrM3cHVinpCJupIPQcMObEjzOVsNcjDe4S5VRjMSghzKU9uyXNFmgmz+KMw1Q7TUi+LEOZSVXe4ClrxzDQiIiGzNHx1BmEuo95v5EJPYoMwPW8QV2EU5nA2L+lq8S7ryJdR5wJ1BLOqak9uWJKZ7Sct65mctuU6s1AdFGTrTEasNrgq5VVhznq2u9k7f4TKBW2O3O6EagdUyq57ameZI2LWQl1xw7f++PwwTC9LLrvOh7kizHuo1syh7L2Rbpo1Gq7UsxdvajOUl7Gx56M601WFeRPDfAF3RkK1N9+WbZpeG5VGL+PCUR0vyjTzvuPgN7UVJksj4mpQmz55L9TJ+mwdlkbrTa0z5RYz+93CstSQtuaCQ5jrzYRJFXc00Rj7c4UIcz2vlneN8Tt1b8vK5vmC9WK+0Ldct4YwV3tZLBb9SdOuapa1Uw4X6hJZ+NJZOA2rYccIAAAAAPC4tGNK43ErbTQW/gO72XnQG3rKjl/R5evs6E2L6ODt3sK79MOTB7+pp+qd1n3/uvmhctr76WcZ5pVg9LHyC112D18dfip/ap3tlD9v+h6fjOPOr791L7v0+/nfsme+/2PrtHdCF6cyzJPDP+m4/1erhzDv67h/8XwS5kGXaBhm70SOb4T5vxz36U23+aF0Re++yDDV4/Nj6S31dvY/Z2H26uUvm75HAAAAAHishH/bERGlTpTGqSPCuM1t2UqEzTmPw7QTia/9ZseJuQi+fxMdljToJuYxHUUOC23x9ZwlTod837ET4rETJ7FIeXi96e+1GUkaXiVkB0kYRGfhTdS/jVp2O7qOOrYftZNG56Z5HlCQ2PZB61svvO51yZZX6Kx/Ed/E/4hzO/3XpsT+fhe0eMcPk9vbu3Z8t+mvtRmMMRGSYCHnKYt4KxUJCS9ieyISsSN46tmtZiLiNGZtWcsi1kpjERNT1UwkrWbIBHHBeERCdlkm5Ed4bNNfCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgMfgPZ5NcXqJLupgAAAAASUVORK5CYII=';"
    />
    <div v-else style="text-align: center">
      <slot name="defaultNull">
        <plus-outlined/>
        <div>
          <slot name="uploadTitle">
            <span v-show="uploadTitle" class="s-upload-title">{{
                uploadTitle
              }}</span>
          </slot>
        </div>
      </slot>
    </div>

    <delete-outlined
        v-if="logoUrl"
        class="s-del-icon"
        @click.stop="handleDelete"
    />
    <scissor-outlined
        v-if="logoUrl"
        class="s-edit-icon"
        @click.stop="openPreview"
    />
    <redo-outlined class="s-loading-icon" v-if="loading" spin/>

    <input
        type="file"
        :id="autoId"
        style="display: none"
        :accept="acceptType"
    />
  </div>
  <wml-cropper-image
      v-model:visible="previewVisible"
      v-model:imgUrl="logoUrl"
      v-if="previewVisible"
      :destroyOnClose="true"
  ></wml-cropper-image>
  <wml-file-space
      :maxChecked="1"
      v-model:visible="galleryVisible"
      v-if="galleryVisible"
      @submit="gallerySubmitAction"
  ></wml-file-space>
</template>

<script setup>
import {ref, inject, onMounted} from "vue";
import {
  PlusOutlined,
  DeleteOutlined,
  RedoOutlined,
  ScissorOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import {message, Modal} from "ant-design-vue";

const props = defineProps({
  logoUrl: {
    type: String,
    default: "",
  },
  uploadTitle: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "80px",
  },
  width: {
    type: String,
    default: "320px",
  },
  pathType: {
    type: String,
    default: "baseset",
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  askDel: {
    type: Boolean,
    default: true,
  },
  disableFileSpace: {
    type: Boolean,
    default: false
  },
  acceptType: {
    type: String,
    default: "image/png, image/jpeg, image/jpg, image/svg, image/gif"
  }
});

const emit = defineEmits(["update:logoUrl", "deleteAction", "log"]);

const $utils = inject("$utils");
const autoId = $utils.guid();

const handleAdd = () => {
  loading.value = true;
  document.getElementById(autoId).click();
};

const baseDel = () => {
  emit("update:logoUrl", "");
  emit("deleteAction");
  emit("log", "");
};
const handleDelete = () => {
  if (props.askDel) {
    Modal.confirm({
      title: "删除?",
      content: "您确定删除吗?",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        baseDel();
      },
    });

    return false;
  }

  baseDel();
};

// 预览逻辑
const previewVisible = ref(false);
const openPreview = () => (previewVisible.value = true);

const $api = inject("$api");
const loading = ref(true);
onMounted(() => {
  const upLoadImg = document.getElementById(autoId);
  upLoadImg.addEventListener("change", async function (e) {
    if (e.target.files && e.target.files[0]) {
      const upfile = e.target.files[0];
      const res = await $api.uploadFile({
        upfile,
        action: "uploadimage",
        path_type: props.pathType,
      });
      loading.value = false;
      if (res.code === 200) {
        emit("update:logoUrl", res.data.url);
        upLoadImg.value = "";
      } else {
        message.error(res.msg);
      }
    }
  });
});

// 图库逻辑
const galleryVisible = ref(false);
const openGallerVisible = () => (galleryVisible.value = true);
const gallerySubmitAction = (checkList) => {
  emit("update:logoUrl", checkList[0].url);
  emit("log", checkList[0].url);
};

defineExpose({
  openGallerVisible,
  handleAdd,
  openPreview,
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

@mixin hoverIcon() {
  position: absolute;
  color: white;
  visibility: hidden;
  z-index: 3;
}

.g-image-block {
  font-family: Roboto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &.bordered {
    border: 1px solid rgba(220, 220, 220, 100);
  }

  .s-upload-title {
    color: rgba(16, 16, 16, 100);
    font-size: 12px;
    text-align: center;
    font-family: Roboto;
  }

  &.hasImg:hover::before {
    @include mask();
  }

  &.hasImg:hover {
    .s-del-icon,
    .s-edit-icon {
      visibility: visible;
    }

    .s-appstore-outlined {
      color: white;
      bottom: 5px;
      z-index: 11;
      top: 25px;
      display: inline-block;
    }
  }
}

.s-del-icon {
  @include hoverIcon();
  right: 5px;
  top: 5px;
}

.s-edit-icon {
  @include hoverIcon();
  font-size: 25px;
  color: white;
}

.s-loading-icon {
  visibility: hidden;
  position: absolute;
  z-index: 3;
  font-size: 32px;
}

.s-appstore-outlined {
  position: absolute;
  right: 5px;
  top: 5px;
}

.hasImg {
  .s-appstore-outlined {
    display: none;
  }
}

.s-logo {
  width: 100%;
  height: 100%;
}
</style>
