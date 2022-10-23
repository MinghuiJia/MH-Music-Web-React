/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 19:06:32
 * @LastEditTime: 2022-10-23 19:56:58
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\theme-header-rcm\index.js
 * @Description:
 */
import React, { memo } from "react";
import PropTypes from "prop-types";

import { MHThemeHeaderRCMWrapper } from "./style";

const MHThemeHeaderRCM = memo((props) => {
  const { title, keywords } = props;
  return (
    <MHThemeHeaderRCMWrapper>
      <div className="header sprite_02">
        <div className="header-left">
          <h3 className="title">{title}</h3>
          <div className="keyword">
            {keywords.map((item, index) => {
              return (
                <div className="header-item" key={item}>
                  <a href="goto">{item}</a>
                  <span>|</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="header-right">
          <a href="goto">更多</a>
          <i className="icon sprite_02"></i>
        </div>
      </div>
    </MHThemeHeaderRCMWrapper>
  );
});

MHThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

MHThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default MHThemeHeaderRCM;
