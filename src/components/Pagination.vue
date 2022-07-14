<template>
  <a-pagination
    v-model:current="current"
    v-model:pageSize="pageSize"
    show-size-changer
    :total="props.total"
    @showSizeChange="onShowSizeChange"
    :pageSizeOptions="pageSizeOptions"
    class="m-5"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = withDefaults(
  defineProps<{
    current: number;
    pageSize: number;
    total: number;
  }>(),
  {
    current: 1,
    pageSize: 10,
    total: 0,
  }
);
const emit = defineEmits(["handleCurrent", "handlePageSize"]);
const current = ref<number>(props.current);
const pageSize = ref<number>(props.pageSize);
const onShowSizeChange = (current: number, pageSize: number) => {
  console.log(current, pageSize);
};
const pageSizeOptions = ["5", "10", "15", "20", "50", "100"];
watch(current, (n) => {
  console.log(n);
  emit("handleCurrent", n);
});
watch(pageSize, (n) => {
  console.log(n);
  emit("handlePageSize", n);
});
</script>

<style scoped></style>
