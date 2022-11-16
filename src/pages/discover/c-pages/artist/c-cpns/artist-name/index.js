/*
 * @Author: jiaminghui
 * @Date: 2022-11-16 21:44:22
 * @LastEditTime: 2022-11-16 23:03:14
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-name\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHArtistNameWrapper } from "./style";

export default memo(function MHArtistName(props) {
  const { info } = props;
  return (
    <MHArtistNameWrapper>
      <div className="item-name">
        <a href="goto" className="singer-name text-nowrap">
          {info.name}
        </a>
        <a href="goto">
          <i className="icon sprite_icon2"></i>
        </a>
      </div>
    </MHArtistNameWrapper>
  );
});
