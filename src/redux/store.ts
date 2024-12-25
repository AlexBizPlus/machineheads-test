import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
// import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose;

const configureStore = (preloadedState?: object) =>
  createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});

// sagaMiddleware.run(rootSaga);

export default store;
