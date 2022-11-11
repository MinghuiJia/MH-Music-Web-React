/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:56:49
 * @LastEditTime: 2022-11-11 13:50:52
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\ranking\index.js
 * @Description:
 */
import React, { memo, useCallback, useEffect, useState } from "react";

import { featuredRanking, globalRanking } from "@/common/local-data";
import { getRankingListAction } from "./store/actionCreators";

// import MHRankingMenuRCM from "@/components/ranking-menu-rcm";
import MHRankingMenu from "./c-cpns/ranking-menu";
import MHRankingDetails from "./c-cpns/ranking-details";
import { MHRankingWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function MHRanking() {
  // state hooks
  const [rankingIdx, setRankingIdx] = useState(3); //默认是飙升榜

  // redux hooks
  const dispatch = useDispatch();
  const { rankingList } = useSelector((state) => {
    return {
      rankingList: state.getIn(["ranking", "rankingList"]),
    };
  }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getRankingListAction(rankingIdx));
  }, [rankingIdx, dispatch]);

  const changeRankingIdx = useCallback((newIdx) => {
    setRankingIdx(newIdx);
  }, []);

  // 排行榜的歌曲排名上升下降或新歌需要基于前一天数据，这里暂时无法获取到前一天数据因此暂时无法进行对比

  return (
    <MHRankingWrapper className="wrap-v2">
      <div className="ranking-menu-list">
        <MHRankingMenu
          title={"云音乐特色榜"}
          link_list={featuredRanking}
          idx={rankingIdx}
          changeRankingIdx={changeRankingIdx}
        />
        <MHRankingMenu
          title={"全球媒体榜"}
          link_list={globalRanking}
          idx={rankingIdx}
          changeRankingIdx={changeRankingIdx}
        />
      </div>
      <div className="ranking-details">
        <MHRankingDetails rankingList={rankingList} />
      </div>
    </MHRankingWrapper>
  );
});
