/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:57:24
 * @LastEditTime: 2022-11-12 22:11:33
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHSongsWrapper } from "./style";
import MHSongsHeader from "./c-cpns/songs-header";
import MHSongsContent from "./c-cpns/songs-content";
import MHSongsFooter from "./c-cpns/songs-footer";

export default memo(function MHSongs() {
  return (
    <MHSongsWrapper className="wrap-v2">
      <MHSongsHeader />
      <MHSongsContent />
      <MHSongsFooter />
    </MHSongsWrapper>
  );
});
