import { SET_FETCH_ERROR, SET_LOADING, SET_POSTS } from "../const";
import { PostsState } from "../reducers/postsReducer";

export const setPosts = (payload: Partial<PostsState>) => ({
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
