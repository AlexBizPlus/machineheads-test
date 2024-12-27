import { makeRequest } from "./options";

const getPosts = async (query: URLSearchParams) => {
  const req = makeRequest({ type: "posts", query });

  const res = await fetch(req);

  const headers: Record<string, string> = {};
  for (const [key, value] of res.headers.entries()) {
    headers[key] = value;
  }

  const data = await res.json();
  return { data, headers };
};

export const postsApi = {
  getPosts,
};
