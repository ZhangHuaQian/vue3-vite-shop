<template>
  <a-tag
    color="#2db7f5"
    :closable="props.conf.to !== '/shop/home'"
    @close.prevent="closeTag(props.conf)"
    @click="handleChange(props.conf.to)"
    class="cursor-pointer"
    >{{ props.conf.title }}
  </a-tag>
</template>

<script setup lang="ts">
import { useHistoryStore } from "@/store/historyStore";
import { useRouter } from "vue-router";
const props = defineProps<{ conf: MenuItem }>();
const historyStore = useHistoryStore();
const router = useRouter();
const closeTag = (item: MenuItem) => {
  historyStore.removeHistoryMenu(item);
};
const handleChange = (to: string) => {
  router.push(to);
};
</script>

<style scoped></style>
