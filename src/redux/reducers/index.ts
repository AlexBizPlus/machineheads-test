import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { auth, AuthState } from "./authReducer";
import { posts, PostsState } from "./postsReducer";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    posts,
  });

export interface State {
  auth: AuthState;
  posts: PostsState;
  router: RouterState;
}

export default rootReducer;
