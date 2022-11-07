<!--
 * @Date: 2022-07-14 09:16:59
 * @LastEditors: kinfai
 * @Description: 媒体组合方块
 * @LastEditTime: 2022-07-22 15:10:26
 * @FilePath: \neekde-merchants\src\components\MediaBlock\index.vue
-->
<template>
  <div class="g-info-column">
    <a-image
      v-if="record.images"
      :width="imgWidth"
      :height="imgHeight"
      :src="record.images"
    ></a-image>
    <div class="g-right-box">
      <p class="s-id">ID: {{ record.id }}</p>
      <p class="s-title">{{ record.title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgWidth: {
    type: Number,
    default: 55,
  },
  imgHeight: {
    type: Number,
    default: 55,
  },
  record: {
    type: Object,
    default: () => {
      return {
        images: "",
        id: "123",
        title: "title",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
:deep(.ant-image) {
  flex-shrink: 0;
}

.g-info-column {
  display: flex;
  align-items: flex-start;

  .g-right-box {
    margin-left: 8px;
  }

  .s-id {
    color: rgba(164, 173, 179, 100);
    font-size: 12px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }

  .s-title {
    color: rgba(16, 16, 16, 100);
    font-size: 13px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    word-wrap: break-word;
  }
}
</style>
