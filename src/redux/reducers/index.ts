import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import { auth } from "./authReducer";

export const history = createBrowserHistory();

const reducer = combineReducers({
  auth,
  router: connectRouter(history),
});

export default reducer;
