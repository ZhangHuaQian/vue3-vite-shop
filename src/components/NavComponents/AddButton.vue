<template>
  <a-button type="primary" @click.prevent="handleCreate">
    <PlusOutlined />
    新增
  </a-button>
</template>

<script setup lang="ts">
import { PlusOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const emit = defineEmits(["Create"]);
const handleCreate = () => {
  message.info("创建");
  emit("Create");
};
</script>

<style scoped></style>
