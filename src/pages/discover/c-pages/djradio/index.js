/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:56:28
 * @LastEditTime: 2022-11-13 20:41:00
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHDjradioWrapper } from "./style";
import MHTopLink from "./c-cpns/top-link";

export default memo(function MHDjradio() {
  return (
    <MHDjradioWrapper className="wrap-v2">
      <MHTopLink />
    </MHDjradioWrapper>
  );
});
