<!--
 * @Date: 2022-07-05 08:52:13
 * @LastEditors: kinfai
 * @Description: 登录界面
 * @LastEditTime: 2022-07-05 11:25:07
 * @FilePath: \neekde-merchants\src\view\login\index.vue
-->
<template>
  <div class="g-box">
    <div class="g-login-box">
      <img :src="needkeIcon" :alt="needkeIcon" class="s-logo" />
      <h2>登录您的账号</h2>
      <account-login></account-login>
      <!-- <p class="wml-primary-link">手机号登录</p> -->
    </div>
    <p class="s-copyright">
      Copyright 2022 needke.com. All Rights Reserved.
      <br />
      粤ICP备16027817号-1
    </p>
  </div>
</template>

<script setup>
// import logo from "@/assets/logo.png";
import needkeIcon from "@/assets/image/needkeIcon.png";
import accountLogin from "./components/accountLogin.vue";
</script>

<style lang="scss" scoped>
.g-box {
  background: #f2f2f2;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-login-box {
  width: 483px;
  // height: 560px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 100);
  padding: 34px 36px;
  text-align: center;

  .s-logo {
    //width: 77px;
    height: 55px;
  }

  h2 {
    margin-top: 11px;
    font-weight: bold;
  }
}
.s-copyright {
  color: rgba(163, 166, 185, 100);
  font-size: 12px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
  position: absolute;
  bottom: 64px;
}
</style>
