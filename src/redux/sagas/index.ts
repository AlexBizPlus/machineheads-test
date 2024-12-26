import { spawn } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
import { postsAuth } from "./postsSaga";

export default function* rootSaga() {
  yield spawn(watchAuth);
  yield spawn(postsAuth);
}
