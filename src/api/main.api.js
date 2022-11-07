/*
 * @Date: 2022-06-01 13:57:59
 * @LastEditors: kinfai
 * @Description: 公司网站
 * @LastEditTime: 2022-08-04 16:25:37
 * @FilePath: \neekde-merchants\src\api\main.api.js
 */
import service from "@/utils/http/index.js";

export default {
    // 登录
    userLogin(data, method = "post", url = "/api/v1/company/login") {
        return service({
            url,
            method,
            data,
        });
    },
    // 个人信息
    userGetUserInfo(data, method = "get", url = "/api/v1/company/userinfo") {
        return service({
            url,
            method,
            data,
        });
    },
    // 国家列表
    commonCountry(data, method = "get", url = "/api/v1/common/countrys") {
        return service({
            url,
            method,
            data,
        });
    },
    //  title: 客服列表
    apiV1CompanyChatKefuList(data, method = "get", url = "/api/v1/company/chat/kefu/list") {
        return service({
            url,
            method,
            data,

        });
    },
    // 注销
    userLogout(data, method = "get", url = "/api/v1/company/logout") {
        return service({
            url,
            method,
            data,
        });
    },
    uploadFile(data, method = "post", url = "/api/v1/company/ueditor/upload") {
        return service({
            url,
            method,
            data,
            file: true,
        });
    },
    apiV1CompanyProductAction(
        data,
        method = "put",
        url = "/api/v1/company/product/action"
    ) {
        return service({
            url,
            method,
            data,
        });
    },
    apiV1CompanyProductUpdate(
        data,
        method = "put",
        url = "/api/v1/company/product/update"
    ) {
        return service({
            url,
            method,
            data,
        });
    },
    apiV1CompanyBasesetUpdate(
        data,
        method = "put",
        url = "/api/v1/company/baseset/update"
    ) {
        return service({
            url,
            method,
            data,
        });
    },
    apiV1CompanyAlonePageEdit(
        data,
        method = "get",
        url = "/api/v1/company/alone/page/edit"
    ) {
        return service({
            url,
            method,
            data,
        });
    },
    //  title: 文件列表 - 修改等待超时时间为100秒
    apiV1CompanyUeditorList(data, method = "get", url = "/api/v1/company/ueditor/list") {
        return service({
            url,
            method,
            data,
            timeout: 100000
        });
    },
};
