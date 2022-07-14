import { RouteRecordRaw } from "vue-router";
import { env } from "../../utils";
import getRoutes from "./view";
import autoloadModuleRoutes from "./module";

let routes: RouteRecordRaw[] = [];
if (env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes();
} else {
  routes = autoloadModuleRoutes();
}

export default routes;
