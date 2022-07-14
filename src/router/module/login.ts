import { RouteRecordRaw } from "vue-router";
export default {
  name: "login",
  path: "/login",
  component: import("@/views/Auth/login.vue"),
  meta: { auth: false },
} as RouteRecordRaw;
