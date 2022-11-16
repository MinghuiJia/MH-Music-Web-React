/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:45:31
 * @LastEditTime: 2022-11-16 22:33:11
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import {
  getSignedSinger,
  getHotSinger,
  getCategorySinger,
} from "@/services/singer";

export const changeSingerCategoryAction = (singerCategory) => {
  return {
    type: actionTypes.CHANGE_SINGER_CATEGORY,
    singerCategory,
  };
};

export const changeSignedSingerAction = (signedSinger) => {
  return {
    type: actionTypes.CHANGE_SIGNED_SINGER,
    signedSinger,
  };
};

export const changeHotSingerAction = (hotSinger) => {
  return {
    type: actionTypes.CHANGE_HOT_SINGER,
    hotSinger,
  };
};

export const changeCategorySingerAction = (categorySinger) => {
  return {
    type: actionTypes.CHANGE_CATEGORY_SINGER,
    categorySinger,
  };
};

export const getSignedSingerAction = (limit, offset) => {
  return (dispatch, getState) => {
    getSignedSinger(limit, offset).then((res) => {
      console.log(res);
      dispatch(changeSignedSingerAction(res.artists));
    });
  };
};

export const getHotSingerAction = () => {
  return (dispatch, getState) => {
    getHotSinger().then((res) => {
      console.log(res);
      dispatch(changeHotSingerAction(res.artists));
    });
  };
};

export const getCategorySingerAction = (cat, initial) => {
  return (dispatch, getState) => {
    getCategorySinger(cat, initial).then((res) => {
      console.log(res);
      dispatch(changeCategorySingerAction(res.artists));
    });
  };
};
