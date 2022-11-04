/*
 * @Author: jiaminghui
 * @Date: 2022-10-18 22:17:08
 * @LastEditTime: 2022-11-04 15:45:48
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\App.js
 * @Description:
 */
import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "@/router";
import store from "@/store";

import MHAppHeader from "@/components/app-header";
import MHAppFooter from "@/components/app-footer";
import MHAppPlayerBar from "./pages/player/app-player-bar";
import MHAppPlayerList from "./pages/player/app-player-list";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MHAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>

        <hr style={{ color: "#999999", margin: "0" }} />
        <MHAppFooter />
        <MHAppPlayerBar />
        <MHAppPlayerList />
      </HashRouter>
    </Provider>
  );
});
