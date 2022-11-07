/*
 * @Date: 2022-08-05 10:12:18
 * @LastEditors: kinfai
 * @Description:个人信息
 * @LastEditTime: 2022-08-05 10:16:18
 * @FilePath: \neekde-merchants\src\hooks\personalCenter\personalInfo.js
 */
import { computed, inject, ref } from "vue";
import { message } from "ant-design-vue";
import { useMainStore } from "@/store/index.js";
import useTipUtils from "@/hooks/curd/tipUtils.js";
import pRow from "@/view/personalCenter/components/pRow.vue";

export default function usePersonalCenter() {
  const store = useMainStore();
  const userInfo = computed(() => store.userInfo);

  // 询问修改
  const $api = inject("$api");
  const { confirmInput } = useTipUtils();

  const baseUpdate = (field, value) => {
    return $api
      .apiV1CompanyUserinfoUpdate({
        field,
        value,
      })
      .then((res) => {
        if (res.code === 200) {
          message.success("修改成功~");
          store.getUserInfo();
        } else {
          message.error(res.msg);
        }
      });
  };

  const updateAction = (value, title = "", field) => {
    confirmInput({
      value,
      title: `修改${title}`,
    }).then((val) => {
      baseUpdate(field, val);
    });
  };

  return {
    userInfo,
    baseUpdate,
    updateAction,
    pRow,
  };
}
