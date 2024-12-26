import { makeRequest } from "./options";

export const getPosts = async (query: URLSearchParams) => {
  console.log("getPosts", query);

  const req = makeRequest({ type: "posts", query });

  const res = await fetch(req);
  return await res.json();
};
