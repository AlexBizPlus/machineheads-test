import { Action } from "redux";
import { PostRes } from "../../types";
import { SET_FETCH_ERROR, SET_POSTS } from "../const";

export interface PostsState {
  posts: PostRes[];
  error: string | null;
}

export type PostsAction = Action & { payload?: Partial<PostsState> };

const initialState: PostsState = {
  posts: [],
  error: null,
};

export const posts = (state = initialState, { type, payload }: PostsAction) => {
  switch (type) {
    case SET_POSTS:
      return {
        posts: payload?.posts ?? [],
        error: null,
      };
    case SET_FETCH_ERROR:
      return {
        posts: [],
        error: payload?.error ?? "Ошибка",
      };
    default:
      return state;
  }
};
