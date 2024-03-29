/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 10:58:02
 * @LastEditTime: 2022-10-30 22:01:48
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\ranking-column-rcm\index.js
 * @Description:
 */
import React, { memo } from "react";

import { getSizeImg } from "@/utils/format-utils";
import { getSongDetailAction } from "@/pages/player/store";

import { MHRankingColumnWrapper } from "./style";
import { useDispatch } from "react-redux";

export default memo(function MHRankingColumn(props) {
  const { tracks, coverImgUrl, name } = props.rankings;

  // redux hooks
  const dispatch = useDispatch();
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <MHRankingColumnWrapper>
      <div className="title-top">
        <a href="goto">
          <img
            className="title-left"
            src={getSizeImg(coverImgUrl, 80)}
            alt=""
            title=""
          ></img>
        </a>
        <div className="title-right">
          <a className="ranking-name" href="goto">
            {name}
          </a>
          <div className="icon">
            <a href="goto">
              <i className="play sprite_02"></i>
            </a>
            <a href="goto">
              <i className="collect sprite_02"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-content">
        {tracks  &&
          tracks.map((item, index) => {
            return (
              index < 10 && (
                <div className="ranking-item" key={item.id}>
                  <div className="ranking-item-left text-nowrap">
                    <span>{index + 1}</span>
                    <a href="goto">{item.name}</a>
                  </div>
                  <div className="ranking-item-right">
                    <i
                      className="item-play sprite_02"
                      onClick={(e) => playMusic(item)}
                    ></i>
                    <i className="item-add sprite_icon2"></i>
                    <i className="item-collect sprite_02"></i>
                  </div>
                </div>
              )
            );
          })}
        <div className="all">
          <a href="goto">查看全部&gt;</a>
        </div>
      </div>
    </MHRankingColumnWrapper>
  );
});
