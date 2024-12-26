import { makeRequest } from "./options";

const getPosts = async (query: URLSearchParams) => {
  const req = makeRequest({ type: "posts", query });

  const res = await fetch(req);

  const headers = res.headers;
  res.headers.forEach(console.log);

  const data = await res.json();

  // console.log(res);
  // console.log(res.headers.get("X-Pagination-Current-Page"));

  return { data, headers };
};

export const postsApi = {
  getPosts,
};
