<template>
  <a-menu-item :key="props.info.key" :title="props.info.title">
    <template #icon>
      <component :is="props.info.icon" />
    </template>
    <span>{{ props.info.title }}</span>
  </a-menu-item>
</template>
<script lang="ts" setup>
interface MenuItemInfo {
  title: string;
  icon: Element;
  key: string;
}
const props = defineProps<{ info: MenuItemInfo }>();
</script>
