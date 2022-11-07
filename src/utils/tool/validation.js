/*
 * @Date: 2022-06-14 10:59:14
 * @LastEditors: kinfai
 * @Description: 验证通用方法
 * @LastEditTime: 2022-07-23 10:12:40
 * @FilePath: \neekde-merchants\src\utils\tool\validation.js
 */
export default {
  /**
   * @description: 验证是否存在逗号 | _
   * @param {*} key 验证字符
   * @return {*} boolean
   */
  noUnderlineOrcomma(key) {
    key = String(key);

    // return key.includes("_") || key.includes(",");
    return key.includes("_");
  },
};
