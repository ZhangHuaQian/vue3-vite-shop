<template>
  <a-table
    :dataSource="props.dataSource"
    :columns="props.columns"
    :rowSelection="rowSelection"
    bordered
    class="m-5"
    :pagination="false"
    :customRow="customRow"
    rowKey="id"
  />
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";
const props = defineProps({
  dataSource: Array,
  columns: Array,
});
const emit = defineEmits(["changeRowSelection"]);
const state = reactive({
  selectedRowKeys: [],
  selection: {
    key: "id",
  },
});
const selectRow = (record: DataType) => {
  const selectedRowKeys = [...state.selectedRowKeys];
  if (selectedRowKeys.indexOf(record.id as never) >= 0) {
    selectedRowKeys.splice(selectedRowKeys.indexOf(record.id as never), 1);
  } else {
    selectedRowKeys.push(record.id as never);
  }
  state.selectedRowKeys = selectedRowKeys;
};
const rowSelection = computed(() => {
  return {
    selectedRowKeys: state.selectedRowKeys,
    onChange: (selectedRowKeys: never[]) => {
      state.selectedRowKeys = selectedRowKeys;
    },
  };
});
const customRow = (record: DataType) => {
  return {
    onClick: () => {
      selectRow(record);
    },
  };
};
watch(
  () => state.selectedRowKeys,
  () => {
    emit("changeRowSelection", state.selectedRowKeys);
  }
);
</script>

<style scoped></style>
