/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:01:29
 * @LastEditTime: 2022-10-19 16:03:17
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\app-header\index.js
 * @Description:
 */
import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { Input } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

export default memo(function HYAppHeader() {
  const selectLink = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact to={item.link}>
          {item.title}
          <i className="sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>{selectLink(item, index)}</div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <button className="center">创作者中心</button>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      {/* <NavLink to="/" exact>
        发现音乐
      </NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">关注</NavLink> */}
    </HeaderWrapper>
  );
});
