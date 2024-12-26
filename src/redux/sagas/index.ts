import { spawn } from "redux-saga/effects";
import { loginFlow } from "./authSaga";
import { postsAuth } from "./postsSaga";

export default function* rootSaga() {
  yield spawn(loginFlow);
  yield spawn(postsAuth);
}
