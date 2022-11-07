/*
 * @Date: 2022-07-04 08:51:31
 * @LastEditors: kinfai
 * @Description: 信息提示
 * @LastEditTime: 2022-07-13 10:18:14
 * @FilePath: \neekde-merchants\src\hooks\curd\tipUtils.js
 */
import {Modal, message} from "ant-design-vue";
import {h, ref} from "vue";
import {Input} from "ant-design-vue";

export default function useTipUtils() {
    // input确认框
    const confirmInput = ({value = "", title = "提示"}) => {
        return new Promise((resolve, reject) => {
            const text = ref(value);
            Modal.confirm({
                title,
                content: () => {
                    return h("div", [
                        h(Input, {
                            value: text.value,
                            onInput: (e) => (text.value = e.target.value),
                        }),
                    ]);
                },
                onOk: () =>
                    new Promise((t, f) => {
                        if (text.value) {
                            resolve(text.value);
                            t();
                            return false;
                        }
                        message.info("请填写信息~");
                        f();
                    }),
            });
        });
    };

    // 自定义插槽
    const slotTip = ({dom, handleOk, value = ''}) => {
        const text = ref(value);

        Modal.confirm({
            title: '编辑',
            content: () => h(dom, {
                value: text.value,
                onInput: (e) => (text.value = e.target.value),
                onEnter: (e) => ("回车", e)
            }),
            onOk: () => new Promise((resolve, reject) => {
                handleOk ? handleOk(text.value, resolve) : resolve(text.value)
            }),
        });
    }

    // 删除红字确认框
    const confirmDel = ({
                            title = "删除提示",
                            firstTip = "确定删除",
                            delTarget,
                            handleOk = (close, reject) => close(),
                        }) => {
        const color = delTarget === "该目标" ? "balck" : "red";

        const children = []
        if (delTarget) {
            children.push(h(
                "span",
                {
                    style: `color: ${color}`,
                },
                delTarget
            ))
            children.push(h("span", "吗?"))
        }


        Modal.confirm({
            title,
            content: function () {
                return h("div", [
                    h("span", firstTip),
                    ...children,
                ]);
            },
            onOk: () => new Promise((resolve, reject) => handleOk(resolve, reject)),
        });
    };

    return {
        confirmInput,
        confirmDel,
        slotTip
    };
}
