/*
 * @Author: jiaminghui
 * @Date: 2022-10-18 22:17:08
 * @LastEditTime: 2022-10-19 11:15:13
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\App.js
 * @Description:
 */
import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router";

import MHAppHeader from "@/components/app-header";
import MHAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <MHAppHeader />
      {renderRoutes(routes)}
      <MHAppFooter />
    </HashRouter>
  );
});
