import { Action } from "redux";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../const";
import { PostRes } from "../../types";

export interface PostsState {
  posts: PostRes[];
  error: string | null;
}

export type AuthPayload = Action & { payload?: Partial<PostsState> };

const initialState: PostsState = {
  posts: [],
  error: null,
};

export const auth = (state = initialState, { type, payload }: AuthPayload) => {
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
