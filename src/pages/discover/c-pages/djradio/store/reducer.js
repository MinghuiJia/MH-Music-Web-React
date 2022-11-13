/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:44:17
 * @LastEditTime: 2022-11-13 21:27:49
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

const initState = Map({
  djCategoryList: [],
  currentCategory: "情感",
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CATEGORY_LIST:
      return state.set("djCategoryList", action.djCategoryList);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    default:
      return state;
  }
};

export default reducer;
