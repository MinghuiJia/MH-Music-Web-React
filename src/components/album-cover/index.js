/*
 * @Author: jiaminghui
 * @Date: 2022-10-25 13:40:54
 * @LastEditTime: 2022-10-27 16:20:36
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\album-cover\index.js
 * @Description:
 */

import React, { memo } from "react";

import { getSizeImg } from "@/utils/format-utils";

import { MHAlbumCoverWrapper } from "./style";

export default memo(function MHAlbumCover(props) {
  const { info, size } = props;

  return (
    <MHAlbumCoverWrapper size={size}>
      <div className="album-item">
        <div className="album-img sprite_covor">
          <img src={getSizeImg(info.picUrl, size.height.slice(0, -2))} alt="" />
          <i className="icon sprite_icon"></i>
        </div>
        <div className="album-info">
          <a href="goto" className="album-name text-nowrap">
            {info.name}
          </a>
          <a href="goto" className="album-artist text-nowrap">
            {info.artist.name}
          </a>
        </div>
      </div>
    </MHAlbumCoverWrapper>
  );
});
