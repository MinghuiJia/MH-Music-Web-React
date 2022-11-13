/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 21:27:30
 * @LastEditTime: 2022-11-13 13:42:47
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-content\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getOnePlayListAction } from "../../store/actionCreators";

import { MHSongsContentWrapper } from "./style";
import MHThemeSongsCover from "@/components/songs-cover";

export default memo(function MHSongsContent() {
  // redux hooks
  const dispatch = useDispatch();
  const { oneSongsList } = useSelector((state) => {
    return {
      oneSongsList: state.getIn(["songs", "oneSongsList"]),
    };
  }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getOnePlayListAction("hot", "全部", 35, 0));
  }, [dispatch]);
  return (
    <MHSongsContentWrapper>
      {oneSongsList &&
        oneSongsList.map((item, index) => {
          return (
            <div className="song-item" key={item.id}>
              <MHThemeSongsCover info={item} />
            </div>
          );
        })}
    </MHSongsContentWrapper>
  );
});
