import { makeRequest } from "./options";

const getPosts = async (query: URLSearchParams) => {
  const req = makeRequest({ type: "posts", query });

  const res = await fetch(req);
  return await res.json();
};

export const postsApi = {
  getPosts,
};
