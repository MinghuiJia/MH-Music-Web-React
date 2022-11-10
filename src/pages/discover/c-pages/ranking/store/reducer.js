/*
 * @Author: jiaminghui
 * @Date: 2022-11-10 17:39:06
 * @LastEditTime: 2022-11-10 17:43:44
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\ranking\store\reducer.js
 * @Description:
 */

import * as actionTypes from "./constants";

import { Map } from "immutable";

const initState = Map({
  rankingList: [],
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANKING_LIST:
      return state.set("rankingList", action.rankingList);
    default:
      return state;
  }
};

export default reducer;
