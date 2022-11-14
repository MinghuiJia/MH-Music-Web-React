/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 16:02:11
 * @LastEditTime: 2022-11-14 16:08:35
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\new-radio\c-cpns\radio-cover\index.js
 * @Description:
 */
import React, { memo } from "react";

import { getSizeImg } from "@/utils/format-utils";

import { MHRadioCoverWrapper } from "./style";

export default memo(function MHRadioCover(props) {
  const { info } = props;
  return (
    <MHRadioCoverWrapper>
      <div className="img-cover">
        <img src={getSizeImg(info.picUrl, 150)} alt=""></img>
      </div>
      <div className="radio-info">
        <span className="radio-name">{info.name}</span>
        <span className="radio-describe">{info.rcmdtext}</span>
      </div>
    </MHRadioCoverWrapper>
  );
});
