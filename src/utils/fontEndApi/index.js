// 前端静态json文件

const DOMAIN = import.meta.env.MODE === 'production' ? 'https://company.needke.com/api/' : "http://192.168.2.20:7265/api/"

// 获取当前时间戳
const getTime = () => (new Date()).valueOf()

const fontEndFetch = (apiName, isNew = true) => {
    const time = isNew ? `?t=${getTime()}` : '';
    return fetch(`${DOMAIN}${apiName}.json${time}`)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

export default {
    // 留言
    leavingMobotInfo: () => {
        return fontEndFetch("leavingMobotInfo")
    },
    // 机器人开场白与常见问题
    showMobotInfo: () => {
        return fontEndFetch("showMobotInfo")
    }
}
