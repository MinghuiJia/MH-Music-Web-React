/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 19:50:49
 * @LastEditTime: 2022-10-25 17:37:31
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\new-album\index.js
 * @Description:
 */
import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "@/common/constants";

import { MHNewAlbumWrapper } from "./style";
import MHThemeHeaderRCM from "@/components/theme-header-rcm";
import MHAlbumCover from "@/components/album-cover";
import { Carousel } from "antd";

export default memo(function MHNewAlbum() {
  // state hooks
  const { newAblum } = useSelector((state) => {
    return {
      newAblum: state.getIn(["recommend", "newAlbum"]),
    };
  }, shallowEqual);

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);

  const carouselRef = useRef();

  // other var
  const size = { width: "118px", height: "100px", coverPosition: "-570px" };
  return (
    <MHNewAlbumWrapper>
      <MHThemeHeaderRCM title="新碟上架" />
      <div className="n-disk">
        <Carousel autoplay ref={carouselRef} dots={false}>
          <div className="page1">
            {newAblum.map((item, index) => {
              return (
                index < 5 && (
                  <div className="page-item" key={item.id}>
                    <MHAlbumCover info={item} size={size} />
                  </div>
                )
              );
            })}
          </div>
          <div className="page2">
            {newAblum.map((item, index) => {
              return (
                index >= 5 && (
                  <div className="page-item" key={item.id} >
                    <MHAlbumCover info={item} size={size}/>
                  </div>
                )
              );
            })}
          </div>
        </Carousel>
        <button
          className="prev-icon sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></button>
        <button
          className="next-icon sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></button>
      </div>
    </MHNewAlbumWrapper>
  );
});
