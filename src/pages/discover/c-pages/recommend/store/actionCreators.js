/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:58:16
 * @LastEditTime: 2022-10-26 10:52:01
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\store\actionCreators.js
 * @Description:
 */
import * as actionTypes from "./constants";
import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getRankings,
} from "@/services/recommend";

// action里面的函数命名都需要加一个Action，用于区分这个函数是用于dispatch的action函数

export const changeTopBannerAction = (banner) => ({
  type: actionTypes.CHANGE_BANNER,
  banner,
});

export const changeHotRecommendAction = (hotRecommend) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend,
});

export const changeNewAlbumAction = (newAlbum) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum,
  };
};

export const changeNewSongsRankingAction = (newSongsRanking) => {
  return {
    type: actionTypes.CHANGE_NEW_SONGS_RANKING,
    newSongsRanking,
  };
};

export const changeFastRankingAction = (fastRanking) => {
  return {
    type: actionTypes.CHANGE_FAST_RANKING,
    fastRanking,
  };
};

export const changeOriSongsRankingAction = (oriSongsRanking) => {
  return {
    type: actionTypes.CHANGE_ORI_SONGS_RANKING,
    oriSongsRanking,
  };
};

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

export const getNewAlbumAction = (limit) => {
  return (dispatch, getState) => {
    getNewAlbum(limit).then((res) => {
      console.log(res);
      dispatch(changeNewAlbumAction(res.albums));
    });
  };
};

export const getRankingsAction = (idx) => {
  return (dispatch, getState) => {
    getRankings(idx).then((res) => {
      console.log(res);
      // 新歌榜
      if (idx === 0) dispatch(changeNewSongsRankingAction(res.playlist));
      // 原创榜
      if (idx === 2) dispatch(changeOriSongsRankingAction(res.playlist));
      // 飙升榜
      if (idx === 3) dispatch(changeFastRankingAction(res.playlist));
    });
  };
};
