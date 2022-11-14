/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 15:26:45
 * @LastEditTime: 2022-11-14 16:14:30
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\new-radio\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewRadioListAction } from "../../store/actionCreators";

import { MHNewRadioWrapper } from "./style";
import MHRadioCover from "./c-cpns/radio-cover";

export default memo(function MHNewRadio() {
  // redux hooks
  const { currentCategoryId, newRadioList } = useSelector((state) => {
    return {
      currentCategoryId: state.getIn(["djRadio", "currentCategoryId"]),
      newRadioList: state.getIn(["djRadio", "newRadioList"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getNewRadioListAction(currentCategoryId));
  }, [dispatch, currentCategoryId]);

  return (
    <MHNewRadioWrapper>
      <div className="new-radio-title">
        <span>{"优秀新电台"}</span>
      </div>
      <div className="new-radio-content">
        {newRadioList &&
          newRadioList
            .filter((item, index) => index < 5)
            .map((item, index) => {
              return (
                <div className="new-radio-item" key={item.id}>
                  <MHRadioCover info={item} />
                </div>
              );
            })}
      </div>
    </MHNewRadioWrapper>
  );
});
