<template>
  <a-menu
    id="menu"
    v-model:selectedKeys="state.selectedKeys"
    theme="dark"
    mode="inline"
    @click="handleClick"
    :open-keys="state.openKeys"
  >
    <template v-for="item in MenuItem">
      <a-menu-item :key="item.to" v-if="!item.children" :title="item.title">
        <template #icon>
          <component :is="item.icon" />
        </template>
        <span>{{ item.title }}</span>
      </a-menu-item>
      <a-sub-menu :key="item.to" v-if="item.children">
        <template #icon>
          <component :is="item.icon" />
        </template>
        <template #title>{{ item.title }}</template>
        <template v-for="cItem in item.children" :key="cItem.to">
          <QMenuItem
            :info="{ title: cItem.title, icon: cItem.icon, key: cItem.to }"
          />
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
import { watchEffect, reactive } from "vue";
import { MenuItem } from "./Menu";
import { useRouter, useRoute } from "vue-router";
import QMenuItem from "./MenuItem.vue";
import { useHistoryStore } from "@/store/historyStore";

const router = useRouter();
const route = useRoute();
const historyStore = useHistoryStore();
const state = reactive<{ selectedKeys: string[]; openKeys: string[] }>({
  selectedKeys: [route.path],
  openKeys: [],
});
const handleClick = (e: MenuClick) => {
  router.push(e.key);
  historyStore.addHistoryMenu({ to: e.key, title: e.item.title });
};
watchEffect(() => {
  // state.selectedKeys = [route.path];
  state.openKeys = route.path.split("/")[1] === "system" ? ["/system"] : [];
});
// const selectedKeys = computed(() => [route.path]);
// const openKeys = computed(() =>
//   route.path.split("/")[1] === "system" ? ["/system"] : []
// );
</script>

<style lang="scss"></style>
