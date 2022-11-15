import React, { memo } from "react";
import { MHArtistRecommendWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import { shallowEqual, useSelector } from "react-redux";

export default memo(function MHArtistRecommend() {
  const { singerCategory } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
    };
  }, shallowEqual);
  return (
    <MHArtistRecommendWrapper>
      <MHArtistTitle titleName={singerCategory} more={"更多"} />
    </MHArtistRecommendWrapper>
  );
});
