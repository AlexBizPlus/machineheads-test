import { getAccessToken } from "../utils/functions";

export const BASE_URL = "https://rest-test.machineheads.ru";

const reqTemplates = {
  login: { url: "/auth/token-generate", method: "POST" },
  refresh: { url: "/auth/token-refresh", method: "POST" },
  posts: { url: "/manage/posts", method: "GET" },
  postDetails: { url: "/manage/posts/detail", method: "GET" },
};

export const makeRequest = (
  type: keyof typeof reqTemplates,
  reqOptions?: RequestInit
) => {
  const { url, method } = reqTemplates[type];

  const reqHeaders = new Headers({ ...reqOptions?.headers });
  reqHeaders.append("Authorization", `Bearer ${getAccessToken() || ""}`);

  const options: RequestInit = {
    ...reqOptions,
    headers: reqHeaders,
    method,
  };

  return new Request(`${BASE_URL}${url}`, options);
};
