export const BASE_URL = "https://rest-test.machineheads.ru";

export const LOGIN_URL = "/auth/token-generate";
export const REFRESH_URL = "/auth/token-refresh";

export const POST_LIST_URL = "/manage/posts";
export const POST_DETAILS_URL = "/manage/posts/detail";

const makeRequest = () => {
  return new Request();
};
