/*
 * @Date: 2022-08-08 14:36:39
 * @LastEditors: kinfai
 * @Description: 阿里云上传
 * @LastEditTime: 2022-08-15 11:37:01
 * @FilePath: \neekde-merchants\src\hooks\curd\aliOss.js
 */
import { inject, reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
import { useFileDialog } from "@vueuse/core";
import dayjs from "dayjs";
import OSS from "ali-oss";

export default function useAliOss() {
  const $api = inject("$api");

  let client;

  const state = reactive({
    SecurityToken: undefined,
    AccessKeySecret: undefined,
    AccessKeyId: undefined,
    url: undefined,
  });

  const uploadInfo = reactive({
    progress: 0,
  });

  const initClient = () => {
    client = new OSS({
      region: "oss-us-west-1",
      accessKeyId: state.AccessKeyId,
      accessKeySecret: state.AccessKeySecret,
      stsToken: state.SecurityToken,
      refreshSTSTokenInterval: 3600,
      bucket: "needke-video",
    });
  };

  const getAliOssToken = () =>
    $api.apiV1CompanyUeditorGetOssToken().then((res) => {
      if (res.code === 200) {
        console.log(res.data);
        const { AccessKeyId, AccessKeySecret, SecurityToken, url } = res.data;

        state.AccessKeyId = AccessKeyId;
        state.AccessKeySecret = AccessKeySecret;
        state.SecurityToken = SecurityToken;
        state.url = url;

        if (!client) {
          initClient();
        }

        return res.data;
      }

      return false;
    });

  const options = {
    // 获取分片上传进度、断点和返回值。
    progress: (p, cpt, res) => {
      console.log("p", p);
      console.log("cpt", cpt);
      console.log("res", res);

      uploadInfo.progress = Math.floor(p * 100);

      // 上传完毕
      if (p === 1) {
      }
    },
    // 设置并发上传的分片数量。
    parallel: 4,
    // 设置分片大小。默认值为1 MB，最小值为100 KB。
    partSize: 1024 * 1024,
    mime: "text/plain",
  };

  const { files, open, reset } = useFileDialog({ multiple: false });

  // ali - 授权 - 获取访问url
  const getAuthStore = (url) => {
    const authUrl = client.signatureUrl(url);
    return authUrl;
  };

  // ali - 上传文件
  const multipartUpload = async (file) => {
    const fileName = file.name.split(".").shift();
    const exl = file.name.split(".").pop();

    const name = `${fileName}-${dayjs().format("YY-MM-DD-h-m-s")}.${exl}`;
    const res = await client
      .multipartUpload(`${state.url}/${name}`, file, {
        ...options,
        secure: true,
      })
      .catch((err) => {
        message("请联系管理员,OSS上传错误~");
        console.log(err, "oss");
      });

    return res;
  };

  return {
    files,
    open,
    reset,
    getAliOssToken,
    multipartUpload,
    getAuthStore,
    ...toRefs(uploadInfo),
  };
}
