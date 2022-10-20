/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:05:26
 * @LastEditTime: 2022-10-20 11:28:55
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { renderRoutes } from "react-router-config";

import { dicoverMenu } from "@/common/local-data";
import request from "@/services/request";

import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink } from "react-router-dom";

export default memo(function MHDiscover(props) {
  useEffect(() => {
    request({
      url: "/banner",
    }).then((res) => {
      console.log(res);
    });
  }, []);
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
