/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 20:08:27
 * @LastEditTime: 2022-11-15 21:29:45
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-link\index.js
 * @Description:
 */
import React, { memo } from "react";

import { singerList } from "@/common/local-data";

import { MHArtistLinkWrapper } from "./style";
import { NavLink } from "react-router-dom";

export default memo(function MHArtistLink(props) {
  const { changeSingerCategory } = props;

  return (
    <MHArtistLinkWrapper>
      <div className="singer-link">
        {singerList.map((item, index) => {
          return (
            <div className="singer-type" key={item.type}>
              <span className="type-name">{item.type}</span>
              {item.links.map((iten, indey) => {
                if (iten.title === "推荐歌手") {
                  return (
                    <NavLink
                      to="/discover/artist"
                      key={iten.title}
                      exact
                      onClick={(e) => changeSingerCategory(iten.title)}
                    >
                      {iten.title}
                    </NavLink>
                  );
                } else if (iten.title === "入驻歌手") {
                  return (
                    <NavLink
                      to="/discover/artist/signed"
                      key={iten.title}
                      exact
                      onClick={(e) => changeSingerCategory(iten.title)}
                    >
                      {iten.title}
                    </NavLink>
                  );
                } else {
                  return (
                    <NavLink
                      to={`/discover/artist/cat/${iten.catCode}`}
                      key={iten.title}
                      exact
                      onClick={(e) => changeSingerCategory(iten.title)}
                    >
                      {iten.title}
                    </NavLink>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </MHArtistLinkWrapper>
  );
});
