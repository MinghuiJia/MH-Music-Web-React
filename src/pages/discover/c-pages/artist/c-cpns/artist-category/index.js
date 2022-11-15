/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:21:36
 * @LastEditTime: 2022-11-15 21:59:29
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-category\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHArtistCategoryWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import { shallowEqual, useSelector } from "react-redux";

export default memo(function MHArtistCategory(props) {
  const id = props.match.params.id;

  const { singerCategory } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
    };
  }, shallowEqual);
  return (
    <MHArtistCategoryWrapper>
      <MHArtistTitle titleName={singerCategory} more={""} />
      <h2>MHArtistCategory:{id}</h2>
    </MHArtistCategoryWrapper>
  );
});
