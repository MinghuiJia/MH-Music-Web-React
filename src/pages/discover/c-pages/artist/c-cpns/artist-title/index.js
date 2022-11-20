/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:31:10
 * @LastEditTime: 2022-11-20 16:58:56
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-title\index.js
 * @Description:
 */
import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { changeSingerCategoryAction } from "../../store/actionCreators";

import { MHArtistTitleWrapper } from "./style";
import { NavLink } from "react-router-dom";

export default memo(function MHArtistTitle(props) {
  const { titleName, more } = props;
  const dispatch = useDispatch();
  return (
    <MHArtistTitleWrapper>
      <div className="title" id="artist-title">
        <span className="name">{titleName}</span>
        {more && (
          <NavLink
            to="/discover/artist/signed"
            onClick={(e) => {
              dispatch(changeSingerCategoryAction("入驻歌手"));
            }}
          >
            {more + " >"}
          </NavLink>
        )}
      </div>
    </MHArtistTitleWrapper>
  );
});
