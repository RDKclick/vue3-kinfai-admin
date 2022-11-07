/*
 * @Date: 2022-03-07 18:02:21
 * @LastEditors: kinfai
 * @Description: 状态码
 * @LastEditTime: 2022-03-08 22:49:40
 * @FilePath: \need-ke\src\utils\http\codeStatus.js
 */
export default {
  //   401: () => {
  //     console.log("无权操作");
  //   },
  handleCode(code) {
    switch (code) {
      case 401:
        // eslint-disable-next-line no-console
        console.log("ok");
        break;
      default:
        // eslint-disable-next-line no-console
        console.log("error");
    }
  },
};
