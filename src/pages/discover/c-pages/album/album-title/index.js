/*
 * @Author: jiaminghui
 * @Date: 2022-11-17 20:07:18
 * @LastEditTime: 2022-11-17 20:09:26
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\album\album-title\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHAlbumTitleWrapper } from "./style";

export default memo(function MHAlbumTitle(props) {
  const { title } = props;
  return (
    <MHAlbumTitleWrapper>
      <div className="album-title">
        <span>{title}</span>
      </div>
    </MHAlbumTitleWrapper>
  );
});
