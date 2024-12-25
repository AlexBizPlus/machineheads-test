import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../const";
import { AuthState } from "../reducers/authReducer";

export const setAuth = (payload: Partial<AuthState>) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const clearAuth = () => ({
  type: LOGIN_FAILURE,
});
