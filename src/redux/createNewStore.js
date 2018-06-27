import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "src/redux/reducers";
import rootSaga from "src/redux/sagas";
/* 
  eslint
  no-underscore-dangle: "off"
*/

export default function createNewStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      ...reducer
    }),
    {},
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint global-require: "off" */
      store.replaceReducer(require("src/redux/reducers").default);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
