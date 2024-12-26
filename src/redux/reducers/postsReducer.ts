import { Action } from "redux";
import { PostRes } from "../../types";
import { SET_FETCH_ERROR, SET_LOADING, SET_POSTS } from "../const";

export interface PostsState {
  posts: PostRes[];
  error: string | null;
  isLoading: boolean;
}

export type PostsAction = Action & { payload?: Partial<PostsState> };

const initialState: PostsState = {
  posts: [],
  error: null,
  isLoading: false,
};

export const posts = (state = initialState, { type, payload }: PostsAction) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: payload?.posts ?? [],
        error: null,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        posts: [],
        error: payload?.error ?? "Ошибка",
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload?.isLoading ?? false,
      };
    default:
      return state;
  }
};
