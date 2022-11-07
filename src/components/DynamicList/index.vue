<!--
 * @Date: 2022-06-07 16:39:30
 * @LastEditors: kinfai
 * @Description: 动态输入框
 * @LastEditTime: 2022-07-14 09:56:40
 * @FilePath: \neekde-merchants\src\components\DynamicList\index.vue
-->
<template>
  <div class="g-input-list">
    <div class="g-input-row" v-for="(item, index) of list" :key="index">
      <a-textarea
        showCount
        v-model:value="item.value"
        :maxlength="textlength"
        style="width: 100%"
      />
      <PlusOutlined v-if="index === 0" @click="handleAdd"></PlusOutlined>
      <MinusOutlined v-else @click="handleDel(index)" />
    </div>
  </div>
</template>

<script setup>
import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  textlength: {
    type: Number,
    default: 300,
  },
  maxlength: {
    type: Number,
    default: 100,
  },
  list: {
    type: Array,
    default: () => {
      return [
        {
          value: "",
        },
      ];
    },
  },
});

const emiter = defineEmits(["update:list"]);

const handleDel = (index) => {
  const reuslt = props.list.filter((item, i) => i !== index);
  emiter("update:list", reuslt);
};

const handleAdd = () => {
  if (props.list.length < props.maxlength) {
    emiter("update:list", [...props.list, { value: "" }]);
  }
};
</script>

<style lang="scss" scoped>
.g-input-row {
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  .anticon.anticon-plus,
  .anticon.anticon-minus {
    margin-left: 18px;
    color: #f95b3d;
    font-size: 24px;
    cursor: pointer;
  }
}
:deep(.ant-input-textarea-show-count::after) {
  position: relative;
  top: -20px;
  right: 20px;
}
</style>
