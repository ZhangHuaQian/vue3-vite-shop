import { http } from "@/utils/index";

import { serverip as ip } from "@/utils/serverIP";
import Qs from "qs";

export const QueryHttp = (modeName: string, params: QueryDTO) => {
  return http.request({
    params,
    method: "GET",
    url: ip + modeName + "/query",
  });
};

export const ShowHttp = (modeName: string, params: ShowDTO) => {
  return http.request({
    params,
    method: "GET",
    url: ip + modeName + "/show",
  });
};

export const CreateHttp = (modeName: string, data: CreateDTO) => {
  return http.request({
    data: Qs.stringify(data),
    method: "POST",
    url: ip + modeName + "/create",
  });
};
export const UpdateHttp = (modeName: string, data: UpdateDTO) => {
  return http.request({
    data: Qs.stringify(data),
    method: "PATCH",
    url: ip + modeName + "/update",
  });
};

export const RemoveHttp = (modeName: string, data: RemoveDTO) => {
  return http.request({
    data: Qs.stringify(data),
    method: "DELETE",
    url: ip + modeName + "/remove",
  });
};

export const OtherHttp = <T>(
  path: string,
  method: string = "POST",
  data: T
) => {
  return http.request({
    data: data,
    method,
    url: ip + path,
  });
};
