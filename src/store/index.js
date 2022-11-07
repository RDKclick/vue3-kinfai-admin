/*
 * @Date: 2022-03-08 11:28:43
 * @LastEditors: kinfai
 * @Description: 账户个人信息 pinia
 * @LastEditTime: 2022-10-26 09:33:21
 * @FilePath: \wml-vue3-antd\src\store\index.js
 */
import { defineStore } from "pinia";
import api from "@/api/main.api.js";
import Cookies from "js-cookie";

export const useMainStore = defineStore({
    id: "mian",
    state: () => {
        return {
            userInfo: {},
            isLogin: false,
            // 国家列表
            countrys: [],
            // 客服列表
            csList: [],
            // menu / miniTree
            leftMenuStatus: "menu"
        };
    },
    getters: {
        domain(state) {
            return state.userInfo.domain || "";
        },
        csListExclude(state) {
            return state.csList.filter(item => item.snowflake_id !== state.userInfo.snowflake_id)
        }
    },
    actions: {
        // 获取用户信息
        async getUserInfo() {
            const infoRes = await api.userGetUserInfo();
            if (infoRes.code === 200) {
                this.userInfo = infoRes.data;
                this.isLogin = true;

                return infoRes;
            }
        },
        // 国家列表
        async getCommonCountry() {
            const res = await api.commonCountry({ num: 10000 });
            if (res.code === 200) {
                this.countrys = res.data.list;
            }

            return res;
        },
        // 客服列表
        async getCsList() {
            const res = await api.apiV1CompanyChatKefuList()
            if (res.code === 200) {
                this.csList = res.data
            }

            return res
        },
        // 全局一次性加载
        async getUnique() {
            await this.getUserInfo()
            await this.getCommonCountry()
            await this.getCsList()
        },
        // 修改菜单状态
        editMenuStatus(key) {
            if (key === 'menu' || key === "miniTree") {
                this.leftMenuStatus = key
            } else {
                this.leftMenuStatus = this.leftMenuStatus === 'menu' ? 'miniTree' : "menu"

            }
        },
        // 注销
        async logout() {
            const res = await api.userLogout();
            if (res.code === 200) {
                this.userInfo = {};
                this.isLogin = false;

                // 注销token
                localStorage.removeItem("token");
                localStorage.removeItem("refresh_token");
                Cookies.remove("isLogin");
                location.reload();
            }

            return res.code === 200;
        },
    },
});
