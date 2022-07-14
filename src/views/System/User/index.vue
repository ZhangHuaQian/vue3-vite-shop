<template>
  <div>
    <QNav @RestFilterForm="handleRest">
      <template #left>
        <QAddButton @Create="handleCreate" />
        <QRemoveButton
          @remove="handleRemove"
          :disabledRemoveButton="RowSelection.length < 1"
        />
        <QFilterTable />
      </template>
      <template #right>
        <QSearchInput
          :searchPlaceholder="searchPlaceholder"
          v-model:searchValue="searchValue"
          @Search="handleSearch"
        />
      </template>
      <template #filter>
        <a-form
          layout="inline"
          :model="sifting"
          class="flex gap-y-3"
          ref="filterForm"
        >
          <a-form-item label="请求方式" name="method">
            <a-select
              v-model:value="sifting.method"
              size="Middle"
              style="width: 200px"
              :options="methodsOptions"
            ></a-select>
          </a-form-item>
        </a-form>
      </template>
    </QNav>

    <QTable
      @changeRowSelection="changeRowSelection"
      :data-source="dataSource"
      :columns="columns"
    />
    <QPagination
      :current="queryData.current"
      :page-size="queryData.pageSize"
      :total="total"
      @handleCurrent="handleCurrent"
      @handlePageSize="handlePageSize"
    />
  </div>
</template>

<script setup lang="ts">
import { QueryHttp } from "@/api/index";
import { onMounted, reactive, Ref, ref } from "vue";
import { message } from "ant-design-vue";
const sifting = reactive({
  method: "",
  status: "",
});
const searchPlaceholder = ref<string>("搜索关键字");
const searchValue = ref<string>("");
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
    title: "更新时间",
    dataIndex: "updateTime",
    key: "updateTime",
    // Options: { isShow: true },
  },
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    // Options: { isShow: true },
  },
  {
    title: "登录名",
    dataIndex: "username",
    key: "username",
    // Options: { isShow: true },
  },
  {
    title: "用户名",
    dataIndex: "name",
    key: "name",
    // Options: { isShow: true },
  },
  {
    title: "头像",
    dataIndex: "avatar",
    key: "avatar",
    // Options: { isShow: true },
  },

  // {
  //   title: "roles",
  //   dataIndex: "roles",
  //   key: "roles",
  //   // Options: { isShow: true },
  // },
  // {
  //   title: "permissions",
  //   dataIndex: "permissions",
  //   key: "permissions",
  //   // Options: { isShow: true },
  // },
];
let dataSource: Ref<DataType[]> = ref([]);
let RowSelection: Ref<string[]> = ref([]);
const queryData = reactive<QueryDTO>({
  current: 1,
  pageSize: 5,
  sorter: "id_ascend",
});
let total = ref<number>(0);
const handlePageSize = (size: number) => {
  queryData.pageSize = size;
  getTableData();
};
const handleCurrent = (size: number) => {
  queryData.current = size;
  getTableData();
};
const getTableData = () => {
  QueryHttp("/admin/user", queryData).then((res) => {
    if (res.code === 20000) {
      total.value = res.data.total;
      queryData.pageSize = res.data.pageSize;
      queryData.current = res.data.current;
      dataSource.value = res.data.list;
      message.success(res.message);
    }
  });
};

const changeRowSelection = (data: string[]) => {
  RowSelection.value = data;
};
const handleCreate = () => {
  message.info("创建");
};

const handleRemove = () => {
  message.info("删除");
};

const handleSearch = () => {
  console.log(searchValue);
};

const handleRest = () => {
  console.log(filterForm.value.resetFields());
};

onMounted(() => {
  getTableData();
});
</script>

<style scoped></style>
