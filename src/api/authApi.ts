import { changeNaming } from "../utils/functions";
import { makeRequest } from "./options";

const httpHeader = {
  Accept: "*/*",
};

const login = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const req = makeRequest({
    type: "login",
    reqOptions: {
      headers: httpHeader,
      body: formData,
    },
  });

  const res = await fetch(req);
  return await res.json().then(changeNaming);
};

const refreshToken = async (refresh: string) => {
  const formData = new FormData();
  formData.append("refresh_token", refresh);

  const req = makeRequest({
    type: "refresh",
    reqOptions: {
      headers: httpHeader,
      body: formData,
    },
  });

  const res = await fetch(req);
  return await res.json().then(changeNaming);
};

export const authApi = {
  login,
  refreshToken,
};
