/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 22:09:14
 * @LastEditTime: 2022-11-20 16:54:34
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-footer\index.js
 * @Description:
 */
import React, { memo } from "react";

import {
  getOnePlayListAction,
  changeCurrentPageNumAction,
} from "../../store/actionCreators";

import { MHSongsFooterWrapper } from "./style";
import { Pagination } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function MHSongsFooter() {
  // redux hooks
  const { songsTotalCount, currentSongsCategory, currentPageNum } = useSelector(
    (state) => {
      return {
        songsTotalCount: state.getIn(["songs", "songsTotalCount"]),
        currentSongsCategory: state.getIn(["songs", "currentSongsCategory"]),
        currentPageNum: state.getIn(["songs", "currentPageNum"]),
      };
    },
    shallowEqual
  );
  const dispatch = useDispatch();

  // other function
  const changePage = (page, pageSize) => {
    dispatch(
      getOnePlayListAction(
        "hot",
        currentSongsCategory,
        35,
        (page - 1) * pageSize
      )
    );
    dispatch(changeCurrentPageNumAction(page));
    document.querySelector("#song-header").scrollIntoView(true);
  };
  return (
    <MHSongsFooterWrapper>
      <div className="Footer">
        <Pagination
          current={currentPageNum}
          total={songsTotalCount}
          pageSize={35}
          showSizeChanger={false}
          onChange={(page, pageSize) => changePage(page, pageSize)}
        />
      </div>
    </MHSongsFooterWrapper>
  );
});
