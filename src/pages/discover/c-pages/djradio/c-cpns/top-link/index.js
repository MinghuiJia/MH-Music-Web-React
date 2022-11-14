/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:37:52
 * @LastEditTime: 2022-11-14 19:59:33
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\top-link\index.js
 * @Description:
 */
import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getDjCategoryListAction,
  changeCurrentCategoryIdAction,
  changeCurrentPageNumAction,
} from "../../store/actionCreators";

import { MHTopLinkWrapper, LinkItem } from "./style";
import { Carousel } from "antd";

export default memo(function MHTopLink() {
  // state hooks
  const [leftActive, setLeftActive] = useState(false);
  // redux hooks
  const dispatch = useDispatch();
  const { djCategoryList, currentCategoryId } = useSelector((state) => {
    return {
      djCategoryList: state.getIn(["djRadio", "djCategoryList"]),
      currentCategoryId: state.getIn(["djRadio", "currentCategoryId"]),
    };
  }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getDjCategoryListAction());
    dispatch(changeCurrentCategoryIdAction(3));
    dispatch(changeCurrentPageNumAction(1));
  }, [dispatch]);

  const carouselRef = useRef();

  // other function
  const changeCategoryId = (id) => {
    dispatch(changeCurrentCategoryIdAction(id));
    dispatch(changeCurrentPageNumAction(1));
  };

  const changePrev = () => {
    if (leftActive) {
      carouselRef.current.prev();
      setLeftActive(false);
    }
  };
  const changeNext = () => {
    if (!leftActive) {
      carouselRef.current.next();
      setLeftActive(true);
    }
  };
  const changeCurrentPage = (current) => {
    console.log(current);
    if (current === 0) {
      setLeftActive(false);
    } else {
      setLeftActive(true);
    }
  };

  return (
    <MHTopLinkWrapper>
      <div className="top-link">
        <Carousel
          effect="fade"
          ref={carouselRef}
          afterChange={(current) => changeCurrentPage(current)}
        >
          <div className="page1">
            {djCategoryList &&
              djCategoryList
                .filter((item, index) => index < 18)
                .map((item, index) => {
                  return (
                    <LinkItem
                      key={item.picUWPId}
                      bgImgUrl={item.picWebUrl}
                      className={currentCategoryId === item.id ? "active" : ""}
                      onClick={(e) => changeCategoryId(item.id)}
                    >
                      <i className="icon"></i>
                      <span>{item.name}</span>
                    </LinkItem>
                  );
                })}
          </div>

          <div className="page2">
            {djCategoryList &&
              djCategoryList
                .filter((item, index) => index >= 18)
                .map((item, index) => {
                  return (
                    <LinkItem
                      key={item.picUWPId}
                      bgImgUrl={item.picWebUrl}
                      className={currentCategoryId === item.id ? "active" : ""}
                      onClick={(e) => changeCategoryId(item.id)}
                    >
                      <i className="icon"></i>
                      <span>{item.name}</span>
                    </LinkItem>
                  );
                })}
            <LinkItem
              bgImgUrl={
                "https://music.163.com/style/web2/img/index_radio/radio_faq.png"
              }
              // onClick={(e) => changeCategory("常见问题")}
            >
              <i className="icon"></i>
              <span>{"常见问题"}</span>
            </LinkItem>
            <LinkItem
              bgImgUrl={
                "https://music.163.com/style/web2/img/index_radio/radio_apply.png"
              }
              // onClick={(e) => changeCategory("我要做主播")}
            >
              <i className="icon"></i>
              <span>{"我要做主播"}</span>
            </LinkItem>
          </div>
        </Carousel>
        <div
          className={"prev" + (leftActive ? " active" : "")}
          onClick={(e) => changePrev()}
        ></div>
        <div
          className={"next" + (leftActive ? "" : " active")}
          onClick={(e) => changeNext()}
        ></div>
      </div>
    </MHTopLinkWrapper>
  );
});
