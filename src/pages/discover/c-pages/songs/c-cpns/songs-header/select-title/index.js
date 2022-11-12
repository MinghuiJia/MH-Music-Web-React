/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 15:23:10
 * @LastEditTime: 2022-11-12 15:29:24
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\select-title\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHSelectTitleWrapper } from "./style";

export default memo(function MHSelectTitle() {
  return (
    <MHSelectTitleWrapper>
      <button className="all-style sprite_button2">
        <a href="goto">{"全部风格"}</a>
      </button>
    </MHSelectTitleWrapper>
  );
});
