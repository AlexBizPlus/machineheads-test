import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { auth, AuthState } from "./authReducer";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export interface State {
  auth: AuthState;
  router: RouterState;
}

export default rootReducer;
