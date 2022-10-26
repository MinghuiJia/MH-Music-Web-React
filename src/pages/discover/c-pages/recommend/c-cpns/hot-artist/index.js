/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 16:12:01
 * @LastEditTime: 2022-10-26 17:32:50
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\hot-artist\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotArtistAction } from "../../store/actionCreators";
import { getSizeImg } from "@/utils/format-utils";

import { MHHotArtistWrapper } from "./style";
import MHListHeaderRCM from "@/components/list-header-rcm";

export default memo(function MHHotArtist() {
  // redux hooks
  const { hotArtist } = useSelector((state) => {
    return {
      hotArtist: state.getIn(["recommend", "hotArtist"]),
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotArtistAction());
  }, [dispatch]);

  return (
    <MHHotArtistWrapper>
      <MHListHeaderRCM title={"热门歌手"} all_link={[]} />
      <div className="hot-artist-list">
        {hotArtist.map((item, index) => {
          return (
            <div className="hot-artist-item" key={item.id}>
              <img src={getSizeImg(item.picUrl, 40)} alt=""></img>
              <div className="hot-artist-info">
                <a href="goto" className="hot-artist-name">
                  {item.name}
                </a>
                <span className="hot-artist-describe"></span>
              </div>
            </div>
          );
        })}
      </div>
    </MHHotArtistWrapper>
  );
});
