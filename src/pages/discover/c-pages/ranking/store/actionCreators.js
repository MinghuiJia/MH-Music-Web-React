/*
 * @Author: jiaminghui
 * @Date: 2022-11-10 17:39:14
 * @LastEditTime: 2022-11-11 17:46:18
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\ranking\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import { getRankingList } from "@/services/ranking";
import { getSongDetail } from "@/services/player";
import {
  changePlayListAction,
  getSongDetailAction,
} from "@/pages/player/store/actionCreators";

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

export const changePlayListRankingAction = (rankingList) => {
  return (dispatch, getState) => {
    let newAddPlayList = [];
    if (rankingList) {
      // 因为数组的map方法内异步方法无法同步执行
      async function func() {
        for (let index = 0; index < rankingList.length; index++) {
          const item = rankingList[index];
          let res = null;
          try {
            res = await getSongDetail(item.id);
          } catch (error) {
            console.log(error, "有错");
          }

          const song = res.songs && res.songs[0];
          if (!song) return;
          newAddPlayList.push(song);
          if (rankingList.length === index + 1) {
            console.log(newAddPlayList.length);
            dispatch(changePlayListAction(newAddPlayList));
            dispatch(getSongDetailAction(rankingList[0].id));
          }
        }
      }
      func();
    }
  };
};
