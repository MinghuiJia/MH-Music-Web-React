/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:45:24
 * @LastEditTime: 2022-11-16 22:30:35
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

const initState = Map({
  singerCategory: "推荐歌手",
  signedSinger: [],
  hotSinger: [],
  categorySinger: [],
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_CATEGORY:
      return state.set("singerCategory", action.singerCategory);
    case actionTypes.CHANGE_SIGNED_SINGER:
      return state.set("signedSinger", action.signedSinger);
    case actionTypes.CHANGE_HOT_SINGER:
      return state.set("hotSinger", action.hotSinger);
    case actionTypes.CHANGE_CATEGORY_SINGER:
      return state.set("categorySinger", action.categorySinger);
    default:
      return state;
  }
};

export default reducer;
