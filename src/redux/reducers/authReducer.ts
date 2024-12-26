import { Action } from "redux";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../const";

export interface AuthState {
  isAuth: boolean;
  accessExpiredAt: number | undefined;
}

export type AuthAction = Action & { payload?: Partial<AuthState> };

const initialState: AuthState = {
  isAuth: false,
  accessExpiredAt: undefined,
};

export const auth = (state = initialState, { type, payload }: AuthAction) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        isAuth: true,
        expiresAt: payload?.accessExpiredAt,
      };
    case LOGIN_FAILURE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
