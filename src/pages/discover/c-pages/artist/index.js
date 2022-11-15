/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:56:10
 * @LastEditTime: 2022-11-15 22:07:13
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\index.js
 * @Description:
 */
import React, { memo, useCallback, useEffect, useState } from "react";

import { changeSingerCategoryAction } from "./store/actionCreators";

import { MHArtistWrapper } from "./style";
import MHArtistLink from "./c-cpns/artist-link";
import { Route, Switch } from "react-router-dom";
import MHArtistRecommend from "./c-cpns/artist-recommend";
import MHArtistSigned from "./c-cpns/artist-signed";
import MHArtistCategory from "./c-cpns/artist-category";
import { useDispatch } from "react-redux";

export default memo(function MHArtist() {
  // state hooks
  const [singerCategory, setSingerCategory] = useState("推荐歌手");

  const changeSingerCategory = useCallback(
    (cat) => {
      setSingerCategory(cat);
    },
    [setSingerCategory]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeSingerCategoryAction(singerCategory));
  }, [singerCategory, dispatch]);
  return (
    <MHArtistWrapper className="wrap-v2">
      <MHArtistLink
        changeSingerCategory={(cat) => {
          changeSingerCategory(cat);
        }}
        singerCategory={singerCategory}
      />
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
