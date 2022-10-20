/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:52:42
 * @LastEditTime: 2022-10-20 13:03:49
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\store\reducer.js
 * @Description:
 */
import { combineReducers } from "redux";

import { recommendReducer } from "../pages/discover/c-pages/recommend/store";

const reducer = combineReducers({
  recommend: recommendReducer,
});

export default reducer;
