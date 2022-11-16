/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 20:48:24
 * @LastEditTime: 2022-11-16 22:03:11
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-recommend\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getSignedSingerAction,
  getHotSingerAction,
} from "../../store/actionCreators";

import { MHArtistRecommendWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import MHArtistCover from "../artist-cover";
import MHArtistName from "../artist-name";

export default memo(function MHArtistRecommend() {
  // redux hooks
  const dispatch = useDispatch();
  const { signedSinger, hotSinger } = useSelector((state) => {
    return {
      signedSinger: state.getIn(["singer", "signedSinger"]),
      hotSinger: state.getIn(["singer", "hotSinger"]),
    };
  }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getSignedSingerAction(80, 0));
    dispatch(getHotSingerAction());
  }, [dispatch]);

  return (
    <MHArtistRecommendWrapper>
      <div className="signed-singer">
        <MHArtistTitle titleName={"入驻歌手"} more={"更多"} />
        <div className="img-cover">
          {signedSinger &&
            signedSinger
              .filter((item, index) => index < 10)
              .map((item, index) => {
                return (
                  <div className="cover-item" key={item.id}>
                    <MHArtistCover info={item} />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="hot-singer">
        <MHArtistTitle titleName={"热门歌手"} more={""} />
        <div className="img-cover">
          {hotSinger &&
            hotSinger
              .filter((item, index) => index < 10)
              .map((item, index) => {
                return (
                  <div className="cover-item" key={item.id}>
                    <MHArtistCover info={item} />
                  </div>
                );
              })}
        </div>
        <div className="name-list">
          {hotSinger &&
            hotSinger
              .filter((item, index) => index >= 10)
              .map((item, index) => {
                return (
                  <div className="name-item" key={item.id}>
                    <MHArtistName info={item} />
                  </div>
                );
              })}
        </div>
      </div>
    </MHArtistRecommendWrapper>
  );
});
