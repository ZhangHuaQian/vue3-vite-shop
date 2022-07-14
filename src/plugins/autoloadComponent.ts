import { App } from "vue";

export const useComponent = (app: App) => {
  const component = import.meta.globEager("../components/**/*.vue");
  Object.entries(component).forEach(([name, module]) => {
    const names = getComponentName(name);
    app.component("Q" + names, module.default);
  });
  function getComponentName(name: string) {
    return name.replace(/.+components\/|\.vue/gi, "");
  }
};
