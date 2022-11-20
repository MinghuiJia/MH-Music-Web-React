/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 16:22:27
 * @LastEditTime: 2022-11-20 16:56:39
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\radio-ranking\index.js
 * @Description:
 */
import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  changeCurrentPageNumAction,
  getRadioRankingListAction,
} from "../../store/actionCreators";

import { MHRadioRankingWrapper } from "./style";
import MHRadioCover from "./c-cpns/radio-cover";
import { Pagination } from "antd";

export default memo(function MHRadioRanking() {
  // redux hooks
  const dispatch = useDispatch();
  const { currentCategoryId, radioRankingList, totalCount, currentPageNum } =
    useSelector((state) => {
      return {
        currentCategoryId: state.getIn(["djRadio", "currentCategoryId"]),
        radioRankingList: state.getIn(["djRadio", "radioRankingList"]),
        totalCount: state.getIn(["djRadio", "totalCount"]),
        currentPageNum: state.getIn(["djRadio", "currentPageNum"]),
      };
    }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(
      getRadioRankingListAction(
        currentCategoryId,
        19,
        (currentPageNum - 1) * 19
      )
    );
  }, [dispatch, currentCategoryId, currentPageNum]);

  const changeCurrentPage = useCallback(
    (page, pageSize) => {
      dispatch(changeCurrentPageNumAction(page));
      document.querySelector("#radio-ranking").scrollIntoView(true);
    },
    [dispatch]
  );
  return (
    <MHRadioRankingWrapper>
      <div className="radio-ranking-title" id="radio-ranking">
        <div className="left">
          <span>{"电台排行榜"}</span>
        </div>
        <div className="right">
          <span className="fast-ranking">{"上升最快"}</span>
          <span className="divider">|</span>
          <span className="hot-ranking">{"最热电台"}</span>
        </div>
      </div>
      <div className="radio-ranking-content">
        {radioRankingList &&
          radioRankingList.map((item, index) => {
            return (
              <div className="radio-ranking-item" key={item.id}>
                <MHRadioCover info={item} />
              </div>
            );
          })}
      </div>
      <div className="radio-ranking-bottom">
        <Pagination
          total={totalCount}
          pageSize={22}
          showSizeChanger={false}
          current={currentPageNum}
          onChange={(page, pageSize) => {
            changeCurrentPage(page, pageSize);
          }}
        />
      </div>
    </MHRadioRankingWrapper>
  );
});
