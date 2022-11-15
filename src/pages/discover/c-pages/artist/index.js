/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:56:10
 * @LastEditTime: 2022-11-15 22:46:55
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { changeSingerCategoryAction } from "./store/actionCreators";

import { MHArtistWrapper } from "./style";
import MHArtistLink from "./c-cpns/artist-link";
import { Route, Switch } from "react-router-dom";
import MHArtistRecommend from "./c-cpns/artist-recommend";
import MHArtistSigned from "./c-cpns/artist-signed";
import MHArtistCategory from "./c-cpns/artist-category";

export default memo(function MHArtist() {
  // redux hooks
  const dispatch = useDispatch();
  const { singerCategory } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(changeSingerCategoryAction("推荐歌手"));
  }, [dispatch]);

  return (
    <MHArtistWrapper className="wrap-v2">
      <MHArtistLink singerCategory={singerCategory} />
      <Switch>
        <Route path="/discover/artist" exact component={MHArtistRecommend} />
        <Route path="/discover/artist/signed" component={MHArtistSigned} />
        <Route
          path="/discover/artist/cat/:id"
          exact
          component={MHArtistCategory}
        />
      </Switch>
    </MHArtistWrapper>
  );
});
