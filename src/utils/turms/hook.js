/*
 * @Date: 2022-09-13 15:30:12
 * @LastEditors: kinfai
 * @Description: 使用turms
 * @LastEditTime: 2022-09-14 13:58:15
 * @FilePath: \neekde-merchants\src\utils\turms\hook.js
 */
import {inject, watch} from "vue";
import {useMainStore} from "@/store/index.js";
import pinia from "@/store/pinia.js";

export default function useTurms(watcher = false) {
    const initTurms = inject("initTrumsClient")
    const store = useMainStore(pinia)

    // 获取当前客服id
    const getTurmsId = () => store.userInfo.snowflake_id;

    // 等待 turms登录
    const awaitTurmsLogin = (turmsClient) => {
        let timer = null

        return new Promise(resolve => {
            timer = setInterval(() => {
                if (turmsClient.userService.isLoggedIn) {
                    clearInterval(timer)
                    resolve()
                }
            }, 500)
        })
    }

    // 返回全局唯一实例
    const getTurms = async (awaitLogin = true) => {
        const userId = getTurmsId()
        const token = localStorage.getItem("token")

        if (token && userId) {
            const turmsClient = await initTurms(userId, token)

            // 等待登录成功?
            awaitLogin && await awaitTurmsLogin(turmsClient)

            // 若开发模式,则暴漏 - turmsClient
            import.meta.env.DEV && (window.turmsClient = turmsClient)

            return turmsClient
        }
    }

    // 判断是否正常连接
    const isConnect = (speed = 30) => {
        return new Promise(async resolve => {
            let timer = setTimeout(() => resolve(false), speed * 1000)
            const turms = await getTurms(true)
            clearTimeout(timer)
            if (turms) resolve(turms)
        })
    }

    // 查看会话已读时间
    const getReadTime = async (targetIds = []) => {
        const turms = await getTurms()
        return turms.conversationService.queryPrivateConversations({targetIds})
            .then(res => {
                if (res.code === 1000) {
                    return res.data.map(item => Object.assign(item, {
                        readDateTimestamp: item.readDate.valueOf()
                    }))
                }

                return []
            }).catch(err => {
                console.log("错误")
                return []
            })
    }

    if (watcher) {
        watch(() => store.userInfo, (val) => {
            const token = localStorage.getItem("token")
            if (val.snowflake_id && token) {
                getTurms()
            }
        }, {
            immediate: true
        })
    }

    return {
        getTurms,
        getTurmsId,
        isConnect,
        getReadTime
    }
}
