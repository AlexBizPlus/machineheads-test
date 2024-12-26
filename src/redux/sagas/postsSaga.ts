import { LOCATION_CHANGE } from "connected-react-router";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { postsApi } from "../../api/postsApi";
import { ROUTES } from "../../utils/const";
import { setPosts, setPostsLoading } from "../actions/postsActions";
import { SET_FETCH_ERROR } from "../const";

export function* handlePosts(query: URLSearchParams): unknown {
  yield put(setPostsLoading({ isLoading: true }));
  try {
    const { data: posts, headers } = yield call(postsApi.getPosts, query);
    yield put(setPosts({ posts }));
    console.log(headers);

    // yield put(setPosts({ posts }));
  } catch {
    yield put({
      type: SET_FETCH_ERROR,
      payload: { error: "Error fetching popular news" },
    });
  } finally {
    yield put(setPostsLoading({ isLoading: false }));
  }
}

export function* watchPostsSaga(): unknown {
  const path = yield select(({ router }) => router.location.pathname);
  const query = yield select(({ router }) => router.location.query);

  switch (path) {
    case ROUTES.Posts:
      yield call(handlePosts, new URLSearchParams(query));
      break;

    default:
      break;
  }
}

export function* postsAuth() {
  yield takeLatest(LOCATION_CHANGE, watchPostsSaga);
}
