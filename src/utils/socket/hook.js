/*
 * @Date: 2022-08-19 11:59:46
 * @LastEditors: kinfai
 * @Description: 使用
 * @LastEditTime: 2022-08-19 15:27:01
 * @FilePath: \neekde-merchants\src\utils\socket\hook.js
 */
import { inject, watch } from "vue";
import { useMainStore } from "@/store/index.js";
import pinia from "@/store/pinia.js";

export default function useSocket(watcher = false) {
    const initSocket = inject("initSocket")
    const store = useMainStore(pinia)

    const getSocket = () => {
        const { company_id, id } = store.userInfo;
        if (company_id && id) {
            const socket = initSocket(company_id, id)
            return socket
        }

        return false
    }


    if (watcher) {
        watch(() => store.userInfo, (val) => {
            if (val.id && val.company_id) {
                getSocket()
            }
        }, {
            immediate: true,
        })
    }


    return {
        getSocket
    }
}