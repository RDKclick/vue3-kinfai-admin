/*
 * @Date: 2022-06-07 11:57:20
 * @LastEditors: kinfai
 * @Description: 适配 antd上传组件对应API
 * @LastEditTime: 2022-07-20 14:01:52
 * @FilePath: \neekde-merchants\src\hooks\upload\index.js
 */
import file from "bsConfig/file";
import { ref, inject } from "vue";

export default function useUpload() {
  const uploadUrl =
    import.meta.env.VITE_API_URL + "/api/v1/company/ueditor/upload";

  // 设置上传时候的header
  const tokenValue = localStorage.getItem("token");
  const uploadHeader = {
    Authorization: `Bearer ${tokenValue}`,
  };

  const loading = ref(false);

  // 上传form中文件的key值
  const uploadKey = "upfile";

  const path_type = ref("");
  /**
   * @description: 执行上传接口之前,参数修改
   * @param {*} data - antd-upload组件返回的file
   * @return {*}
   */
  const handleUploadData = (data) => {
    let action = "";
    for (let key in file.UPLOAD_FILE_TYPE) {
      if (String(data.type).includes(file.UPLOAD_FILE_TYPE[key])) {
        action = key;
        break;
      }
    }
    data.action = action;

    if (path_type.value) {
      data.path_type = path_type.value;
    }

    return data;
  };

  /**
   * @description: 传入文件,解析为base64
   * @param {*} file: 文件
   * @return {*}
   */
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        console.log(e.target);
        resolve(e.target.result);
      };
    });
  };

  /**
   * @description: base64加载img元素,返回宽高
   * @param {*} base64: base64格式的图片
   * @return {*}
   */
  const getImgSize = (base64) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = function (e) {
        resolve({
          width: img.width,
          height: img.height,
        });
      };
      img.src = base64;
    });
  };

  // api方式的文件上传
  const $api = inject("$api");
  const apiUpload = (upfile, path_type = "other") => {
    // 区分文件类型
    let action = "";
    for (let key in file.UPLOAD_FILE_TYPE) {
      if (String(upfile.type).includes(file.UPLOAD_FILE_TYPE[key])) {
        action = key;
        break;
      }
    }

    return $api.uploadFile({
      upfile,
      action,
      path_type,
    });
  };

  return {
    path_type,
    uploadUrl,
    uploadHeader,
    uploadKey,
    handleUploadData,
    fileToBase64,
    getImgSize,
    loading,
    apiUpload,
  };
}
