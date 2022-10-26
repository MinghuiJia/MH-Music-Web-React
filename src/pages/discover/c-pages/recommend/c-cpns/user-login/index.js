/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 15:34:55
 * @LastEditTime: 2022-10-26 15:52:22
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\user-login\index.js
 * @Description: 
 */
import React, { memo } from "react";

import { MHLoginWrapper } from "./style";

export default memo(function MHLogin() {
  return (
    <MHLoginWrapper className="sprite_02">
      <p className="login-info">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <button className="login-btn">用户登录</button>
    </MHLoginWrapper>
  );
});
