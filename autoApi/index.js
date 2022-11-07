/*
 * @Date: 2022-06-06 09:20:45
 * @LastEditors: kinfai
 * @Description: 生成 autoWrite.api.js
 * @LastEditTime: 2022-10-26 11:11:32
 * @FilePath: \wml-vue3-antd\autoApi\index.js
 */
var fs = require("fs");
const http = require("http");

// 读取公共api配置文件 --- apiFox(openApi文件)
const FILEURL = "http://127.0.0.1:4523/export/openapi/2";

// 输入生成API文件的地址
const SAVEPATH = `./src/api/autoWrite.api.js`;

// 下载文件
function downloadFile(uri, dest, cb) {
  // 确保dest路径存在
  const file = fs.createWriteStream(dest);

  http.get(uri, (res) => {
    if (res.statusCode !== 200) {
      console.log("异常,请查看apiFox分享文档是否正常");
      return;
    }

    res.on("end", () => {
      console.log("download end");
    });

    // 进度、超时等

    file
      .on("finish", () => {
        console.log("finish write file");
        file.close(cb);
      })
      .on("error", (err) => {
        fs.unlink(dest);
        if (cb) cb(err.message);
      });

    res.pipe(file);
  });
}

// 解析数据
function parseData(openApi) {
  //   组合数据
  const { paths } = openApi;
  return Object.keys(paths)
    .map((name) => {
      let result = String(name)
        .substr(1)
        .split("/")
        .map((item, index) => {
          if (index !== 0) {
            return item.charAt(0).toUpperCase() + item.slice(1);
          }
          return item;
        });

      result = result.join("");

      result = result.split("-").map((item, index) => {
        if (index !== 0) {
          return item.charAt(0).toUpperCase() + item.slice(1);
        }
        return item;
      });
      result = result.join("");

      return {
        path: name,
        fnName: result,
      };
    })
    .map((item) => {
      const methods = ["get", "post", "put", "delete", "option"];
      const { path } = item;
      const apiObj = paths[path];
      const method = methods.find((m) => apiObj[m]);
      item.method = method;
      item.title = apiObj[method].summary.replace("\n", "");
      return item;
    });
}

// 编写内容
function createNkTp(apiList) {
  /*
    fnName: "error"
    method: "get"
    path: "/error"
    title: "error"
  */

  let tp = ``;
  apiList.forEach((apiObj) => {
    let { fnName, method, path, title } = apiObj;
    let file = "";
    // if (method !== "get" && method !== "post") {
    //   file = "file: true,";
    // }
    tp += `//  title: ${title}
    ${fnName}(data, method = "${method}", url = "${path}") {
      return service({
        url,
        method,
        data,
        ${file}
      });
    },`;
  });
  return `
    import service from "@/utils/http/index.js";
    export default {
        ${tp}
      }
  `;
}

// 生成文件
function writeText(reuslt) {
  fs.createWriteStream(SAVEPATH);
  var str = fs.readFileSync(SAVEPATH, "binary");
  str = reuslt;
  fs.writeFileSync(SAVEPATH, str, "utf8");
}

// 执行
const openApi = require("./static/neeked.openapi.json");

let data = parseData(openApi);

console.log(`一共${data.length}个API`);

let text = createNkTp(data);
writeText(text);

console.log("写入完成~");
// downloadFile(FILEURL, "./autoApi/static/openApi.json", () => {
//   const openApi = require("./static/openApi.json");
//
//   let data = parseData(openApi);
//
//   console.log(`一共${data.length}个API`);
//
//   let text = createNkTp(data);
//   writeText(text);
//
//   console.log("写入完成~");
// });
