/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:57:07
 * @LastEditTime: 2022-10-20 13:47:44
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function MHRecommend(props) {
  useEffect(() => {
    props.getTopBanner();
  }, [props.getTopBanner]);
  return (
    <div>
      <h2>MHRecommend</h2>
      <h2>MHRecommend</h2>
      <h2>MHRecommend</h2>
      <h2>MHRecommend</h2>
      <h2>MHRecommend</h2>
      <h2>MHRecommend: {props.topBanner.length}</h2>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    topBanner: store.recommend.topBanner,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTopBanner: () => {
      dispatch(getTopBannerAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(MHRecommend));
