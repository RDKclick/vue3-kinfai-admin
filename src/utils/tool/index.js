/*
 * @Date: 2022-04-12 11:36:46
 * @LastEditors: kinfai
 * @Description: 项目工具函数
 * @LastEditTime: 2022-04-23 10:38:47
 * @FilePath: \neekde\src\utils\tool\index.js
 */
import {message} from "ant-design-vue";

export default {
    install(app) {
        app.provide("$utils", {
            copy(text) {
                let input = document.createElement("input");
                input.value = String(text);
                input.style.opacity = 0;
                document.body.appendChild(input);
                input.select();
                document.execCommand("Copy");
                input.remove();
            },
            /**
             * @author: vince.Liang
             * @function: 频繁操作防抖动公共函数
             * @data: 2019-3-27
             * @param {function} func 具体处理回调
             * @param {Number} wait 间隔时间
             * @param {Boolean} order true为最后一次执行，false为第一次执行
             * @return: undefined
             */
            debounce(func, wait, order = true) {
                let timer;
                return function () {
                    let _that = this;
                    let args = arguments;
                    if (order) {
                        // 最后一次触发执行
                        if (timer) clearTimeout(timer);
                        timer = setTimeout(() => {
                            func.call(_that, ...args);
                        }, wait);
                    } else {
                        // 第一次触发执行
                        if (timer) clearTimeout(timer);
                        let callNow = !timer;
                        timer = setTimeout(() => {
                            timer = null;
                        }, wait);
                        callNow && func.call(_that, ...args);
                    }
                };
            },
            /**
             * @function: 生成32位ID
             * @return:
             */
            guid(timestamp = true) {
                var curguid = "";
                for (var i = 1; i <= 32; i++) {
                    var id = Math.floor(Math.random() * 16.0).toString(16);
                    curguid += id;
                    if (i === 8 || i === 12 || i === 16 || i === 20) {
                        curguid += "";
                    }
                }

                timestamp && (curguid + new Date().getTime())

                return curguid
            },
            /**
             * @function: 生成指定区间随机数
             */
            randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            },
            /**
             * 随机生成六位颜色
             */
            randomColor() {
                return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
            },
            /**
             * 阻塞等待
             */
            awaiter(speed = 1000) {
                return new Promise(resolve => {
                    setTimeout(() => resolve(), speed)
                })
            }
        });
    },
};
