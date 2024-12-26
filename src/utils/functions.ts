import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./const";

export function getAccessToken() {
  return Cookies.get(ACCESS_TOKEN);
}

export function storeAccessToken(value: string) {
  Cookies.set(ACCESS_TOKEN, value);
}

export function getRefreshToken() {
  return Cookies.get(REFRESH_TOKEN);
}

export function storeRefreshToken(value: string) {
  Cookies.set(REFRESH_TOKEN, value);
}

export function clearTokens() {
  [ACCESS_TOKEN, REFRESH_TOKEN].forEach((token) => Cookies.remove(token));
}

function toCamelCase(str: string) {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("_", "");
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function changeNaming(obj: Record<string, any>) {
  Object.entries(obj).forEach(([key, value]) => {
    delete obj[key];
    obj[toCamelCase(key)] = value;
  });
  return obj;
}
