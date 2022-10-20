/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:05:26
 * @LastEditTime: 2022-10-20 11:08:22
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\index.js
 * @Description:
 */
import React, { memo } from "react";

import { dicoverMenu } from "@/common/local-data";

import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function MHDiscover(props) {
  return (
    <DiscoverWrapper>
      {/* 这里一定需要包裹div */}
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <NavLink to={item.link} key={item.title}>
                {item.title}
              </NavLink>
            );
          })}
        </TopMenu>
      </div>

      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  );
});
