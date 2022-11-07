
    import service from "@/utils/http/index.js";
    export default {
        //  title: 货币列表
    apiV1CommonCurrencys(data, method = "get", url = "/api/v1/common/currencys") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品列表
    apiV1CompanyProductList(data, method = "get", url = "/api/v1/company/product/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 审核原因
    apiV1CompanyExamineView(data, method = "get", url = "/api/v1/company/examine/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品分类
    apiV1CompanyCategoryList(data, method = "get", url = "/api/v1/company/category/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 搜索产品分类
    apiV1CompanyCategorySearch(data, method = "get", url = "/api/v1/company/category/search") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品删除
    apiV1CompanyProductDelete(data, method = "delete", url = "/api/v1/company/product/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品编辑
    apiV1CompanyProductEdit(data, method = "get", url = "/api/v1/company/product/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取套餐信息
    apiV1CommonGlobalPackageInfo(data, method = "get", url = "/api/v1/common/global/packageInfo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: Common
    apiV1CommonIndex(data, method = "get", url = "/api/v1/common/index") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 省列表
    apiV1CommonProvinces(data, method = "get", url = "/api/v1/common/provinces") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 国家列表
    apiV1CommonCountrys(data, method = "get", url = "/api/v1/common/countrys") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 市列表
    apiV1CommonCitys(data, method = "get", url = "/api/v1/common/citys") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品批量操作
    apiV1CompanyProductAction(data, method = "put", url = "/api/v1/company/product/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 设置分类
    apiV1CompanyProductCategory(data, method = "put", url = "/api/v1/company/product/category") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品更新
    apiV1CompanyProductUpdate(data, method = "put", url = "/api/v1/company/product/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品分类详情
    apiV1CompanyCategoryView(data, method = "get", url = "/api/v1/company/category/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取所有的模板
    apiV1CommonGlobalListTpls(data, method = "get", url = "/api/v1/common/global/listTpls") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取所有的套餐
    apiV1CommonGlobalListPackages(data, method = "get", url = "/api/v1/common/global/listPackages") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取所有的语言站点
    apiV1CommonGlobalListSites(data, method = "get", url = "/api/v1/common/global/listSites") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品新增
    apiV1CompanyProductAdd(data, method = "post", url = "/api/v1/company/product/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 刷新token
    apiV1CompanyRefresh_token(data, method = "get", url = "/api/v1/company/refresh_token") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 登陆
    apiV1CompanyLogin(data, method = "post", url = "/api/v1/company/login") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 首页
    apiV1CompanyHome(data, method = "get", url = "/api/v1/company/home") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 退出
    apiV1CompanyLogout(data, method = "get", url = "/api/v1/company/logout") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 站点列表
    apiV1CompanySites(data, method = "get", url = "/api/v1/company/sites") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件列表
    apiV1CompanyUeditorList(data, method = "get", url = "/api/v1/company/ueditor/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件上传
    apiV1CompanyUeditorUpload(data, method = "post", url = "/api/v1/company/ueditor/upload") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 个人信息编辑
    apiV1CompanyUserinfo(data, method = "get", url = "/api/v1/company/userinfo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 违规信息列表
    apiV1CompanyViolationList(data, method = "get", url = "/api/v1/company/violation/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业信息
    apiV1CompanyInfo(data, method = "get", url = "/api/v1/company/info") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 个人信息更新
    apiV1CompanyUserinfoUpdate(data, method = "put", url = "/api/v1/company/userinfo/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件上传配置
    apiV1CompanyUeditorConfig(data, method = "get", url = "/api/v1/company/ueditor/config") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件删除
    apiV1CompanyUeditorDelete(data, method = "delete", url = "/api/v1/company/ueditor/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 基础设置更新
    apiV1CompanyBasesetUpdate(data, method = "put", url = "/api/v1/company/baseset/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 基础设置编辑
    apiV1CompanyBasesetEdit(data, method = "get", url = "/api/v1/company/baseset/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 关于我们编辑
    apiV1CompanyAboutEdit(data, method = "get", url = "/api/v1/company/about/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 关于我们更新
    apiV1CompanyAboutUpdate(data, method = "put", url = "/api/v1/company/about/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: whatsapp编辑
    apiV1CompanyWhatsappEdit(data, method = "get", url = "/api/v1/company/whatsapp/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 证书列表
    apiV1CompanyCertificateList(data, method = "get", url = "/api/v1/company/certificate/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: whatsapp更新
    apiV1CompanyWhatsappUpdate(data, method = "put", url = "/api/v1/company/whatsapp/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 证书删除
    apiV1CompanyCertificateDelete(data, method = "delete", url = "/api/v1/company/certificate/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 证书添加
    apiV1CompanyCertificateAdd(data, method = "post", url = "/api/v1/company/certificate/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑视频
    apiV1CompanyVideoEdit(data, method = "get", url = "/api/v1/company/video/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 更新视频
    apiV1CompanyVideoUpdate(data, method = "put", url = "/api/v1/company/video/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 社交地址编辑
    apiV1CompanySnsEdit(data, method = "get", url = "/api/v1/company/sns/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业相册删除
    apiV1CompanyAlbumDelete(data, method = "delete", url = "/api/v1/company/album/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客列表
    apiV1CompanyBlogList(data, method = "get", url = "/api/v1/company/blog/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看博客审核
    apiV1CompanyBlogExamine(data, method = "get", url = "/api/v1/company/blog/examine") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业相册添加
    apiV1CompanyAlbumAdd(data, method = "post", url = "/api/v1/company/album/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑博客
    apiV1CompanyBlogEdit(data, method = "get", url = "/api/v1/company/blog/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业相册列表
    apiV1CompanyAlbumList(data, method = "get", url = "/api/v1/company/album/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘列表
    apiV1CompanyInquiryList(data, method = "get", url = "/api/v1/company/inquiry/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 社交地址更新
    apiV1CompanySnsUpdate(data, method = "put", url = "/api/v1/company/sns/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客批量操作
    apiV1CompanyBlogAction(data, method = "put", url = "/api/v1/company/blog/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加博客
    apiV1CompanyBlogAdd(data, method = "post", url = "/api/v1/company/blog/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 更新博客
    apiV1CompanyBlogUpdate(data, method = "put", url = "/api/v1/company/blog/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘操作
    apiV1CompanyInquiryAction(data, method = "put", url = "/api/v1/company/inquiry/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘查看
    apiV1CompanyInquiryView(data, method = "get", url = "/api/v1/company/inquiry/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件上传配置
    apiV1AdminUeditorConfig(data, method = "get", url = "/api/v1/admin/ueditor/config") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件上传
    apiV1AdminUeditorUpload(data, method = "post", url = "/api/v1/admin/ueditor/upload") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件列表
    apiV1AdminUeditorList(data, method = "get", url = "/api/v1/admin/ueditor/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 文件删除
    apiV1AdminUeditorDelete(data, method = "delete", url = "/api/v1/admin/ueditor/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加分类
    apiV1AdminProductCategoryStore(data, method = "post", url = "/api/v1/admin/product-category/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 分类列表
    apiV1AdminProductCategoryList(data, method = "get", url = "/api/v1/admin/product-category/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改分类
    apiV1AdminProductCategoryModify(data, method = "post", url = "/api/v1/admin/product-category/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除任务
    apiV1AdminProductCategoryDelete(data, method = "post", url = "/api/v1/admin/product-category/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 测试
    apiV1AdminCompanyTest(data, method = "get", url = "/api/v1/admin/company/test") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 供应商列表
    apiV1AdminCompanyList(data, method = "get", url = "/api/v1/admin/company/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加供应商
    apiV1AdminCompanyStore(data, method = "post", url = "/api/v1/admin/company/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 账号管理列表
    apiV1AdminCompanyAdminList(data, method = "get", url = "/api/v1/admin/company/adminList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 重置密码
    apiV1AdminCompanyRestPwd(data, method = "get", url = "/api/v1/admin/company/restPwd") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 服务概括
    apiV1AdminCompanySurveyList(data, method = "get", url = "/api/v1/admin/company/surveyList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看公司详情
    apiV1AdminCompanyShowDetail(data, method = "get", url = "/api/v1/admin/company/showDetail") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改资料
    apiV1AdminCompanyModify(data, method = "post", url = "/api/v1/admin/company/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 延长使用时间
    apiV1AdminCompanyStoreSurvey(data, method = "post", url = "/api/v1/admin/company/storeSurvey") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 站点资料
    apiV1AdminCompanySiteList(data, method = "get", url = "/api/v1/admin/company/siteList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看公司 FTP&MYSQL 信息
    apiV1AdminCompanySiteVps(data, method = "get", url = "/api/v1/admin/company/siteVps") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 登陆
    apiV1AdminLogin(data, method = "post", url = "/api/v1/admin/login") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 退出
    apiV1AdminLogout(data, method = "get", url = "/api/v1/admin/logout") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 供应商搜索
    apiV1CommonGlobalSearchCompany(data, method = "get", url = "/api/v1/common/global/searchCompany") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 国家站点
    apiV1CommonGlobalCountrysList(data, method = "get", url = "/api/v1/common/global/countrysList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取一级分类,行业选择
    apiV1CommonGlobalListCategorys(data, method = "get", url = "/api/v1/common/global/listCategorys") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业信息
    apiV1CompanyInfomationInfomation(data, method = "get", url = "/api/v1/company/infomation/infomation") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品违规列表
    apiV1CompanyInfomationProductIllegal(data, method = "get", url = "/api/v1/company/infomation/productIllegal") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客违规列表
    apiV1CompanyInfomationBlogIllegal(data, method = "get", url = "/api/v1/company/infomation/blogIllegal") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 服务概况
    apiV1CompanyInfomationService(data, method = "get", url = "/api/v1/company/infomation/service") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 分类建议处理
    apiV1AdminProductCategoryHandleCategoryProposal(data, method = "post", url = "/api/v1/admin/product-category/handleCategoryProposal") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 分类建议列表
    apiV1AdminProductCategoryProposalList(data, method = "get", url = "/api/v1/admin/product-category/proposalList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品详情
    apiV1AdminProductView(data, method = "get", url = "/api/v1/admin/product/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看建议内容
    apiV1AdminProductCategoryShowCategoryProposal(data, method = "get", url = "/api/v1/admin/product-category/showCategoryProposal") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品批量操作
    apiV1AdminProductAction(data, method = "put", url = "/api/v1/admin/product/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品列表
    apiV1AdminProductList(data, method = "get", url = "/api/v1/admin/product/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品违规详情
    apiV1AdminProductIllegalView(data, method = "get", url = "/api/v1/admin/productIllegal/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客详情
    apiV1AdminCompanyBlogView(data, method = "get", url = "/api/v1/admin/companyBlog/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客列表
    apiV1AdminCompanyBlogList(data, method = "get", url = "/api/v1/admin/companyBlog/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客批量操作
    apiV1AdminCompanyBlogAction(data, method = "put", url = "/api/v1/admin/companyBlog/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 推送询盘列表
    apiV1AdminInquiryPushInquiryList(data, method = "get", url = "/api/v1/admin/inquiry/pushInquiryList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘列表
    apiV1AdminInquiryInquiryList(data, method = "get", url = "/api/v1/admin/inquiry/inquiryList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加推送询盘
    apiV1AdminInquiryStorePushInquiry(data, method = "post", url = "/api/v1/admin/inquiry/storePushInquiry") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客违规详情
    apiV1AdminCompanyBlogIllegalView(data, method = "get", url = "/api/v1/admin/companyBlogIllegal/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改状态(上下架)
    apiV1AdminCompanyUpdateStatus(data, method = "post", url = "/api/v1/admin/company/updateStatus") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 发送验证码
    apiV1CommonSendCode(data, method = "get", url = "/api/v1/common/sendCode") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改密码
    apiV1CompanyChangePassword(data, method = "get", url = "/api/v1/company/changePassword") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加视频
    apiV1CompanyVideoAdd(data, method = "post", url = "/api/v1/company/video/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 视频列表
    apiV1CompanyVideoList(data, method = "get", url = "/api/v1/company/video/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看视频审核
    apiV1CompanyVideoExamine(data, method = "get", url = "/api/v1/company/video/examine") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 视频批量操作
    apiV1CompanyVideoAction(data, method = "put", url = "/api/v1/company/video/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取OSS token
    apiV1CompanyUeditorGetOssToken(data, method = "get", url = "/api/v1/company/ueditor/getOssToken") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取OSS token
    apiV1AdminUeditorGetOssToken(data, method = "get", url = "/api/v1/admin/ueditor/getOssToken") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 市场调研发现新关键字
    apiV1CommonGoogleadsGetKeywordPlanner(data, method = "get", url = "/api/v1/common/googleads/getKeywordPlanner") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 扩展字段列表
    apiV1CompanyAloneExtendList(data, method = "get", url = "/api/v1/company/alone/extend/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 扩展字段编辑
    apiV1CompanyAloneExtendEdit(data, method = "get", url = "/api/v1/company/alone/extend/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 扩展字段编辑
    apiV1CompanyAloneExtendUpdate(data, method = "put", url = "/api/v1/company/alone/extend/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 栏目列表
    apiV1CompanyAloneColumnList(data, method = "get", url = "/api/v1/company/alone/column/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 栏目添加
    apiV1CompanyAloneColumnAdd(data, method = "post", url = "/api/v1/company/alone/column/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 栏目更新
    apiV1CompanyAloneColumnUpdate(data, method = "put", url = "/api/v1/company/alone/column/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 栏目操作
    apiV1CompanyAloneColumnAction(data, method = "put", url = "/api/v1/company/alone/column/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 单页内容添加
    apiV1CompanyAlonePageAdd(data, method = "post", url = "/api/v1/company/alone/page/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 单页内容列表
    apiV1CompanyAlonePageList(data, method = "get", url = "/api/v1/company/alone/page/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 单页面操作
    apiV1CompanyAlonePageAction(data, method = "put", url = "/api/v1/company/alone/page/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 单页内容更新
    apiV1CompanyAlonePageUpdate(data, method = "put", url = "/api/v1/company/alone/page/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 安装之后的任务初始化
    apiV1CommonSpringCompanyInstallInitQueueData(data, method = "get", url = "/api/v1/common/spring/companyInstall/initQueueData") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 测试
    apiV1AdminCompanyNotifyInstall(data, method = "get", url = "/api/v1/admin/company/notifyInstall") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 管理员删除
    apiV1AdminAdminDelete(data, method = "delete", url = "/api/v1/admin/admin/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 角色操作
    apiV1AdminRoleAction(data, method = "put", url = "/api/v1/admin/role/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 管理员操作
    apiV1AdminAdminAction(data, method = "put", url = "/api/v1/admin/admin/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 管理员列表
    apiV1AdminAdminList(data, method = "get", url = "/api/v1/admin/admin/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 管理员更新
    apiV1AdminAdminUpdate(data, method = "put", url = "/api/v1/admin/admin/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 角色列表
    apiV1AdminRoleList(data, method = "get", url = "/api/v1/admin/role/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 角色添加
    apiV1AdminRoleAdd(data, method = "post", url = "/api/v1/admin/role/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 角色更新
    apiV1AdminRoleUpdate(data, method = "put", url = "/api/v1/admin/role/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 角色编辑
    apiV1AdminRoleEdit(data, method = "get", url = "/api/v1/admin/role/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 管理员添加
    apiV1AdminAdminAdd(data, method = "post", url = "/api/v1/admin/admin/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 权限列表
    apiV1AdminPermissionsList(data, method = "get", url = "/api/v1/admin/permissions/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 权限添加
    apiV1AdminPermissionsAdd(data, method = "post", url = "/api/v1/admin/permissions/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 权限更新
    apiV1AdminPermissionsUpdate(data, method = "put", url = "/api/v1/admin/permissions/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 部门操作
    apiV1AdminPermissionsAction(data, method = "put", url = "/api/v1/admin/permissions/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 部门列表
    apiV1AdminDepartmentList(data, method = "get", url = "/api/v1/admin/department/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 部门更新
    apiV1AdminDepartmentUpdate(data, method = "put", url = "/api/v1/admin/department/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 部门添加
    apiV1AdminDepartmentAdd(data, method = "post", url = "/api/v1/admin/department/add") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 部门操作
    apiV1AdminDepartmentAction(data, method = "put", url = "/api/v1/admin/department/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 发送询盘远程接口
    apiV1CommonInquirySendInquiry(data, method = "post", url = "/api/v1/common/inquiry/sendInquiry") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品数据
    apiV1CompanyDataProductList(data, method = "get", url = "/api/v1/company/data/product/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 访客数量
    apiV1CompanyDataVisitorVisitorCount(data, method = "get", url = "/api/v1/company/data/visitor/visitorCount") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 粉丝柱状图
    apiV1CompanyDataFansBarChart(data, method = "get", url = "/api/v1/company/data/fans/barChart") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 博客数据
    apiV1CompanyDataBlogList(data, method = "get", url = "/api/v1/company/data/blog/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 访客柱状图
    apiV1CompanyDataVisitorBarChart(data, method = "get", url = "/api/v1/company/data/visitor/barChart") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 视频数据
    apiV1CompanyDataVideoList(data, method = "get", url = "/api/v1/company/data/video/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 粉丝数量
    apiV1CompanyDataFansCount(data, method = "get", url = "/api/v1/company/data/fans/count") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 主站列表
    apiV1AdminMasterSiteList(data, method = "get", url = "/api/v1/admin/masterSite/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加主站
    apiV1AdminMasterSiteStore(data, method = "post", url = "/api/v1/admin/masterSite/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改主站
    apiV1AdminMasterSiteModify(data, method = "post", url = "/api/v1/admin/masterSite/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除操作
    apiV1AdminMasterSiteDelete(data, method = "post", url = "/api/v1/admin/masterSite/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 保存更新
    apiV1AdminB2bBaseSetModify(data, method = "post", url = "/api/v1/admin/b2bBaseSet/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看设置
    apiV1AdminB2bBaseSetShow(data, method = "get", url = "/api/v1/admin/b2bBaseSet/show") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取社交类型列表
    apiV1CommonGlobalListSns(data, method = "get", url = "/api/v1/common/global/listSns") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 单页内容编辑
    apiV1CompanyAlonePageEdit(data, method = "get", url = "/api/v1/company/alone/page/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 套餐列表
    apiV1AdminCompanyAdminPackageList(data, method = "get", url = "/api/v1/admin/companyAdminPackage/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 禁用/启用
    apiV1AdminCompanyAdminPackageDisableOrEnable(data, method = "post", url = "/api/v1/admin/companyAdminPackage/disableOrEnable") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 创建
    apiV1AdminCompanyAdminPackageStore(data, method = "post", url = "/api/v1/admin/companyAdminPackage/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改
    apiV1AdminCompanyAdminPackageModify(data, method = "post", url = "/api/v1/admin/companyAdminPackage/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 列表(无分页)
    apiV1AdminGlobalSiteList(data, method = "get", url = "/api/v1/admin/globalSite/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 验证码列表
    apiV1AdminSmsList(data, method = "get", url = "/api/v1/admin/sms/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 交易欺诈中心
    apiV1AdminComplaintTransactionList(data, method = "get", url = "/api/v1/admin/complaint/transactionList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 知识产权投诉列表
    apiV1AdminComplaintKnowledgeList(data, method = "get", url = "/api/v1/admin/complaint/knowledgeList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 处理投诉
    apiV1AdminComplaintHandle(data, method = "post", url = "/api/v1/admin/complaint/handle") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 访客记录
    apiV1CommonCompanyVisitor(data, method = "get", url = "/api/v1/common/company/visitor") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘数据
    apiV1CompanyInquiryData(data, method = "get", url = "/api/v1/company/inquiry/data") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 消息通知操作
    apiV1CompanyNoticeMessageAction(data, method = "put", url = "/api/v1/company/notice/message/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 消息通知列表
    apiV1CompanyNoticeMessageList(data, method = "get", url = "/api/v1/company/notice/message/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 公告操作
    apiV1CompanyNoticeAction(data, method = "put", url = "/api/v1/company/notice/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 公告列表
    apiV1CompanyNoticeList(data, method = "get", url = "/api/v1/company/notice/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 分类建议
    apiV1CompanyCategoryProposal(data, method = "post", url = "/api/v1/company/category/proposal") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 列表
    apiV1AdminDevopsCmsTemplateList(data, method = "get", url = "/api/v1/admin/devops/cmsTemplate/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取同步任务属性
    apiV1CommonGlobalGetTaskPropertys(data, method = "get", url = "/api/v1/common/global/getTaskPropertys") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加模板
    apiV1AdminDevopsCmsTemplateStore(data, method = "post", url = "/api/v1/admin/devops/cmsTemplate/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改模板
    apiV1AdminDevopsCmsTemplateModify(data, method = "post", url = "/api/v1/admin/devops/cmsTemplate/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 重新投递任务
    apiV1AdminDevopsSynchTasksDelivery(data, method = "post", url = "/api/v1/admin/devops/synchTasks/delivery") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加任务
    apiV1AdminDevopsSynchTasksStore(data, method = "post", url = "/api/v1/admin/devops/synchTasks/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 列表
    apiV1AdminDevopsSynchTasksList(data, method = "get", url = "/api/v1/admin/devops/synchTasks/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除任务
    apiV1AdminDevopsSynchTasksDelete(data, method = "post", url = "/api/v1/admin/devops/synchTasks/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 上下架
    apiV1AdminDevopsCmsTemplateEnableOrDisable(data, method = "post", url = "/api/v1/admin/devops/cmsTemplate/enableOrDisable") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除推送
    apiV1AdminMarketingDelete(data, method = "post", url = "/api/v1/admin/marketing/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 推送历史记录
    apiV1AdminMarketingHistoryList(data, method = "get", url = "/api/v1/admin/marketing/historyList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加推送
    apiV1AdminMarketingStore(data, method = "post", url = "/api/v1/admin/marketing/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 推送列表
    apiV1AdminMarketingPushList(data, method = "get", url = "/api/v1/admin/marketing/pushList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 访客记录
    apiV1CommonVisitor(data, method = "get", url = "/api/v1/common/visitor") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加公告
    apiV1AdminNoticeNoticeStore(data, method = "post", url = "/api/v1/admin/notice/notice/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 公告列表
    apiV1AdminNoticeNoticeList(data, method = "get", url = "/api/v1/admin/notice/notice/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取通知公告- 通知列表类型
    apiV1CommonGlobalMessageTypeList(data, method = "get", url = "/api/v1/common/global/messageTypeList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 通知列表
    apiV1AdminNoticeMessageList(data, method = "get", url = "/api/v1/admin/notice/message/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: google授权回调
    apiV1CommonGoogleCallback(data, method = "get", url = "/api/v1/common/google/callback") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: google授权地址
    apiV1CommonGoogleOauth(data, method = "get", url = "/api/v1/common/google/oauth") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: google授权刷新
    apiV1CommonGoogleRefresh_token(data, method = "get", url = "/api/v1/common/google/refresh_token") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 取消公告
    apiV1AdminNoticeNoticeCancel(data, method = "post", url = "/api/v1/admin/notice/notice/cancel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑公告
    apiV1AdminNoticeNoticeModify(data, method = "post", url = "/api/v1/admin/notice/notice/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品添加
    apiV1SyncProductCategoryHandle(data, method = "post", url = "/api/v1/sync/productCategory/handle") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 刷新token
    apiV1ShopRefresh_token(data, method = "get", url = "/api/v1/shop/refresh_token") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品更新
    apiV1SyncProductModify(data, method = "put", url = "/api/v1/sync/product/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品添加
    apiV1SyncProductStore(data, method = "post", url = "/api/v1/sync/product/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 二、三级分类列表
    apiV1ShopSecondList(data, method = "get", url = "/api/v1/shop/second/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: /api/v1/customer
    apiV1Customer(data, method = "get", url = "/api/v1/customer") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 首页
    apiV1Shop(data, method = "get", url = "/api/v1/shop") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 首页列表
    apiV1ShopHomeList(data, method = "get", url = "/api/v1/shop/home/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 注册
    apiV1ShopRegister(data, method = "post", url = "/api/v1/shop/register") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 登陆
    apiV1ShopLogin(data, method = "post", url = "/api/v1/shop/login") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 视频上传回调通知
    apiV1CommonVideoUploadCallback(data, method = "post", url = "/api/v1/common/video/uploadCallback") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取google token
    apiV1CommonGoogleToken(data, method = "get", url = "/api/v1/common/google/token") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 视频详情
    apiV1CommonVideoGetDetails(data, method = "get", url = "/api/v1/common/video/getDetails") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘访客趋势
    apiV1CompanyInquiryTrend(data, method = "get", url = "/api/v1/company/inquiry/trend") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 数据统计
    apiV1CompanyStatistics(data, method = "get", url = "/api/v1/company/statistics") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 公司宣传视频编辑
    apiV1CompanyVideohomeEdit(data, method = "get", url = "/api/v1/company/videohome/edit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 公司宣传视频更新
    apiV1CompanyVideohomeUpdate(data, method = "put", url = "/api/v1/company/videohome/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 彻底删除模板
    apiV1AdminDevopsCmsTemplateDelete(data, method = "post", url = "/api/v1/admin/devops/cmsTemplate/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取菜单
    apiV1AdminMenu(data, method = "get", url = "/api/v1/admin/menu") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 列表
    apiV1AdminDevopsSiteVpsList(data, method = "get", url = "/api/v1/admin/devops/siteVps/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 列表(无分页)
    apiV1AdminDevopsSiteB2bList(data, method = "get", url = "/api/v1/admin/devops/siteB2b/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取所有的行业站点site_Master
    apiV1CommonGlobalListMasterSites(data, method = "get", url = "/api/v1/common/global/listMasterSites") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业宣传视频违规详情
    apiV1AdminHomeVideoIllegalView(data, method = "get", url = "/api/v1/admin/homeVideoIllegal/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品视频违规详情
    apiV1AdminCompanyVideoIllegalView(data, method = "get", url = "/api/v1/admin/companyVideoIllegal/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业宣传视频列表
    apiV1AdminHomeVideoList(data, method = "get", url = "/api/v1/admin/homeVideo/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品视频批量操作
    apiV1AdminCompanyVideAction(data, method = "post", url = "/api/v1/admin/companyVide/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业宣传视频批量操作
    apiV1AdminHomeVideoAction(data, method = "post", url = "/api/v1/admin/homeVideo/action") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品视频列表
    apiV1AdminCompanyVideList(data, method = "get", url = "/api/v1/admin/companyVide/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 知识产权举报
    apiV1CommonReportIpr(data, method = "post", url = "/api/v1/common/report/ipr") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 测试本地socket
    MessageSend(data, method = "post", url = "/Message/Send") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取未读消息数量
    apiV1CompanyNoticeUnreadCount(data, method = "get", url = "/api/v1/company/notice/unread/count") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 修改
    apiV1AdminGlobalSiteModifySite(data, method = "post", url = "/api/v1/admin/globalSite/modifySite") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看信息机器人综合信息
    apiV1CompanyChatMobotShowMobotInfo(data, method = "get", url = "/api/v1/company/chat/mobot/showMobotInfo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 开启/关闭问题
    apiV1CompanyChatMobotEnableDisable(data, method = "post", url = "/api/v1/company/chat/mobot/enableDisable") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 开场白和常见问题的编辑
    apiV1CompanyChatMobotStoreModify(data, method = "post", url = "/api/v1/company/chat/mobot/storeModify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 客服不在的时候添加机器人留言
    apiV1CompanyChatLeavingMobotStoreModify(data, method = "post", url = "/api/v1/company/chat/leavingMobot/storeModify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 用户列表
    apiV1AdminCustomerList(data, method = "get", url = "/api/v1/admin/customer/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除联系人
    apiV1CompanyChatContactDelete(data, method = "post", url = "/api/v1/company/chat/contact/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加标签
    apiV1CompanyChatContactStoreLabel(data, method = "post", url = "/api/v1/company/chat/contact/storeLabel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 移除频道
    apiV1CompanyChatChannelDeleteChannel(data, method = "post", url = "/api/v1/company/chat/channel/deleteChannel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑联系人标签
    apiV1CompanyChatContactModifyLabel(data, method = "post", url = "/api/v1/company/chat/contact/modifyLabel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加频道
    apiV1CompanyChatChannelStoreChannel(data, method = "post", url = "/api/v1/company/chat/channel/storeChannel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 已添加的频道
    apiV1CompanyChatChannelAddedChannel(data, method = "get", url = "/api/v1/company/chat/channel/addedChannel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 联络人列表
    apiV1CompanyChatContactList(data, method = "get", url = "/api/v1/company/chat/contact/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 社交频道
    apiV1CompanyChatChannelSocialChannel(data, method = "get", url = "/api/v1/company/chat/channel/socialChannel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除联系人标签
    apiV1CompanyChatContactDeleteLabel(data, method = "post", url = "/api/v1/company/chat/contact/deleteLabel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 同步(暂定,涉及较为复杂的操作)
    apiV1CompanyChatChannelSyncChannel(data, method = "post", url = "/api/v1/company/chat/channel/syncChannel") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 标签列表
    apiV1CompanyChatContactLabelList(data, method = "get", url = "/api/v1/company/chat/contact/labelList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加联系人
    apiV1CompanyChatContactStore(data, method = "post", url = "/api/v1/company/chat/contact/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑联系人
    apiV1CompanyChatContactModify(data, method = "post", url = "/api/v1/company/chat/contact/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 验证token，IM服务器调用
    apiV1CommonValidatorAccessToken(data, method = "get", url = "/api/v1/common/validatorAccessToken") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 员工账号列表
    apiV1CompanyInfomationAdminList(data, method = "get", url = "/api/v1/company/infomation/adminList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除问题
    apiV1CompanyChatMobotDelete(data, method = "post", url = "/api/v1/company/chat/mobot/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取Chat 根据频道雪花ID
    apiV1CommonGlobalCompanyChannelSfid(data, method = "get", url = "/api/v1/common/global/companyChannelSfid") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: IM更新用户
    apiV1CommonTurmsUpdateUser(data, method = "put", url = "/api/v1/common/turms/updateUser") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: IM添加用户
    apiV1CommonTurmsTurmsAddUser(data, method = "post", url = "/api/v1/common/turms/turmsAddUser") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 观察者身份
    apiV1AdminCompanyObserverIdentity(data, method = "get", url = "/api/v1/admin/company/observerIdentity") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 根据XX获取一个联系人消息
    apiV1CompanyChatContactInfoBy(data, method = "get", url = "/api/v1/company/chat/contact/infoBy") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 询盘列表
    apiV1CompanyChatInquiryList(data, method = "get", url = "/api/v1/company/chat/inquiry/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 频道设置
    apiV1CompanyChatChannelChannelSetting(data, method = "post", url = "/api/v1/company/chat/channel/channelSetting") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取程式代码
    apiV1CompanyChatChannelChannelCode(data, method = "get", url = "/api/v1/company/chat/channel/channelCode") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 用户列表
    apiV1CompanyUser_centerUserList(data, method = "get", url = "/api/v1/company/user_center/user/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 查看角色权限
    apiV1CompanyUserRolePermissionsCompanyRolePermission(data, method = "get", url = "/api/v1/company/userRolePermissions/companyRolePermission") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 生成成员邀请链接
    apiV1CompanyUser_centerUserInvitation(data, method = "post", url = "/api/v1/company/user_center/user/invitation") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 用户更新
    apiV1CompanyUser_centerUserUpdate(data, method = "put", url = "/api/v1/company/user_center/user/update") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 客服列表
    apiV1CompanyChatKefuList(data, method = "get", url = "/api/v1/company/chat/kefu/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取公司邀请详情
    apiV1CommonCompanyInvitationInfo(data, method = "get", url = "/api/v1/common/company/invitation/info") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 公司成员注册
    apiV1CommonCompanyAdminRegister(data, method = "get", url = "/api/v1/common/company/admin/register") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取OSStoken，聊天插件使用
    apiV1CommonGetOssToken(data, method = "get", url = "/api/v1/common/getOssToken") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 绑定权限到角色
    apiV1CompanyUserRolePermissionsBindRolePermission(data, method = "post", url = "/api/v1/company/userRolePermissions/bindRolePermission") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 在线客服列表
    apiV1CommonChatListOnlineKefu(data, method = "get", url = "/api/v1/common/chat/listOnlineKefu") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 随机在线客服
    apiV1CommonChatRandomOnlineKefu(data, method = "get", url = "/api/v1/common/chat/randomOnlineKefu") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 搜索对话
    apiV1CompanyChatMessageSearch(data, method = "get", url = "/api/v1/company/chat/message/search") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 语言设置
    apiV1CompanyChatChannelSetLanguage(data, method = "post", url = "/api/v1/company/chat/channel/setLanguage") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取网页插件综合信息
    apiV1CompanyChatChannelWebChatPlushInfo(data, method = "get", url = "/api/v1/company/chat/channel/webChatPlushInfo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取机器人留言信息综合信息
    apiV1CompanyChatLeavingMobotLeavingMobotInfo(data, method = "get", url = "/api/v1/company/chat/leavingMobot/leavingMobotInfo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 传话问答
    apiV1CommonChatSayHelo(data, method = "post", url = "/api/v1/common/chat/sayHelo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取频道配置
    apiV1CommonChatChannelConf(data, method = "get", url = "/api/v1/common/chat/channelConf") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 机器人留言配置
    apiV1CommonChatMbotLeavingConf(data, method = "get", url = "/api/v1/common/chat/mbotLeavingConf") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 宾客发送留言
    apiV1CommonChatSendQuestLeaving(data, method = "post", url = "/api/v1/common/chat/sendQuestLeaving") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 联系人动态日志记录
    apiV1CompanyChatContactPageLogList(data, method = "get", url = "/api/v1/company/chat/contact/pageLogList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 客服信息
    apiV1CommonChatKefuInfo(data, method = "get", url = "/api/v1/common/chat/kefuInfo") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 联系人委派
    apiV1CompanyChatContactDelegate(data, method = "post", url = "/api/v1/company/chat/contact/delegate") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取IM游客ID
    apiV1CommonChatTouristsId(data, method = "get", url = "/api/v1/common/chat/touristsId") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: IM添加用户
    apiV1CommonTurmsAddUser(data, method = "post", url = "/api/v1/common/turms/addUser") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 日志记录
    apiV1AdminTasksLogList(data, method = "get", url = "/api/v1/admin/tasks/logList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 任务列表
    apiV1AdminTasksTasksList(data, method = "get", url = "/api/v1/admin/tasks/tasksList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除
    apiV1AdminTasksDelete(data, method = "post", url = "/api/v1/admin/tasks/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑
    apiV1AdminTasksModify(data, method = "post", url = "/api/v1/admin/tasks/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 新增任务
    apiV1AdminTasksStore(data, method = "post", url = "/api/v1/admin/tasks/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 任务上下架
    apiV1AdminTasksEnableDisbale(data, method = "post", url = "/api/v1/admin/tasks/enableDisbale") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取相似关键字， 营销机器人使用
    apiV1CommonGoogleadsGetSimilarKeyword(data, method = "get", url = "/api/v1/common/googleads/getSimilarKeyword") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 图表数据
    apiV1AdminTasksStatisticsEcharts(data, method = "get", url = "/api/v1/admin/tasksStatistics/Echarts") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 在线同事列表
    apiV1CompanyChatContactOnlineColleagueList(data, method = "get", url = "/api/v1/company/chat/contact/onlineColleagueList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 联系人收藏/取消收藏
    apiV1CompanyChatContactCollect(data, method = "post", url = "/api/v1/company/chat/contact/collect") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 客服列表(区分在线)
    apiV1CompanyChatKefuOnlineList(data, method = "get", url = "/api/v1/company/chat/kefu/onlineList") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 检测联系人属性(三选一)
    apiV1CompanyChatContactTestingContactProperty(data, method = "post", url = "/api/v1/company/chat/contact/testingContactProperty") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 仪表盘下部
    apiV1AdminDashboardData_2(data, method = "get", url = "/api/v1/admin/dashboard/data_2") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 仪表盘顶部统计
    apiV1AdminDashboardData_1(data, method = "get", url = "/api/v1/admin/dashboard/data_1") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 绑定标签到联系人
    apiV1CompanyChatContactBindLabelToContact(data, method = "post", url = "/api/v1/company/chat/contact/bindLabelToContact") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 访客记录
    apiV1CompanyVisitor(data, method = "get", url = "/api/v1/company/visitor") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 跟进列表
    apiV1CompanyChatFollowupList(data, method = "get", url = "/api/v1/company/chat/followup/list") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 添加跟进
    apiV1CompanyChatFollowupStore(data, method = "post", url = "/api/v1/company/chat/followup/store") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 编辑跟进
    apiV1CompanyChatFollowupModify(data, method = "post", url = "/api/v1/company/chat/followup/modify") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 删除跟进
    apiV1CompanyChatFollowupDelete(data, method = "post", url = "/api/v1/company/chat/followup/delete") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 开启/关闭聊天插件
    apiV1CompanyChatKefuSetChatEnable(data, method = "post", url = "/api/v1/company/chat/kefu/setChatEnable") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 产品视频详情
    apiV1AdminCompanyVideView(data, method = "get", url = "/api/v1/admin/companyVide/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 企业宣传视频详情
    apiV1AdminHomeVideoView(data, method = "get", url = "/api/v1/admin/homeVideo/view") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取默认信息留言
    apiV1CommonChatGetDefaultLeaving(data, method = "get", url = "/api/v1/common/chat/getDefaultLeaving") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 初始化公司聊天插件配置, 正式线上该方法需要删除
    apiV1CommonChatInitChatConf(data, method = "get", url = "/api/v1/common/chat/initChatConf") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 通过XX获取公司信息(含有比较功能)用于辅助 询盘处理
    apiV1CommonGlobalFindCompanyBy(data, method = "get", url = "/api/v1/common/global/findCompanyBy") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 测试方法
    apiV1CommonChatTest(data, method = "get", url = "/api/v1/common/chat/test") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 视频上传到youtube
    apiV1CompanyVideoYoutubeUpload(data, method = "put", url = "/api/v1/company/video/youtubeUpload") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 交易欺诈举报
    apiV1CommonReportFraud(data, method = "post", url = "/api/v1/common/report/fraud") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 获取google账号
    apiV1CommonGoogleGetAccount(data, method = "get", url = "/api/v1/common/google/getAccount") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 设置上传已达最大数量受限时间
    apiV1CommonGoogleYoutubeUploadLimit(data, method = "put", url = "/api/v1/common/google/youtubeUploadLimit") {
      return service({
        url,
        method,
        data,
        
      });
    },//  title: 组织信息
    apiV1CompanyUser_centerCompanyInfo(data, method = "get", url = "/api/v1/company/user_center/companyInfo") {
      return service({
        url,
        method,
        data,
        
      });
    },
      }
  