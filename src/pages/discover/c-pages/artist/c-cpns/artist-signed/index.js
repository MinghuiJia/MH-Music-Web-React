/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:18:15
 * @LastEditTime: 2022-11-15 21:59:53
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-signed\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHArtistSignedWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import { shallowEqual, useSelector } from "react-redux";

export default memo(function MHArtistSigned() {
  const { singerCategory } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
    };
  }, shallowEqual);
  return (
    <MHArtistSignedWrapper>
      <MHArtistTitle titleName={singerCategory} more={""} />
    </MHArtistSignedWrapper>
  );
});
