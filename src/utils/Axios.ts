import axios, { AxiosRequestConfig } from "axios";
import CooKies from "js-cookie";
import { message } from "ant-design-vue";
import router from "@/router/index";

export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.interceptors();
  }

  public async request(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<ResponseResult>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<ResponseData>;
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        if (CooKies.get(_ADMIN_TOKEN_NAME)) {
          config.headers = {
            Authorization: "Bearer " + CooKies.get(_ADMIN_TOKEN_NAME),
          };
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        switch (response.data.code) {
          case 40001:
            message.info("无权限,请重新登录", 1, () => {
              router.push({ name: "login" });
              // removeToken()
              // window.location.reload()
            });
            break;
          case 50000:
            message.info("存在错误，请检查", 1, () => {});
            if (response.data.message === "请求头错误") {
              router.push({ name: "login" });
            }
            break;
          default:
            break;
        }
        return response;
      },
      (error) => Promise.reject(error)
    );
  }
}
