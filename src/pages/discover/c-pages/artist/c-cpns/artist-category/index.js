/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:21:36
 * @LastEditTime: 2022-12-02 17:11:29
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-category\index.js
 * @Description:
 */
import React, { memo, useCallback, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getCategorySingerAction } from "../../store/actionCreators";

import { MHArtistCategoryWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import MHSearchBar from "../search-bar";
import MHArtistCover from "../artist-cover";
import MHArtistName from "../artist-name";

export default memo(function MHArtistCategory(props) {
  const id = props.match.params.id;

  // redux hooks
  const dispatch = useDispatch();
  const { singerCategory, categorySinger } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
      categorySinger: state.getIn(["singer", "categorySinger"]),
    };
  }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getCategorySingerAction(id));
    console.log(clickRef.current.click());
  }, [dispatch, id]);

  const clickRef = useRef();

  // other function
  const changeCurrentInitial = useCallback(
    (initial) => {
      if (initial === "hot") {
        dispatch(getCategorySingerAction(id));
      } else {
        dispatch(getCategorySingerAction(id, initial));
      }
    },
    [id, dispatch]
  );
  return (
    <MHArtistCategoryWrapper>
      <MHArtistTitle titleName={singerCategory} more={""} />
      <MHSearchBar
        changeCurrentInitial={(initial) => changeCurrentInitial(initial)}
        ref={clickRef}
      />

      <div className="singer">
        <div className="img-cover">
          {categorySinger &&
            categorySinger
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
          {categorySinger &&
            categorySinger
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
    </MHArtistCategoryWrapper>
  );
});
