/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:18:15
 * @LastEditTime: 2022-11-16 22:05:44
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-signed\index.js
 * @Description:
 */
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { MHArtistSignedWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import MHArtistCover from "../artist-cover";

export default memo(function MHArtistSigned() {
  const { singerCategory, signedSinger } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
      signedSinger: state.getIn(["singer", "signedSinger"]),
    };
  }, shallowEqual);
  return (
    <MHArtistSignedWrapper>
      <div className="signed-singer">
        <MHArtistTitle titleName={singerCategory} more={""} />
        <div className="img-cover">
          {signedSinger &&
            signedSinger.map((item, index) => {
              return (
                <div className="cover-item" key={item.id}>
                  <MHArtistCover info={item} />
                </div>
              );
            })}
        </div>
      </div>
    </MHArtistSignedWrapper>
  );
});
