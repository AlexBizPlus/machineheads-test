import { Credentials } from "../../types";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../const";
import { AuthState } from "../reducers/authReducer";

export const loginRequest = (payload: Credentials) => ({
  type: LOGIN,
  payload,
});

export const setAuth = (payload: Partial<AuthState>) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const clearAuth = () => ({
  type: LOGIN_FAILURE,
});
