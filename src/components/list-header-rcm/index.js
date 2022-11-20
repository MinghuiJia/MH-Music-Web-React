/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 16:01:10
 * @LastEditTime: 2022-11-20 15:51:29
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\list-header-rcm\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHListHeaderRCMWrapper } from "./style";

// 推荐页面的入驻歌手和热门歌手header
export default memo(function MHListHeaderRCM(props) {
  const { title, all_link } = props;
  return (
    <MHListHeaderRCMWrapper>
      <span>{title}</span>
      <div className="link-list">
        {all_link.map((item, index) => {
          return <a href="goto" key={item}>{item}</a>;
        })}
      </div>
    </MHListHeaderRCMWrapper>
  );
});
