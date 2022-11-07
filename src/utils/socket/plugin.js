/*
 * @Date: 2022-08-19 11:38:18
 * @LastEditors: kinfai
 * @Description:
 * @LastEditTime: 2022-09-13 15:00:49
 * @FilePath: \neekde-merchants\src\utils\socket\plugin.js
 */
import {message, notification} from "ant-design-vue";

export default {
    install(app) {
        let socket;

        // 全局消息提示
        const msg = data => {
            console.log("广播体操", data)
            if (data.core_type === "message") {
                const {context} = data
                // message.info(context)
                notification.open({
                    message: "询盘",
                    description: context,
                    duration: 0,
                })
            }

            if (data.core_type === "notice") {
                const {title, context} = data
                notification.open({
                    message: title,
                    description: context,
                    duration: 35,
                });
            }
        }

        // 判断用户,是首次连接还是刷新续连
        let is_login = false
        console.log(window.name === "", "已授权")
        if (window.name === "") {
            is_login = true
            window.name = 'isReload'
        } else {
            is_login = false
        }

        const initSocket = (companyId, userId) => {
            const config = {
                secure: true,
                path: "/needke",
                transports: ["websocket"],
                query: {
                    ident: "company",
                    identid: companyId,
                    device: "web",
                    // 统计登录
                    is_login,
                },
            };

            if (socket) {
                return socket
            }

            socket = io.connect(import.meta.env.VITE_SOCKET_URL, config);

            socket.on("connect", () => {
                socket.emit("push-msg", {userId, msg: "发送消息...."}); // 向服务端发送消息
            });

            /**
             * 接收广播 --- 全局处理
             */
            socket.on("broadcast", function (data) {
                msg(data)
            });

            socket.on("disconnect", function () {
                console.log("W-socket 下线了");
            });

            return socket
        };

        app.provide("initSocket", initSocket)
        app.provide("$socket", socket)
    }
}
