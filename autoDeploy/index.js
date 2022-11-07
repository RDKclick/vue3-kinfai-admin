/*
 * @Date: 2022-07-09 16:11:24
 * @LastEditors: kinfai
 * @Description: 自动部署
 * @LastEditTime: 2022-08-04 14:39:11
 * @FilePath: \neekde-merchants\autoDeploy\index.js
 * @version: 1.0
 * @Author: kinfai
 */
import inquirer from "inquirer";
import Client from "ssh2-sftp-client";
import fs from "fs";

import { webSites } from "./config/index.js";

// 获取站点选择
const getWebSites = () => {
  const list = new Set();
  webSites.forEach((website) => list.add(website.name));

  return [...list];
};

// 获取选中的站点
const geCheckedWebSite = (name) => {
  const target = webSites.find((item) => item.name === name);
  if (target) {
    return target;
  } else {
    console.error("异常了,快看看怎么回事~");
    process.exit();
  }
};

// 获取命令
const getCommand = async () => {
  const choices = getWebSites();
  const value = await inquirer.prompt([
    {
      type: "list",
      name: "project",
      message: "Which project do you want to deploy?",
      choices,
    },
    {
      type: "confirm",
      name: "backup",
      message: "Do you need a backup?",
    },
  ]);
  const target = geCheckedWebSite(value.project);
  return {
    isBackup: value.backup,
    website: target,
  };
};

// 生成时间
const $getTime = function (time, sign = false) {
  var date = null;
  if (time) {
    date = new Date(time);
  } else {
    date = new Date();
  }
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h < 10 ? "0" + h : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  if (sign) {
    return y + "-" + m + "-" + d;
  } else if (sign === false) {
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  } else {
    return y + "-" + m + "-" + d + "-" + h + "-" + minute + "-" + second;
  }
};

// 备份任务
const executeBackupTask = async (sftp, romotePath, backupPath) => {
  console.log("开始备份,请耐心等候~");
  const backupFileName = `${backupPath}/${$getTime(null, null)}`;
  await fs.promises.mkdir(backupFileName);

  await sftp.downloadDir(romotePath, backupFileName);
  console.log("备份完毕~");
};

// 上传文件
const executeUploadTask = async (sftp, localPath, romotePath) => {
  console.log("开始上传~");
  await sftp.uploadDir(localPath, romotePath);
  console.log("上传成功~");
};

// 读取指定目录下的文件夹
const readBackList = (backupPath) => {
  console.log(backupPath, "--");
  const files = fs.readdirSync(backupPath);
  return files;
};

// 询问用户回滚哪一个
const getBackFrom = (choices) => {
  console.log("list", choices);
  inquirer
    .prompt([
      {
        type: "list",
        name: "backUser",
        message: "Please select rollback file?",
        choices,
      },
    ])
    .then((value) => {
      console.log("选中的", value.backUser);
    });
};

// 主程序
const main = async () => {
  const { isBackup, website } = await getCommand();
  const { ssh, romotePath, localPath, backupPath } = website;

  // const list = readBackList(backupPath);
  // getBackFrom(list);
  const sftp = new Client();

  sftp
    .connect(ssh)
    .then(async () => {
      if (isBackup) {
        await executeBackupTask(sftp, romotePath, backupPath);
      }

      await executeUploadTask(sftp, localPath, romotePath);
    })
    .catch((err) => {
      console.error("报错了,去看看怎么回事吧~", err);
      process.exit();
    })
    .finally(() => {
      sftp.end(); // 断开连
    });
};

main();
