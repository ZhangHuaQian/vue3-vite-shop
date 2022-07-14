<template>
  <div id="components-layout-demo-custom-trigger">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo"></div>
        <QMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <div class="dropDown">
            <QUserDropDown />
          </div>
        </a-layout-header>
        <nav
          class="flex items-center w-full h-10 px-2 bg-white border-l-0 border-r-0 border-gray-200 border-solid border-b-1 border-t-1"
        >
          <template v-for="item in historyMenu">
            <QTag :conf="item" />
          </template>
        </nav>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
          class="overflow-y-scroll"
        >
          <router-view v-slot="{ Component }">
            <!-- <Transition mode="out-in" appear>
              <KeepAlive> -->
            <component :is="Component"></component>
            <!-- </KeepAlive>
            </Transition> -->
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { collapsed } from "./admin";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { useHistoryStore } from "@/store/historyStore";
import { storeToRefs } from "pinia";
const historyStore = useHistoryStore();
const { historyMenu } = storeToRefs(historyStore);
</script>
<style scoped lang="scss">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout.ant-layout-has-sider {
  height: 100vh;
}
.dropDown {
  @apply mr-10 float-right;
  .dropDownBase {
    height: 64px;
    @apply text-gray-900 cursor-pointer;
  }
}
</style>
