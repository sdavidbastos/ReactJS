import { createStore } from "redux";

import rootReducer from './reduces/index'

const store = createStore(rootReducer);

export default store;
