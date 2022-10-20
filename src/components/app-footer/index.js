/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:02:06
 * @LastEditTime: 2022-10-19 20:31:26
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\app-footer\index.js
 * @Description:
 */
import React, { Fragment, memo } from "react";

import { FooterWrapped, FooterLeft, FooterRight } from "./style";
import { footerLinks, footerImages } from "@/common/local-data";

export default memo(function HYAppFooter() {
  return (
    <FooterWrapped className="wrap-v2">
      <FooterLeft>
        <div className="footerLinks">
          {footerLinks.map((item, index) => {
            return (
              <Fragment key={item.title}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
                {index < footerLinks.length - 1 && <span>|</span>}
              </Fragment>
            );
          })}
        </div>
        <div className="copy">
          <span>网易公司版权所有©1997-2022</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a
            href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
            target="_blank"
            rel="noreferrer"
          >
            浙网文[2021] 1186-054号
          </a>
        </div>
        <div className="beian">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            粤B2-20090191-18 工业和信息化部备案管理系统网站
          </a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
            <span className="beianLogo"></span>浙公网安备 33010902002564号
          </a>
        </div>
        <div className="license">
          <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          <span>监督举报邮箱：51jubao@service.netease.com</span>
        </div>
      </FooterLeft>
      <FooterRight>
          {
            footerImages.map((item, index) => {
              return (
                <div className="image-item" key={item.title}>
                  <a href={item.link} className="image" target="_blank" rel="noreferrer"> </a>
                  {/* <span className="title">{item.title}</span> */}
                  <span className="title"></span>
                </div>
              )
            })
          }
      </FooterRight>
    </FooterWrapped>
  );
});
