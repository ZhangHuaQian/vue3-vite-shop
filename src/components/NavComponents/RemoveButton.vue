<template>
  <a-button
    type="danger"
    @click="handleRemove"
    ghost
    :disabled="disabledRemoveButton"
  >
    <DeleteOutlined />
    删除
  </a-button>
</template>

<script setup lang="ts">
import { DeleteOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
interface Props {
  disabledRemoveButton: Boolean;
}
const props = withDefaults(defineProps<Props>(), {
  disabledRemoveButton: () => true,
});
const emit = defineEmits(["Remove"]);
const handleRemove = () => {
  message.info("删除");
  emit("Remove");
};
</script>

<style scoped></style>
