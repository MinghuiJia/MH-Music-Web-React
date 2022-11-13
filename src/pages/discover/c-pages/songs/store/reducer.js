/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:23:12
 * @LastEditTime: 2022-11-13 15:36:56
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";
const initState = Map({
  playListCategory: {},
  oneSongsList: [],
  songsTotalCount: 0,
  currentSongsCategory: null,
  currentPageNum: 1,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST_CATEGORY:
      return state.set("playListCategory", action.playListCategory);
    case actionTypes.CHANGE_ONE_SONGS_LIST:
      return state.set("oneSongsList", action.oneSongsList);
    case actionTypes.CHANGE_SONGS_TOTAL_COUNT:
      return state.set("songsTotalCount", action.songsTotalCount);
    case actionTypes.CHANGE_CURRENT_SONGS_CATEGORY:
      return state.set("currentSongsCategory", action.currentSongsCategory);
    case actionTypes.CHANGE_CURRENT_PAGE_NUM:
      return state.set("currentPageNum", action.currentPageNum);
    default:
      return state;
  }
};

export default reducer;
