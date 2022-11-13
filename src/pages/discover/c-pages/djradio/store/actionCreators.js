/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:44:26
 * @LastEditTime: 2022-11-13 21:27:27
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getDjCategoryList } from "@/services/djRadio";

export const changeDjCategoryListAction = (djCategoryList) => {
  return {
    type: actionTypes.CHANGE_DJ_CATEGORY_LIST,
    djCategoryList,
  };
};

export const changeCurrentCategoryAction = (currentCategory) => {
  return {
    type: actionTypes.CHANGE_CURRENT_CATEGORY,
    currentCategory,
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
