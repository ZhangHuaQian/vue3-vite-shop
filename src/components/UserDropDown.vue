<template>
  <div class="headerDropCon">
    <a-dropdown placement="bottomLeft" overlayClassName="dropDown">
      <div class="dropDownBase" @click.prevent>
        <a-space>
          <a-avatar :src="userinfo.avatar" :size="48" />
          {{ userinfo.name }}
        </a-space>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <template #icon>
              <PoweroffOutlined />
            </template>
            <p @click="login">退出系统</p>
          </a-menu-item>
          <a-menu-item>
            <template #icon>
              <LockOutlined />
            </template>
            <p>锁定屏幕</p>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/authStore";
import { PoweroffOutlined, LockOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
const authStore = useAuthStore();
const { userinfo } = storeToRefs(authStore);

const login = () => {
  authStore.logout();
};
</script>

<style lang="scss" scoped>
.headerDropCon {
  .dropDownBase {
    height: 64px;
    @apply text-gray-900 cursor-pointer;
  }
}

.ant-dropdown-menu-title-content p {
  margin: 0;
}
</style>
