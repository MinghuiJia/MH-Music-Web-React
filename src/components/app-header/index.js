/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:01:29
 * @LastEditTime: 2022-10-19 11:18:41
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\app-header\index.js
 * @Description:
 */
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function HYAppHeader() {
  return (
    <div>
      <NavLink to="/" exact>发现音乐</NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">关注</NavLink>
    </div>
  );
});
