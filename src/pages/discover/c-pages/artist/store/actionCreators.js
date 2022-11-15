/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:45:31
 * @LastEditTime: 2022-11-15 21:50:44
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";

export const changeSingerCategoryAction = (singerCategory) => {
  return {
    type: actionTypes.CHANGE_SINGER_CATEGORY,
    singerCategory,
  };
};
