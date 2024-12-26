import { PostRes } from "../../types";
import { SET_FETCH_ERROR, SET_POSTS, SET_LOADING } from "../const";

export const setPosts = (payload: { posts: PostRes[] }) => ({
  type: SET_POSTS,
  payload,
});

export const setPostsError = (payload: { error: string }) => ({
  type: SET_FETCH_ERROR,
  payload,
});

export const setPostsLoading = (payload: { isLoading: boolean }) => ({
  type: SET_LOADING,
  payload,
});
