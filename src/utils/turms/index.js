/*
 * @Date: 2022-09-13 15:08:27
 * @LastEditors: kinfai
 * @Description: 使用trums
 * @LastEditTime: 2022-09-19 09:45:34
 * @FilePath: \neekde-merchants\src\utils\turms\index.js
 */
import TurmsClient from "turms-client-js";

export default {
    install(app) {
        let trumsClient

        // 初始化 trums客户端
        const initTrumsClient = async (userId, token) => {
            if (trumsClient) {
                return trumsClient
            }

            const url = import.meta.env.VITE_TURMS_SOCKET_URL
            trumsClient = new TurmsClient(url, 30 * 1000);

            // 公共监听
            trumsClient.notificationService.addNotificationListener(notification => {
                console.log("通知", notification)
            })
            trumsClient.messageService.addMessageListener(msg => {
                console.log('msg', msg)
            })

            // 登录
            await trumsClient.userService.login({
                accessToken: token,
                userId,
                identity: 2,
            }).catch(err => {
                console.log("错误", err)
            })

            window.trumsClient = trumsClient

            return trumsClient
        }

        app.provide("initTrumsClient", initTrumsClient)
        app.provide("$trums", trumsClient)
    }
}
