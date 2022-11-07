import {inject, ref} from "vue";
import {message} from "ant-design-vue";

export default function useSimpleSubmit() {
    const $api = inject("$api")
    const loading = ref(false)

    // 提交请求方法
    const simpleSubmit = (requestFn) => {
        loading.value = true
        requestFn().then(res => {
            loading.value = false
            if(res.code === 200){
                message.success("修改成功!")
            }else{
                message.info("修改失败~")
            }
            return res
        })
    }

    return {
        $api,
        loading,
        simpleSubmit
    }
}
