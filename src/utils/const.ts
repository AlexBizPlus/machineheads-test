export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh";

export const ROUTES = {
  Home: "/",
  Login: "/login",
  Posts: "/posts",
};

export const commonStyle = { display: "block", marginTop: "0.5rem" };

export const TOKEN_DELAY = 1000 * 60; // 1 min
export const REFRESH_STANDBY = 1000 * 60 * 2; // 2 min
export const SEC_TO_MS = 1000;

export const customHeaders = {
  Current: "x-pagination-current-page",
  Total: "x-pagination-page-count",
};
