function* handleLogin(action: any) {
  try {
    const data = yield call(
      login,
      action.payload.username,
      action.payload.password
    );

    yield put(setTokens(data.token, data.refreshToken));
    document.cookie = `token=${data.token}; path=/;`;
    document.cookie = `refreshToken=${data.refreshToken}; path=/;`;
  } catch (error) {
    console.error("Login failed:", error);
    // Обработка ошибки (например, показать уведомление)
  }
}

export function* watchAuth() {
  yield takeLatest("LOGIN_REQUEST", handleLogin);
  yield takeLatest("REFRESH_TOKEN_REQUEST", handleRefreshToken);
}
