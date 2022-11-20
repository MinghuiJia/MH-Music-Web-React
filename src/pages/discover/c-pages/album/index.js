/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:55:44
 * @LastEditTime: 2022-11-20 17:03:43
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\album\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getHotAlbumAction,
  getAllAlbumAction,
  changeCurrentPageAction,
} from "./store/actionCreators";

import { Pagination } from "antd";
import { MHAlbumWrapper } from "./style";
import MHAlbumTitle from "./album-title";
import MHAlbumCover from "@/components/album-cover";

export default memo(function MHAlbum() {
  // redux hooks
  const dispatch = useDispatch();
  const { hotAlbum, allAlbum, albumTotalCount, currentPage } = useSelector(
    (state) => {
      return {
        hotAlbum: state.getIn(["album", "hotAlbum"]),
        allAlbum: state.getIn(["album", "allAlbum"]),
        albumTotalCount: state.getIn(["album", "albumTotalCount"]),
        currentPage: state.getIn(["album", "currentPage"]),
      };
    },
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumAction());
    dispatch(getAllAlbumAction(0, 35));
    dispatch(changeCurrentPageAction(1));
  }, [dispatch]);

  // other var
  const size = { width: "153px", height: "130px", coverPosition: "-845px" };

  const changePage = (page, pageSize) => {
    dispatch(changeCurrentPageAction(page));
    dispatch(getAllAlbumAction((page - 1) * 35), 35);
    document.querySelector("#all-album-title").scrollIntoView(true);
  };
  return (
    <MHAlbumWrapper>
      <div className="album wrap-v2">
        <div className="hot-album">
          <MHAlbumTitle title={"热门新碟"} />
          <div className="album-div">
            {hotAlbum &&
              hotAlbum
                .filter((item, index) => index < 10)
                .map((item, index) => {
                  return (
                    <div className="album-item" key={item.id}>
                      <MHAlbumCover info={item} size={size} />
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="all-album" id="all-album-title">
          <MHAlbumTitle title={"全部新碟"} />
          <div className="album-div">
            {allAlbum &&
              allAlbum.map((item, index) => {
                return (
                  <div className="album-item" key={item.id}>
                    <MHAlbumCover info={item} size={size} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pagination">
          <Pagination
            total={albumTotalCount}
            showSizeChanger={false}
            current={currentPage}
            pageSize={35}
            onChange={(page, pageSize) => {
              changePage(page, pageSize);
            }}
          />
        </div>
      </div>
    </MHAlbumWrapper>
  );
});
