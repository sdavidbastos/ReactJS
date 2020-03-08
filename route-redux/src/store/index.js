import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

const middleWares = [thunk, routerMiddleware(history)];

const store = createStore(
  connectRouter(history)(() => {}),
  applyMiddleware(...middleWares)
);

export default store;
