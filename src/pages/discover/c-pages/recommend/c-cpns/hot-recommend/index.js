/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 18:49:05
 * @LastEditTime: 2022-10-23 22:24:23
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\hot-recommend\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

import { MHHotRecommendWrapper } from "./style";
import MHThemeHeaderRCM from "@/components/theme-header-rcm";
import MHThemeSongsCover from "@/components/songs-cover";

export default memo(function MHHotRecommend() {
  // state
  const { hotRecommend } = useSelector((state) => {
    return {
      hotRecommend: state.getIn(["recommend", "hotRecommend"]),
    };
  }, shallowEqual);

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <MHHotRecommendWrapper>
      <MHThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />

      <div className="hot-recommend-list">
        {hotRecommend.map((item, index) => {
          return <MHThemeSongsCover key={item.id} info={item} />;
        })}
      </div>
    </MHHotRecommendWrapper>
  );
});
