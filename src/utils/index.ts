import env from "./env";
import Axios from "./Axios";
const http = new Axios({
  baseURL: "/api",
  timeout: 10000,
  headers: {},
});
export { env, http };
