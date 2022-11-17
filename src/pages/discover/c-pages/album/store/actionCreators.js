/*
 * @Author: jiaminghui
 * @Date: 2022-11-17 20:16:57
 * @LastEditTime: 2022-11-17 21:00:51
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\album\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getHotAlbum, getAllAlbum } from "@/services2/album";

export const changeHotAlbumAction = (hotAlbum) => {
  return {
    type: actionTypes.CHANGE_HOT_ALBUM,
    hotAlbum,
  };
};

export const changeAllAlbumAction = (allAlbum) => {
  return {
    type: actionTypes.CHANGE_ALL_ALBUM,
    allAlbum,
  };
};

export const changeAlbumTotalCountAction = (albumTotalCount) => {
  return {
    type: actionTypes.CHANGE_ALBUM_TOTAL_COUNT,
    albumTotalCount,
  };
};

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
  };
};

export const getHotAlbumAction = () => {
  return (dispatch, getState) => {
    getHotAlbum().then((res) => {
      console.log(res);
      dispatch(changeHotAlbumAction(res.albums));
    });
  };
};

export const getAllAlbumAction = (offset, limit) => {
  return (dispatch, getState) => {
    getAllAlbum(offset, limit).then((res) => {
      console.log(res);
      dispatch(changeAllAlbumAction(res.albums));
      dispatch(changeAlbumTotalCountAction(res.total));
    });
  };
};
