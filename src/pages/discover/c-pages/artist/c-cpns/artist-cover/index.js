/*
 * @Author: jiaminghui
 * @Date: 2022-11-16 20:36:23
 * @LastEditTime: 2022-11-16 23:05:41
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-cover\index.js
 * @Description:
 */
import React, { memo } from "react";

import { getSizeImg } from "@/utils/format-utils";

import { MHArtistCoverWrapper } from "./style";

export default memo(function MHArtistCover(props) {
  const { info } = props;
  return (
    <MHArtistCoverWrapper>
      <div className="singer-item">
        <div className="img">
          <img src={getSizeImg(info.img1v1Url, 130)} alt="" />
        </div>
        <div className="singer-info">
          <a href="goto" className="singer-name text-nowrap">
            {info.name}
          </a>
          <a href="goto">
            <i className="icon sprite_icon2"></i>
          </a>
        </div>
      </div>
    </MHArtistCoverWrapper>
  );
});
