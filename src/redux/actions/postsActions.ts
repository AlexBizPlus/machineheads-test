import { PostRes } from "../../types";
import { SET_FETCH_ERROR, SET_POSTS } from "../const";

export const setPosts = (payload: PostRes[]) => ({
  type: SET_POSTS,
  payload,
});

export const setPostsError = (payload: string) => ({
  type: SET_FETCH_ERROR,
  payload,
});
