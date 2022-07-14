import { createApp } from "vue";
import App from "./App.vue";
import "./styles/global.css";
import "ant-design-vue/dist/antd.css";
import { setupRouter } from "./router/index";
import { setupPinia } from "./store/index";
import { setupAntd } from "./plugins/antd.config";
import { useComponent } from "./plugins/autoloadComponent";

const bootstrap = () => {
  const app = createApp(App);
  setupRouter(app);
  setupPinia(app);
  setupAntd(app);
  useComponent(app);
  app.mount("#app");
};

bootstrap();
