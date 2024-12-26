import { push } from "connected-react-router";
import {
  call,
  cancel,
  cancelled,
  delay,
  fork,
  put,
  select,
  take,
} from "redux-saga/effects";
import { authApi } from "../../api/authApi";
import {
  REFRESH_STANDBY,
  ROUTES,
  SEC_TO_MS,
  TOKEN_DELAY,
} from "../../utils/const";
import {
  getRefreshToken,
  storeAccessToken,
  storeRefreshToken,
} from "../../utils/functions";
import { clearAuth, setAuth } from "../actions/authActions";
import { LOGIN, LOGIN_ERROR, LOGOUT, TOKEN_REFRESH_ERROR } from "../const";

function* storeTokens({
  accessExpiredAt,
  accessToken,
  refreshToken,
}: {
  accessExpiredAt: number;
  accessToken: string;
  refreshToken: string;
}): unknown {
  yield put(setAuth({ accessExpiredAt }));
  storeAccessToken(accessToken);
  storeRefreshToken(refreshToken);
}

function* refreshToken(): unknown {
  try {
    while (true) {
      yield delay(TOKEN_DELAY);
      const now = Date.now().valueOf();

      const accessExpiredAt: number = yield select(
        ({ auth }) => auth.accessExpiredAt
      );

      if (
        accessExpiredAt &&
        accessExpiredAt * SEC_TO_MS - now <= REFRESH_STANDBY
      ) {
        const data = yield call(authApi.refreshToken, getRefreshToken() ?? "");
        yield storeTokens(data);
      }
    }
  } catch (error) {
    yield put({ type: TOKEN_REFRESH_ERROR, error });
  } finally {
    if (yield cancelled()) {
      yield put(push(ROUTES.Home));
    }
  }
}

function* authorize(email: string, password: string): unknown {
  try {
    const data = yield call(authApi.login, email, password);

    if (!data.accessExpiredAt) throw Error("Ошибка при авторизации");

    yield storeTokens(data);
    yield put(push(ROUTES.Home));
    return data;
  } catch (e) {
    yield put(clearAuth());
    console.error(e);
  } finally {
    if (yield cancelled()) {
      yield put(push(ROUTES.Home));
    }
  }
}

export function* loginFlow(): unknown {
  while (true) {
    const {
      payload: { email, password },
    } = yield take(LOGIN);

    const task = yield fork(authorize, email, password);
    const refreshTask = yield fork(refreshToken);

    const action = yield take([LOGOUT, LOGIN_ERROR, TOKEN_REFRESH_ERROR]);
    if (action.type === LOGOUT || action.type === TOKEN_REFRESH_ERROR)
      yield cancel(task);

    yield cancel(refreshTask);
    yield put(clearAuth());
  }
}
