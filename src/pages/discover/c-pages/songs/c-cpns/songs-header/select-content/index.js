/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:15:24
 * @LastEditTime: 2022-11-14 20:00:55
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-header\select-content\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getPlayListCategoryAction,
  getOnePlayListAction,
  changeCurrentPageNumAction,
} from "../../../store/actionCreators";

import { MHSelectContentWrapper } from "./style";

export default memo(function MHSelectContent() {
  // redux hooks
  const dispatch = useDispatch();
  const { playListCategory, currentSongsCategory } = useSelector((state) => {
    return {
      playListCategory: state.getIn(["songs", "playListCategory"]),
      currentSongsCategory: state.getIn(["songs", "currentSongsCategory"]),
    };
  }, shallowEqual);

  // other hoos
  useEffect(() => {
    dispatch(getPlayListCategoryAction());
  }, [dispatch]);

  const getOnePlayList = (order, cat, limit, offset) => {
    dispatch(getOnePlayListAction(order, cat, limit, offset));
    dispatch(changeCurrentPageNumAction(1));
  };

  const categoriesKey =
    playListCategory &&
    playListCategory.categories &&
    Object.keys(playListCategory.categories);
  console.log(categoriesKey);
  return (
    <MHSelectContentWrapper>
      <div className="content">
        {categoriesKey &&
          categoriesKey.map((item, index) => {
            return (
              <div className="item" key={item}>
                <div className="left-item">
                  <i className="style-icon sprite_icon2"></i>
                  <span>{playListCategory.categories[item]}</span>
                </div>
                <div className="right-item">
                  {playListCategory &&
                    playListCategory.sub &&
                    playListCategory.sub.map((iten, indey) => {
                      return iten.category - 0 === item - 0 ? (
                        <div
                          className="each-category"
                          key={iten.name + iten.category}
                        >
                          <button
                            onClick={(e) =>
                              getOnePlayList("hot", iten.name, 35, 0)
                            }
                            className={
                              currentSongsCategory === iten.name ? "active" : ""
                            }
                          >
                            {iten.name}
                          </button>
                          <span>|</span>
                        </div>
                      ) : (
                        ""
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
      <div className="content-right"></div>
    </MHSelectContentWrapper>
  );
});
