/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:56:49
 * @LastEditTime: 2022-11-10 19:44:06
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
