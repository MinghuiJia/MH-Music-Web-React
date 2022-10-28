/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 20:04:32
 * @LastEditTime: 2022-10-28 20:55:19
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\simi-song\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getSimiSongAction } from "../store/actionCreators";

import { MHSimiSongWrapper } from "./style";

export default memo(function MHSimiSong(props) {
  const { id } = props;
  // redux hooks
  const { simiSong = [] } = useSelector((state) => {
    return {
      simiSong: state.getIn(["player", "simiSong"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSimiSongAction(id));
  }, [dispatch, id]);
  return (
    <MHSimiSongWrapper>
      <div className="simi-song-list-top">
        <span>相似歌曲</span>
      </div>
      <div className="simi-song-list-content">
        {simiSong.map((item, index) => {
          return (
            <div className="simi-song-list-item" key={item.id}>
              <div className="left">
                <a className="song-name text-nowrap" href="goto">
                  {item.name}
                </a>
                <div className="artists text-nowrap">
                  {item.artists.map((iten, indey) => {
                    return (
                      <a href="goto" key={iten.id}>
                        {iten.name +
                          (indey !== item.artists.length - 1 ? "/" : "")}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="right">
                <i className="play sprite_icon3"></i>
                <i className="add sprite_icon3"></i>
              </div>
            </div>
          );
        })}
      </div>
    </MHSimiSongWrapper>
  );
});
