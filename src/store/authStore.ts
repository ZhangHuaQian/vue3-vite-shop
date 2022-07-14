import { defineStore } from "pinia";
import { OtherHttp } from "@/api/index";
import piniaPersistConfig from "@/config/piniaPersist";
import { removeToken, setToken } from "@/utils/auth";
import { message } from "ant-design-vue";
import router from "@/router/index";
import { useHistoryStore } from "./historyStore";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userinfo: {} as UserInfo,
    isLogin: false,
  }),
  actions: {
    login(params: { username: string; password: string }) {
      OtherHttp("/auth/login", "POST", params).then((res) => {
        if (res.code === 20000) {
          this.userinfo = res.data.info;
          this.isLogin = true;
          setToken(res.data.token);
          message.success(res.message);
          router.push({ name: "shop.home" });
        } else {
          message.error(res.message);
        }
      });
    },
    logout() {
      OtherHttp("/auth/logout", "POST", {}).then((res) => {
        if (res.code === 20000) {
          removeToken();
          this.resetPinia();
          message.success(res.message);
          router.push({ name: "login" });
        }
      });
    },
    resetPinia() {
      const historyStore = useHistoryStore();
      historyStore.$reset();
      this.userinfo = {};
      this.isLogin = false;
    },
  },
  persist: piniaPersistConfig("AuthStore"),
});
