/*
 * @Date: 2022-07-01 11:42:19
 * @LastEditors: kinfai
 * @Description:curd通用方法
 * @LastEditTime: 2022-07-13 14:50:36
 * @FilePath: \neekde-merchants\src\hooks\curd\index.js
 */
import {inject, ref, computed} from "vue";
import {usePagination} from "vue-request";
import {Modal, message} from "ant-design-vue";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons-vue";

export default function useCurd({
                                    listFnName = "apiV1AdminCompanyList",
                                    num = 10,
                                    formatReqFn,
                                    formatResultFn,
                                    filters,
                                    debounceTime = 500
                                }) {
    const $api = inject("$api");
    const $utils = inject("$utils")

    const queryData = (params) => {
        if (formatReqFn) {
            const formatResult = formatReqFn(params, filters);
            return $api[listFnName](formatResult);
        }

        return $api[listFnName]({
            ...params,
            ...filters,
        });
    };

    const total = ref(0);

    const {
        data: dataSource,
        run,
        loading,
        current,
        pageSize,
    } = usePagination(queryData, {
        formatResult: (res) => {
            total.value = res.data.total;

            if (formatResultFn) {
                return formatResultFn(res);
            }

            return res.data.list;
        },
        defaultParams: [
            {
                num,
            },
        ],
        pagination: {
            currentKey: "page",
            pageSizeKey: "num",
        },
    });

    // 分页
    const pagination = computed(() => ({
        total: total.value,
        current: current.value,
        pageSize: pageSize.value,
        showSizeChanger: true,
    }));
    const handleTableChange = (pag, filters) => {
        run({
            num: pag.pageSize,
            page: pag?.current,
            ...filters,
        });
    };

    // 表格选中项管理
    const multipleCheck = ref([]);
    const handleCheckRow = (keys) => (multipleCheck.value = keys);

    // 拉取数据
    const getData = () => {
        run({
            num: pageSize.value,
            page: current.value,
        });
    };

    // 防抖查询
    const debounceGetData = $utils.debounce(getData, debounceTime)

    return {
        $api,
        Modal,
        message,
        multipleCheck,
        handleCheckRow,
        run,
        current,
        pageSize,
        dataSource,
        loading,
        handleTableChange,
        pagination,
        getData,
        debounceGetData,
        EditOutlined,
        DeleteOutlined
    };
}
