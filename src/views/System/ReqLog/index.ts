import { QueryHttp } from "@/api/index";
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
const sifting = reactive({
  method: "",
  status: "",
});
const state = reactive<{
  searchPlaceholder: string;
  searchValue: string;
  dataSource: DataType[];
  RowSelection: string[];
  total: number;
}>({
  searchPlaceholder: "搜索关键字",
  searchValue: "",
  dataSource: [],
  RowSelection: [],
  total: 0,
});
const filterForm = ref();
const methodsOptions = [
  {
    value: "GET",
    label: "get请求",
  },
  {
    value: "POST",
    label: "post请求",
  },
  {
    value: "PATCH",
    label: "patch请求",
  },
  {
    value: "DELETE",
    label: "delete请求",
  },
];
const columns = [
  {
    title: "记录时间",
    dataIndex: "createTime",
    key: "createTime",
    // Options: { isShow: true },
  },
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    // Options: { isShow: true },
  },
  {
    title: "ip",
    dataIndex: "ip",
    key: "ip",
    // Options: { isShow: true },
  },
  {
    title: "用户id",
    dataIndex: "userId",
    key: "userId",
    // Options: { isShow: true },
  },
  {
    title: "参数",
    dataIndex: "params",
    key: "params",
    // Options: { isShow: true },
  },

  {
    title: "action",
    dataIndex: "action",
    key: "action",
    // Options: { isShow: true },
  },
  {
    title: "请求方法",
    dataIndex: "method",
    key: "method",
    // Options: { isShow: true },
  },
  {
    title: "请求地址",
    dataIndex: "status",
    key: "status",
    // Options: { isShow: true },
  },
  {
    title: "消耗时间",
    dataIndex: "consumeTime",
    key: "consumeTime",
    // Options: { isShow: true },
  },
];
const queryData = reactive<QueryDTO>({
  current: 1,
  pageSize: 5,
  sorter: "id_ascend",
});
const handlePageSize = (size: number) => {
  queryData.pageSize = size;
  getTableData();
};
const handleCurrent = (size: number) => {
  queryData.current = size;
  getTableData();
};
const getTableData = () => {
  QueryHttp("/admin/reqLog", queryData).then((res) => {
    if (res.code === 20000) {
      state.total = res.data.total;
      queryData.pageSize = res.data.pageSize;
      queryData.current = res.data.current;
      state.dataSource = res.data.list;
      message.success(res.message);
    }
  });
};

const changeRowSelection = (data: string[]) => {
  state.RowSelection = data;
};
const handleCreate = () => {
  message.info("创建");
};

const handleRemove = () => {
  message.info("删除");
};

const handleSearch = () => {
  console.log(state.searchValue);
};

const handleRest = () => {
  console.log(filterForm.value.resetFields());
};

export {
  handleRest,
  handleCreate,
  handleRemove,
  handleSearch,
  sifting,
  methodsOptions,
  changeRowSelection,
  columns,
  queryData,
  state,
  handleCurrent,
  handlePageSize,
  getTableData,
};
