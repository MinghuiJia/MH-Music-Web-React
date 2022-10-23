/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 21:57:32
 * @LastEditTime: 2022-10-23 22:44:08
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\songs-cover\index.js
 * @Description:
 */

import React, { memo } from "react";

import { playCountConvert, getSizeImg } from "@/utils/format-utils";

import { MHThemeSongsCoverWrapper } from "./style";

export default memo(function MHThemeSongsCover(props) {
  const { info } = props;
  return (
    <MHThemeSongsCoverWrapper>
      <div className="content-item">
        <img src={getSizeImg(info.picUrl, 140)} alt="" />
        <div className="info">
          <div className="left">
            <i className="sprite_icon"></i>
            <span>{playCountConvert(info.playCount)}</span>
          </div>
          <div className="right sprite_icon"></div>
        </div>
        <p className="describle">{info.name}</p>
      </div>
    </MHThemeSongsCoverWrapper>
  );
});
