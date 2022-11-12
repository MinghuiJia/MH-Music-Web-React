/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 22:09:14
 * @LastEditTime: 2022-11-12 22:20:54
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-footer\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHSongsFooterWrapper } from "./style";
import { Pagination } from "antd";

export default memo(function MHSongsFooter() {
  return (
    <MHSongsFooterWrapper>
      <div className="Footer">
        <Pagination
          defaultCurrent={1}
          total={642}
          defaultPageSize={35}
          showSizeChanger={false}
        />
      </div>
    </MHSongsFooterWrapper>
  );
});
