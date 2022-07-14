import { createPinia } from "pinia";
import { App } from "vue";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const setupPinia = (Vue: App) => {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  Vue.use(pinia);
};
