<template>
  <div>
    <QNav @RestFilterForm="handleRest">
      <template #left>
        <QAddButton @Create="handleCreate" />
        <QRemoveButton
          @remove="handleRemove"
          :disabledRemoveButton="state.RowSelection.length < 1"
        />
        <QFilterTable />
      </template>
      <template #right>
        <QSearchInput
          :searchPlaceholder="state.searchPlaceholder"
          v-model:searchValue="state.searchValue"
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
      :data-source="state.dataSource"
      :columns="columns"
    />
    <QPagination
      :current="queryData.current"
      :page-size="queryData.pageSize"
      :total="state.total"
      @handleCurrent="handleCurrent"
      @handlePageSize="handlePageSize"
    />
  </div>
</template>

<script setup lang="ts">
import {
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
} from "./index";
import { onMounted } from "vue";
onMounted(() => {
  getTableData();
});
</script>

<style scoped></style>
