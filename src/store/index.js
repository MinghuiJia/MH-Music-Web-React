/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:51:12
 * @LastEditTime: 2022-10-20 11:54:23
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\store\index.js
 * @Description:
 */
import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import cReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  cReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
