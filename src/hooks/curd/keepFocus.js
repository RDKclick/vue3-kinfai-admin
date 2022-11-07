import {ref, onUnmounted, isRef} from "vue";


export default function useKeepFocus() {
    let focusDom = ref()
    // 是否聚焦ing
    const isFocusing = ref(false)

    let timer = null

    /**
     * 使用name,创造ref. 与 vue-ref功能一致.
     * 为了方便hook使用
     * @param name
     * @returns {*}
     */
    const createTarget = (name) => {
        const temp = {
            [name]: ref()
        }

        return temp[name]
    }

    /**
     * 开始聚焦 refDom
     * @returns ref
     */
    const startFocus = (domName) => {
        clearInterval(timer)

        /**
         * 1.string则创建ref
         * 2.ref - 直接使用
         * 3.默认使用提供的 focusRef
         */
        if (domName && typeof domName === 'string') {
            focusDom = createTarget(domName)
        } else if (domName && isRef(domName)) {
            focusDom = domName
        }

        timer = setInterval(() => {
            if (focusDom.value) {
                focusDom.value.focus()
                !isFocusing.value && (isFocusing.value = true)
            }
        }, 500)

        return focusDom
    }

    /**
     * 停止聚焦, 去焦,并修改状态
     */
    const stopFocus = () => {
        timer && clearInterval(timer)

        focusDom.value && focusDom.value.blur()
        isFocusing.value = false
    }

    onUnmounted(() => {
        stopFocus()
    })

    return {
        focusDom,
        isFocusing,
        startFocus,
        stopFocus
    }
}
