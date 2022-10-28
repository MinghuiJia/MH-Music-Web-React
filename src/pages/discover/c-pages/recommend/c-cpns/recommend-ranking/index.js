/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 20:04:09
 * @LastEditTime: 2022-10-28 21:37:01
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\recommend-ranking\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getRankingsAction } from "../../store/actionCreators";

import { MHRecommendRankingWrapper } from "./style";
import MHThemeHeaderRCM from "@/components/theme-header-rcm";
import MHRankingColumn from "@/components/ranking-column-rcm";

export default memo(function MHRecommendRanking() {
  // redux hooks
  const { newSongsRanking, oriSongsRanking, fastRanking } = useSelector(
    (state) => {
      return {
        newSongsRanking: state.getIn(["recommend", "newSongsRanking"]),
        oriSongsRanking: state.getIn(["recommend", "oriSongsRanking"]),
        fastRanking: state.getIn(["recommend", "fastRanking"]),
      };
    },
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    // 新歌榜请求数据
    dispatch(getRankingsAction(0));
    // 原创榜请求数据
    dispatch(getRankingsAction(1));
    // 飙升榜请求数据
    dispatch(getRankingsAction(3));
  }, [dispatch]);

  return (
    <MHRecommendRankingWrapper>
      <MHThemeHeaderRCM title="榜单" />
      <div className="content">
        <div className="left">
          <MHRankingColumn rankings={fastRanking} />
        </div>
        <div className="middle">
          <MHRankingColumn rankings={newSongsRanking} />
        </div>
        <div className="right">
          <MHRankingColumn rankings={oriSongsRanking} />
        </div>
      </div>
    </MHRecommendRankingWrapper>
  );
});
