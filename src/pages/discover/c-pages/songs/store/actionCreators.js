/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:23:19
 * @LastEditTime: 2022-11-13 15:38:08
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getPlayListCategory, getOneSongsList } from "@/services/songs";

export const changePlayListCategoryAction = (playListCategory) => {
  return {
    type: actionTypes.CHANGE_PLAY_LIST_CATEGORY,
    playListCategory,
  };
};

export const changeOneSongsListAction = (oneSongsList) => {
  return {
    type: actionTypes.CHANGE_ONE_SONGS_LIST,
    oneSongsList,
  };
};

export const changeSongsTotalCountAction = (songsTotalCount) => {
  return {
    type: actionTypes.CHANGE_SONGS_TOTAL_COUNT,
    songsTotalCount,
  };
};

export const changeCurrentSongsCategoryAction = (currentSongsCategory) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONGS_CATEGORY,
    currentSongsCategory,
  };
};

export const changeCurrentPageNumAction = (currentPageNum) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE_NUM,
    currentPageNum,
  };
};

export const getPlayListCategoryAction = () => {
  return (dispatch, getState) => {
    getPlayListCategory().then((res) => {
      console.log(res);
      dispatch(changePlayListCategoryAction(res));
    });
  };
};

export const getOnePlayListAction = (order, cat, limit, offset) => {
  return (dispatch, getState) => {
    getOneSongsList(order, cat, limit, offset).then((res) => {
      console.log(res);
      dispatch(changeOneSongsListAction(res.playlists));
      dispatch(changeSongsTotalCountAction(res.total));
      dispatch(changeCurrentSongsCategoryAction(cat));
    });
  };
};
