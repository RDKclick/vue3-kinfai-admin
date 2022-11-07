import {inject, ref} from "vue";
import {message} from "ant-design-vue";

export default function useMembersManage() {
    const $api = inject("$api")

    const userList = ref([])
    const userLoading = ref(false)

    const roleList = ref([])

    const queryRoleListPromise = $api.apiV1CompanyUserRolePermissionsCompanyRolePermission()
        .then(res => {
            if (res.code === 200) {
                const {sysPermissions, sysRole, rolePermissions} = res.data

                return {
                    sysPermissions: sysPermissions || [],
                    sysRole: sysRole || [],
                    rolePermissions: rolePermissions || []
                }
            } else {
                return {
                    sysPermissions: [],
                    sysRole: [],
                    rolePermissions: []
                }
            }
        })

    const queryUserList = async () => {
        userLoading.value = true

        const userListPromise = $api.apiV1CompanyUser_centerUserList({
            page: 1,
            num: 1000
        })
        userLoading.value = false
        const [roleInfo, userRes] = await Promise.all([queryRoleListPromise, userListPromise])
        const {sysRole} = roleInfo

        roleList.value = sysRole

        if (userRes.code === 200) {
            return userRes.data.list.map(user => {
                const {role} = user

                // const prefixAvatar = avatar ? import.meta.env.VITE_API_URL + avatar : ''

                const roleInfo = sysRole.find(roleInfo => roleInfo.id === role)
                const roleName = roleInfo ? roleInfo.name : ""

                const booleanStatus = user.status === 1

                return {
                    ...user,
                    roleName,
                    booleanStatus,
                }
            })
        } else {
            return []
        }
    }

    const TABLE_COLUMNS = [
        {
            title: "姓名",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "角色",
            dataIndex: "roleName",
            key: "roleName"
        },
        {
            title: "邮箱",
            dataIndex: "login_email",
            key: "login_email"
        },
        {
            title: "电话",
            dataIndex: "login_mobile",
            key: "login_mobile"
        },
        {
            title: "状态",
            dataIndex: "booleanStatus",
            key: "booleanStatus"
        },
        {
            title: "操作",
            dataIndex: "id",
            key: "id"
        }
    ]

    const updateUserStatusAction = (userInfo, status) => {
        return $api.apiV1CompanyUser_centerUserUpdate({
            ...userInfo,
            email: userInfo.login_email,
            status: Number(status)
        }).then(res => res.code === 200)
    }

    const updateUserStatusHandle = async function (userInfo, status) {
        const result = await updateUserStatusAction(...arguments)

        if (result) {
            const target = userList.value.find(user => user.id === userInfo.id)
            target && (target.booleanStatus = status)
        } else {
            message.info("修改失败,请联系管理员~")
        }
    }

    // 查看是否为唯一邮箱
    const queryUniqueEmail = async (email, filterId) => {
        console.log(email, filterId)

        if (String(email).trim() === '') {
            return true
        }

        const res = await $api.apiV1CompanyUser_centerUserList({
            page: 1,
            num: 1000,
            keyword: email
        })
        if (res.code === 200) {
            console.log("书", res.data.list)
            if (res.data.list.length === 0) {
                return true
            }

            return !res.data.list.every(item => item.id !== filterId)
        } else {
            return true
        }
    }

    // 公司信息 api/v1/company/user_center/companyInfo
    const companyInfo = ref({
        id: 0,
        zh_name: "公司名称",
        surplus_member: 2
    })
    const queryCompanyAction = () => $api.apiV1CompanyUser_centerCompanyInfo()
        .then(res => {
            if (res.code === 200) {
                for (const key in res.data) {
                    companyInfo.value[key] = res.data[key]
                }
            }
        })

    queryCompanyAction()
    queryUserList().then(user => userList.value.push(...user))

    const getUserList = () => {
        userList.value = []
        queryUserList().then(user => userList.value.push(...user))
    }

    return {
        userList,
        roleList,
        companyInfo,
        userLoading,
        queryUserList,
        TABLE_COLUMNS,
        updateUserStatusHandle,
        getUserList,
        queryUniqueEmail
    }
}
