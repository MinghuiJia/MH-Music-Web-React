/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:58:16
 * @LastEditTime: 2022-10-23 20:50:27
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getTopBanner } from "@/services/recommend";
import { getHotRecommend } from "@/services/recommend";

// action里面的函数命名都需要加一个Action，用于区分这个函数是用于dispatch的action函数

export const changeTopBannerAction = (banner) => ({
  type: actionTypes.CHANGE_BANNER,
  banner,
});

export const changeHotRecommendAction = (hotRecommend) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend,
});

export const getTopBannerAction = () => {
  return (dispatch, getState) => {
    getTopBanner().then((res) => {
      console.log(res);
      dispatch(changeTopBannerAction(res.banners));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch, getState) => {
    getHotRecommend(limit).then((res) => {
      console.log(res);
      dispatch(changeHotRecommendAction(res.result));
    });
  };
};
