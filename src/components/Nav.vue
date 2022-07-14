<template>
  <div class="m-5 nav-container">
    <div class="nav-header">
      <div>
        <a-space>
          <slot name="left"></slot>
        </a-space>
      </div>
      <div>
        <a-space>
          <slot name="right"></slot>
          <a-tooltip placement="top">
            <template #title>
              <span>清空条件</span>
            </template>
            <a-button type="primary" @click="handleRest">
              <SyncOutlined />
            </a-button>
          </a-tooltip>

          <div class="cursor-pointer" @click="show = !show">
            {{ !show ? "显示" : "关闭" }}更多筛选
            <component :is="!show ? UpOutlined : DownOutlined"></component>
          </div>
        </a-space>
      </div>
    </div>
  </div>
  <transition mode="in-out">
    <div
      v-show="show"
      class="w-full p-5 mt-5 border-2 border-gray-400 border-solid rounded-md min-h-20"
    >
      <slot name="filter"></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { UpOutlined, DownOutlined, SyncOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const emit = defineEmits(["RestFilterForm"]);
const show = ref<boolean>(false);
const handleRest = () => {
  emit("RestFilterForm");
};
</script>

<style scoped lang="scss">
.nav-header {
  @apply flex justify-between;
}
.v-enter-active {
  animation: bounce-in 0.5s;
}
.v-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
