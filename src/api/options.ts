import { getAccessToken } from "../utils/functions";

export const BASE_URL = "https://rest-test.machineheads.ru";

const reqTemplates = {
  login: { url: "/auth/token-generate", method: "POST" },
  refresh: { url: "/auth/token-refresh", method: "POST" },
  posts: { url: "/manage/posts", method: "GET" },
  postDetails: { url: "/manage/posts/detail", method: "GET" },
};

export const makeRequest = ({
  type,
  reqOptions,
  query,
}: {
  type: keyof typeof reqTemplates;
  reqOptions?: RequestInit;
  query?: URLSearchParams;
}) => {
  const { url, method } = reqTemplates[type];

  console.log("makeRequest");

  const reqHeaders = new Headers({ ...reqOptions?.headers });
  reqHeaders.append("Authorization", `Bearer ${getAccessToken() || ""}`);

  const options: RequestInit = {
    ...reqOptions,
    headers: reqHeaders,
    method,
  };

  const completeUrl = new URL(url, BASE_URL);
  query?.forEach((value, key) => completeUrl.searchParams.append(key, value));
  console.log(completeUrl);

  return new Request(completeUrl, options);
};
