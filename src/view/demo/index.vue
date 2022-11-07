<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="countValue"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, computed } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default {
  components: { Editor, Toolbar },
  props: {
    value: {
      type: String,
      default: "<p>hello</p>",
    },
  },
  setup(props, { emit }) {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    const countValue = computed({
      get() {
        return props.value;
      },
      set(val) {
        emit("update:value", val);
      },
    });

    const toolbarConfig = {};
    const editorConfig = {
      placeholder: "请输入内容...",
      readOnly: true,
      MENU_CONF: {
        uploadImage: {
          server: "/api/upload", // form-data fieldName ，默认值 'wangeditor-uploaded-image'
          fieldName: "your-custom-name",

          // 单个文件的最大体积限制，默认为 2M
          maxFileSize: 1 * 1024 * 1024, // 1M

          // 最多可上传几个文件，默认为 100
          maxNumberOfFiles: 10,

          // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
          allowedFileTypes: ["image/*"],

          // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
          meta: {
            token: "xxx",
            otherKey: "yyy",
          },

          // 将 meta 拼接到 url 参数中，默认 false
          metaWithUrl: false,

          // 自定义增加 http  header
          headers: {
            Accept: "text/x-json",
            otherKey: "xxx",
          },

          // 跨域是否传递 cookie ，默认为 false
          withCredentials: true,

          // 超时时间，默认为 10 秒
          timeout: 5 * 1000, // 5 秒
        },
      },
    };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };

    return {
      editorRef,
      countValue,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
    };
  },
};
</script>
