/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 18:34:03
 * @LastEditTime: 2022-11-14 19:50:59
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\radio-ranking\c-cpns\radio-cover\index.js
 * @Description:
 */
import React, { memo } from "react";

import { getSizeImg } from "@/utils/format-utils";

import { MHRadioCoverWrapper } from "./style";

export default memo(function MHRadioCover(props) {
  const { info } = props;
  return (
    <MHRadioCoverWrapper>
      <div className="cover-item">
        <div className="left">
          <img src={getSizeImg(info.picUrl, 120)} alt="" />
        </div>
        <div className="right">
          <div className="cover-name">
            <span className="text-nowrap">{info.name}</span>
          </div>
          <div className="cover-dj-name">
            <i className="icon sprite_icon2"></i>
            <span>{info.dj.nickname}</span>
          </div>
          <div className="cover-dj-info">
            <span className="dj-programCount">共{info.programCount}期</span>
            <span className="dj-subCount">订阅{info.subCount}次</span>
          </div>
        </div>
      </div>
    </MHRadioCoverWrapper>
  );
});
