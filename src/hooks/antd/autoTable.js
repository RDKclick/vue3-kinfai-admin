/*
 * @Date: 2022-07-13 14:38:50
 * @LastEditors: kinfai
 * @Description: 自动高度
 * @LastEditTime: 2022-07-14 16:12:19
 * @FilePath: \neekde-merchants\src\hooks\antd\autoTable.js
 */
import { onMounted, onUnmounted, ref, nextTick } from "vue";

// 响应式 table-height
export default function useTableHeight(cutVal = 50) {
  const containerRef = ref();
  const tableHeight = ref(500);

  let updateTableHeight = () => {
    nextTick((_) => {
      tableHeight.value = containerRef.value.clientHeight - cutVal;
    });
  };

  window.onresize = () => updateTableHeight();

  onMounted(() => {
    updateTableHeight();
  });

  onUnmounted(() => {
    updateTableHeight = () => {};
  });

  return {
    containerRef,
    tableHeight,
  };
}
