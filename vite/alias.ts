import { AliasOptions } from "vite";
import { resolve } from "path";

const alias = {
  "@": resolve("./src"),
} as AliasOptions;

export default alias;
