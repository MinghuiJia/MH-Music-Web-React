/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 18:58:26
 * @LastEditTime: 2022-11-04 15:21:09
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\simi-play-list\index.js
 * @Description:
 */
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { getSizeImg } from "@/utils/format-utils";

import { MHSimiPlayListWrapper } from "./style";

export default memo(function MHSimiPlayList(props) {
  // const { id } = props;
  //redux hooks
  const { simiPlayList = [] } = useSelector((state) => {
    return {
      simiPlayList: state.getIn(["player", "simiPlayList"]),
    };
  }, shallowEqual);
  return (
    <MHSimiPlayListWrapper>
      <div className="simi-play-list-top">
        <span>包含这首歌的歌单</span>
      </div>
      <div className="simi-play-list-content">
        {simiPlayList.map((item, index) => {
          return (
            <div className="simi-play-list-item" key={item.id}>
              <div className="left">
                <img src={getSizeImg(item.coverImgUrl, 50)} alt=""></img>
              </div>
              <div className="right text-nowrap">
                <span className="item-name text-nowrap">{item.name}</span>
                <div className="item-author">
                  <span>by</span>
                  <a href="goto">{item.creator.nickname}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MHSimiPlayListWrapper>
  );
});
