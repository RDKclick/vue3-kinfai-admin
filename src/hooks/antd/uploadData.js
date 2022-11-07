/*
 * @Date: 2022-07-19 14:34:37
 * @LastEditors: kinfai
 * @Description: 包装上传数据
 * @LastEditTime: 2022-07-21 11:30:52
 * @FilePath: \neekde-merchants\src\hooks\antd\uploadData.js
 */
export default function useUploadData(options) {
  const defaultOptions = Object.assign(
    {
      keyUrl: "url",
      status: "done",
    },
    options
  );

  const atomicWrapAction = (obj) => {
    if (typeof obj === "string") {
      if (!obj) {
        return false;
      }

      obj = {
        [defaultOptions.keyUrl]: obj,
      };
    }

    const url = obj[defaultOptions.keyUrl];
    const name = obj.name || url.split("/")[url.split("/").length - 1];
    const thumbUrl = obj.thumbUrl || url;

    return {
      ...obj,
      uid: obj.id || undefined,
      name,
      status: defaultOptions.status,
      thumbUrl,
      url,
    };
  };

  const atomicUnboxAction = (obj) => (obj.url ? obj.url : "");

  // 装箱 - 用于antd-upload显示 - fileList
  const handleWrap = (data) => {
    if (!data) {
      return [];
    }

    return data.filter((item) => item).map((item) => atomicWrapAction(item));
  };

  // 拆箱 - API - 存储
  const handleUnbox = (data) => {
    return data.map((item) => atomicUnboxAction(item));
  };

  return { atomicWrapAction, atomicUnboxAction, handleWrap, handleUnbox };
}
