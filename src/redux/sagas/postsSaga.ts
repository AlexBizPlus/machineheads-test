import { LOCATION_CHANGE } from "connected-react-router";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { SET_FETCH_ERROR, SET_LOADING } from "../const";
import { ROUTES } from "../../utils/const";
import { getPosts } from "../../api/postsApi";

export function* handlePosts(query: URLSearchParams): unknown {
  try {
    const data = yield call(getPosts, query);
    // yield put(setPosts(hits));
    console.log("Posts", data);
  } catch {
    yield put({
      type: SET_FETCH_ERROR,
      payload: "Error fetching popular news",
    });
  }
}

export function* watchPostsSaga(): unknown {
  yield put({ type: SET_LOADING, payload: true });
  const path = yield select(({ router }) => router.location.pathname);
  const query = yield select(({ router }) => router.location.query);

  switch (path) {
    case ROUTES.Posts:
      yield call(handlePosts, new URLSearchParams(query));
      break;

    default:
      break;
  }

  yield put({ type: SET_LOADING, payload: false });
}

export function* postsAuth() {
  yield takeLatest(LOCATION_CHANGE, watchPostsSaga);
}
