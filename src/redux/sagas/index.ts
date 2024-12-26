import { all, spawn } from "redux-saga/effects";
import { watchAuth } from "./authSaga";

export default function* rootSaga() {
  yield spawn(watchAuth);
  //   yield spawn(saga2); // news
}
