/*
 * @Author: jiaminghui
 * @Date: 2022-11-10 17:39:14
 * @LastEditTime: 2022-11-10 17:49:49
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\ranking\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getRankingList } from "@/services/ranking";
export const changeRankingListAction = (rankingList) => {
  return {
    type: actionTypes.CHANGE_RANKING_LIST,
    rankingList,
  };
};

export const getRankingListAction = (idx) => {
  return (dispatch, getState) => {
    getRankingList(idx).then((res) => {
      console.log(res);
      dispatch(changeRankingListAction(res.playlist));
    });
  };
};
