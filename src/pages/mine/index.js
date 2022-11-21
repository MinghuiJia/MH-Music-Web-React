/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:06:09
 * @LastEditTime: 2022-11-21 15:30:07
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\mine\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHMineWrapper } from "./style";

export default memo(function MHMine() {
  return (
    <MHMineWrapper className="wrap-v2">
      <div className="info">
        <button className="login"></button>
      </div>
    </MHMineWrapper>
  );
});
