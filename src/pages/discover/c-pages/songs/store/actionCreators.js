/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:23:19
 * @LastEditTime: 2022-11-12 21:49:29
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
    });
  };
};
