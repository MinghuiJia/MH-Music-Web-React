/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:44:17
 * @LastEditTime: 2022-11-14 19:36:44
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

const initState = Map({
  djCategoryList: [],
  currentCategoryId: 3,
  newRadioList: [],
  radioRankingList: [],
  totalCount: 0,
  currentPageNum: 1,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CATEGORY_LIST:
      return state.set("djCategoryList", action.djCategoryList);
    case actionTypes.CHANGE_CURRENT_CATEGORY_ID:
      return state.set("currentCategoryId", action.currentCategoryId);
    case actionTypes.CHANGE_NEW_RADIO_LIST:
      return state.set("newRadioList", action.newRadioList);
    case actionTypes.CHANGE_RADIO_RANKING_LIST:
      return state.set("radioRankingList", action.radioRankingList);
    case actionTypes.CHANGE_TOTAL_COUNT:
      return state.set("totalCount", action.totalCount);
    case actionTypes.CHANGE_CURRENT_PAGE_NUM:
      return state.set("currentPageNum", action.currentPageNum);
    default:
      return state;
  }
};

export default reducer;
