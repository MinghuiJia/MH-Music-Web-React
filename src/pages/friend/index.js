/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:05:49
 * @LastEditTime: 2022-11-21 15:56:33
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\friend\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHFriendWrapper } from "./style";

export default memo(function MHFriend() {
  return (
    <MHFriendWrapper className="wrap-v2">
      <div className="info">
        <div className="describe">
          你可以关注明星和好友品味他们的私房歌单
          <br />
          通过他们的动态发现更多精彩音乐
        </div>
        <button className="login"></button>
      </div>
    </MHFriendWrapper>
  );
});
