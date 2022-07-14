import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "admin",
    component: () => import("@/layouts/admin.vue"),
    meta: { auth: true },
    redirect: "/shop/home",
    children: [
      {
        name: "shop.home",
        path: "/shop/home",
        meta: { auth: true },
        component: () => import("@/views/admin/home.vue"),
      },
      {
        name: "shop.product",
        path: "/shop/product",
        meta: { auth: true },
        component: () => import("@/views/Shop/product/index.vue"),
      },
      {
        name: "shop.productAttr",
        path: "/shop/productAttr",
        meta: { auth: true },
        component: () => import("@/views/shop/productAttr/index.vue"),
      },
      {
        name: "system.role",
        path: "/system/role",
        meta: { auth: true },
        component: () => import("@/views/System/Role/index.vue"),
      },
      {
        name: "system.permission",
        path: "/system/permission",
        meta: { auth: true },
        component: () => import("@/views/System/Permission/index.vue"),
      },
      {
        name: "system.user",
        path: "/system/user",
        meta: { auth: true },
        component: () => import("@/views/System/User/index.vue"),
      },
      {
        name: "system.reqLog",
        path: "/system/reqLog",
        meta: { auth: true },
        component: () => import("@/views/System/ReqLog/index.vue"),
      },
      {
        name: "system.assets",
        path: "/system/assets",
        meta: { auth: true },
        component: () => import("@/views/System/Assets/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login.vue"),
    meta: { auth: false },
  },
];
