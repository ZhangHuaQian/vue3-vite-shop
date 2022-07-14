import { App } from "vue";
import antd from "ant-design-vue";

export const setupAntd = (Vue: App) => {
  Vue.use(antd);
};
