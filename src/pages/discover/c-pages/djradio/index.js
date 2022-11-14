/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:56:28
 * @LastEditTime: 2022-11-14 16:24:22
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHDjradioWrapper } from "./style";
import MHTopLink from "./c-cpns/top-link";
import MHNewRadio from "./c-cpns/new-radio";
import MHRadioRanking from "./c-cpns/radio-ranking";

export default memo(function MHDjradio() {
  return (
    <MHDjradioWrapper className="wrap-v2">
      <MHTopLink />
      <MHNewRadio />
      <MHRadioRanking />
    </MHDjradioWrapper>
  );
});
