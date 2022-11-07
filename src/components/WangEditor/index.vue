<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        ref="tbRef"
    />
    <Editor
        :style="{ height, overflowY: 'hidden' }"
        v-model="countValue"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @customPaste="customPaste"
    />
  </div>
  <wml-file-space
      v-model:visible="fileSpaceVisible"
      v-if="fileSpaceVisible"
      @submit="handleReceiveFile"
      :maxChecked="1"
  ></wml-file-space>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import {onBeforeUnmount, ref, shallowRef, onMounted, computed} from "vue";
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import {DomEditor} from "@wangeditor/editor";

export default {
  components: {Editor, Toolbar},
  props: {
    value: {
      type: String,
      default: "<p>hello</p>",
    },
    height: {
      type: String,
      default: "500px",
    },
  },
  setup(props, {emit}) {
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

    // 文件空间
    const fileSpaceVisible = ref(false);
    let handleInsert = null;
    const handleReceiveFile = (fileList) => {
      handleInsert(fileList[0].url, fileList[0].url, fileList[0].url);
    };

    const tbRef = ref();
    onMounted(() => {
      console.log("表单头工具箱", tbRef.value, editorRef.value);
    });

    const toolbarConfig = {
      excludeKeys: ["uploadVideo", "insertVideo"],
    };
    const editorConfig = {
      placeholder: "请输入内容...",
      MENU_CONF: {
        uploadImage: {
          customBrowseAndUpload(insertFn) {
            // 自己选择文件
            // 自己上传文件，并得到图片 url alt href
            fileSpaceVisible.value = true;
            // 最后插入图片
            handleInsert = insertFn;
            // insertFn(url, alt, href);
          },
        },
      },

    };

    const customPaste = (editor, event) => {
      // 对粘贴的文本进行处理，然后返回处理后的结果
      // editorRef.value.cmd.do('insertHTML', pasteStr)
      // const html = e.clipboardData.getData('text/html')
      const text = event.clipboardData.getData('text/plain')
      // console.log("复制内容", html)
      // console.log("text", text.split('\n'))
      text.split('\n').forEach(p => {
        if(p){
          editor.insertText(p)
        }
      })
      return false
    }

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
      tbRef,
      editorRef,
      countValue,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      fileSpaceVisible,
      handleReceiveFile,
      customPaste
    };
  },
};
</script>
