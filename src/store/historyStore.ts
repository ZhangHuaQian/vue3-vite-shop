import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";

export const useHistoryStore = defineStore("history", {
  state: () => ({
    historyMenu: [
      {
        title: "系统首页",
        to: "/shop/home",
      },
    ] as MenuItem[],
  }),
  actions: {
    removeHistoryMenu(menu: MenuItem) {
      const index = this.historyMenu.indexOf(menu);
      this.historyMenu.splice(index, 1);
    },
    addHistoryMenu(newMenu: MenuItem) {
      const isHas = this.historyMenu.some(
        (menu) => menu.title === newMenu.title
      );
      if (!isHas) this.historyMenu.push(newMenu);
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop();
      }
    },
  },
  persist: piniaPersistConfig("AuthStore"),
});
