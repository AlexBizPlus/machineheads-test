import { changeNaming } from "../utils/functions";
import { makeRequest } from "./options";

export const login = async (email: string, password: string) => {
  const httpHeader = {
    Accept: "*/*",
  };

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
