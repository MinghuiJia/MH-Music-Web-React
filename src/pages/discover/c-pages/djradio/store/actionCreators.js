/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:44:26
 * @LastEditTime: 2022-11-14 19:37:45
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getDjCategoryList, getNewRadioList } from "@/services/djRadio";

import { getRadioRankingList } from "@/services2/djRadio";

export const changeDjCategoryListAction = (djCategoryList) => {
  return {
    type: actionTypes.CHANGE_DJ_CATEGORY_LIST,
    djCategoryList,
  };
};

export const changeCurrentCategoryIdAction = (currentCategoryId) => {
  return {
    type: actionTypes.CHANGE_CURRENT_CATEGORY_ID,
    currentCategoryId,
  };
};

export const changeNewRadioListAction = (newRadioList) => {
  return {
    type: actionTypes.CHANGE_NEW_RADIO_LIST,
    newRadioList,
  };
};

export const changeRadioRankingListAction = (radioRankingList) => {
  return {
    type: actionTypes.CHANGE_RADIO_RANKING_LIST,
    radioRankingList,
  };
};

export const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
  };
};

export const changeCurrentPageNumAction = (currentPageNum) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE_NUM,
    currentPageNum,
  };
};

export const getDjCategoryListAction = () => {
  return (dispatch, getState) => {
    getDjCategoryList().then((res) => {
      console.log(res);
      dispatch(changeDjCategoryListAction(res.categories));
    });
  };
};

export const getNewRadioListAction = (type) => {
  return (dispatch, getState) => {
    getNewRadioList(type).then((res) => {
      console.log(res);
      dispatch(changeNewRadioListAction(res.djRadios));
    });
  };
};

export const getRadioRankingListAction = (cateId, limit, offset) => {
  return (dispatch, getState) => {
    getRadioRankingList(cateId, limit, offset).then((res) => {
      console.log(res);
      dispatch(changeRadioRankingListAction(res.djRadios));
      dispatch(changeTotalCountAction(res.count));
    });
  };
};
