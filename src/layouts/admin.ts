import { ref } from "vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);

export { selectedKeys, collapsed };
