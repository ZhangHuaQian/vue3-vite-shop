<template>
  <a-space>
    <a-input
      v-model:value="searchValues"
      :placeholder="props.searchPlaceholder"
      @input="$emit('update:searchValue', $event.target.value)"
    />
    <a-button type="primary" :disabled="!searchValues" @click="handleSearch">
      <SearchOutlined />
    </a-button>
  </a-space>
</template>

<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
interface Props {
  searchPlaceholder?: String;
  searchValue?: string;
}
const props = withDefaults(defineProps<Props>(), {
  searchPlaceholder: () => "搜索关键字",
  searchValue: () => "",
});

const emit = defineEmits(["update:searchValue", "Search"]);
const searchValues = ref<string>(props.searchValue);
const handleSearch = () => {
  emit("Search");
};
</script>

<style scoped></style>
