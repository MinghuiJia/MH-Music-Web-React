/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:45:24
 * @LastEditTime: 2022-11-15 21:49:46
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

const initState = Map({
  singerCategory: "推荐歌手",
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_CATEGORY:
      return state.set("singerCategory", action.singerCategory);
    default:
      return state;
  }
};

export default reducer;
