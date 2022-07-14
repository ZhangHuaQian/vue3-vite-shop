import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
// import autoloadRoutes from "./autoload";
import { useAuthStore } from "@/store/authStore";
import nProgress from "@/plugins/nProfress";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export const setupRouter = (app: App) => {
  app.use(router);
};

router.beforeEach((to, form, next) => {
  nProgress.start();
  const authStore = useAuthStore();

  if (to.meta.auth && !authStore.isLogin) {
    next("/login");
  }
  next();
});

router.afterEach((to, from) => {
  nProgress.done();
});
export default router;
