import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { login } from "../../api/authApi";
import { ROUTES } from "../../utils/const";
import { storeAccessToken, storeRefreshToken } from "../../utils/functions";
import { setAuth } from "../actions/authActions";
import { LOGIN } from "../const";
import { push } from "connected-react-router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* handleLogin(action: any): unknown {
  try {
    const data = yield call(
      login,
      action.payload.email,
      action.payload.password
    );
    yield put(setAuth({ accessExpiredAt: data.accessExpiredAt }));
    storeAccessToken(data.accessToken);
    storeRefreshToken(data.refreshToken);
    yield put(push(ROUTES.Home));
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN, handleLogin);
}

export default function* rootSaga() {
  yield spawn(watchAuth);
}
