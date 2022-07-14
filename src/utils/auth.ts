import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get(_ADMIN_TOKEN_NAME);
}

export function setToken(token: string) {
  return Cookies.set(_ADMIN_TOKEN_NAME, token);
}

export function removeToken() {
  return Cookies.remove(_ADMIN_TOKEN_NAME);
}
