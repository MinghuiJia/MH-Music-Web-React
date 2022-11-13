/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 15:23:10
 * @LastEditTime: 2022-11-13 14:34:10
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-header\select-title\index.js
 * @Description:
 */
import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { getOnePlayListAction } from "../../../store/actionCreators";

import { MHSelectTitleWrapper } from "./style";

export default memo(function MHSelectTitle() {
  // redux hooks
  const dispatch = useDispatch();

  const getOnePlayList = (order, cat, limit, offset) => {
    dispatch(getOnePlayListAction(order, cat, limit, offset));
  };
  return (
    <MHSelectTitleWrapper>
      <button
        className="all-style sprite_button2"
        onClick={(e) => getOnePlayList("hot", "全部风格", 35, 0)}
      >
        <span>{"全部风格"}</span>
      </button>
    </MHSelectTitleWrapper>
  );
});
