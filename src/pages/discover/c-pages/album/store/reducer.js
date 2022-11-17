/*
 * @Author: jiaminghui
 * @Date: 2022-11-17 20:16:43
 * @LastEditTime: 2022-11-17 20:57:17
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\album\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

const initState = Map({
  hotAlbum: [],
  allAlbum: [],
  albumTotalCount: 0,
  currentPage: 1,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM:
      return state.set("hotAlbum", action.hotAlbum);
    case actionTypes.CHANGE_ALL_ALBUM:
      return state.set("allAlbum", action.allAlbum);
    case actionTypes.CHANGE_ALBUM_TOTAL_COUNT:
      return state.set("albumTotalCount", action.albumTotalCount);
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.currentPage);
    default:
      return state;
  }
};

export default reducer;
