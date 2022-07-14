import { loadEnv, ConfigEnv } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";
import setupPlugins from "./vite/plugins";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  const isBuild = command == "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));

  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
    define: {
      _ADMIN_TOKEN_NAME: JSON.stringify("GPP_ADMIN_TOKEN"),
    },
  };
});
