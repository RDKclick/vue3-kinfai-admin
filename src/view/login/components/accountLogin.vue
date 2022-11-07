<!--
 * @Date: 2022-07-05 09:50:05
 * @LastEditors: kinfai
 * @Description: 账号登录
 * @LastEditTime: 2022-08-05 11:12:16
 * @FilePath: \neekde-merchants\src\view\login\components\accountLogin.vue
-->
<template>
  <div>
    <a-form
      :model="userInfo"
      ref="loginFormRef"
      layout="vertical"
      :hideRequiredMark="true"
      :rules="rules"
    >
      <!-- label="账号" -->
      <a-form-item name="account">
        <template #label>
          <div class="g-error-label">
            账号
            <span class="s-error-tip" v-show="errInfo">
              <info-circle-outlined />
              {{ errInfo }}</span
            >
          </div>
        </template>
        <a-input v-model:value="userInfo.account" placeholder="输入"></a-input>
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input-password
          v-model:value="userInfo.password"
          placeholder="输入"
        ></a-input-password>
      </a-form-item>
      <div class="g-action">
        <a-checkbox v-model:checked="keep">记住密码</a-checkbox>
                <a href="#" class="wml-primary-link"></a>
        <!--        <a href="#" class="wml-primary-link">忘记密码</a>-->
      </div>
      <a-form-item>
        <a-button
          type="primary"
          class="s-btn"
          size="large"
          :loading="loading"
          @click="handleLogin"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { InfoCircleOutlined } from "@ant-design/icons-vue";
import Cookies from "js-cookie";
import systemConfig from "@/config/settings";
import { useEventListener } from "@vueuse/core";

const userInfo = reactive({
  account: "",
  password: "",
});

const keep = ref(false);
const isKeep = localStorage.getItem("keep");
const initKeep = () => {
  if (isKeep) {
    const { account, password } = JSON.parse(
      localStorage.getItem("accountInfo")
    );
    userInfo.account = account;
    userInfo.password = password;
    keep.value = true;
  }
};
const saveKeep = () => {
  if (keep.value) {
    localStorage.setItem("keep", true);
    localStorage.setItem("accountInfo", JSON.stringify(userInfo));
  } else {
    localStorage.removeItem("keep");
    localStorage.removeItem("accountInfo");
  }
};
initKeep();

const loginFormRef = ref();
const rules = {
  account: [
    {
      message: "请填写账号",
      required: true,
    },
  ],
  password: [
    {
      message: "请填写密码",
      required: true,
    },
  ],
};

const $api = inject("$api");
const errInfo = ref("");
const loading = ref(false);
const router = useRouter();
const handleLogin = () => {
  loginFormRef.value
    .validate()
    .then((values) => {
      loading.value = true;
      $api.apiV1CompanyLogin(values).then((res) => {
        loading.value = false;

        if (res.code === 200) {
          saveKeep();

          let { access_token, refresh_token } = res.data;
          localStorage.setItem("token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          Cookies.set("isLogin", "1", { expires: systemConfig.loginDate });
          router.push("/");

          message.success("登录成功~");
        } else {
          errInfo.value = res.msg;
        }
      });
    })
    .catch((err) => {
      const errorInfo = err.errorFields.shift();
      message.error(errorInfo.errors.shift());
    });
};

useEventListener(document, "keydown", (evt) => {
  if (evt.code === "Enter" && evt.key === "Enter") {
    handleLogin();
  }
});
</script>

<style lang="scss" scoped>
.g-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.s-btn {
  margin-top: 36px;
  width: 100%;
}

:deep(label[html-for="account"]) {
  display: block;
  width: 100%;
}

.s-error-tip {
  color: #f95b3d;
  text-align: right;
  float: right;
}

:deep(.ant-form-item-explain.ant-form-item-explain-error) {
  visibility: hidden;
}
</style>
