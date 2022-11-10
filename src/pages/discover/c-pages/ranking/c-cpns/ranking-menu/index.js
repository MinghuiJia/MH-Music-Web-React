import React, { memo } from "react";

import { getSizeImg } from "@/utils/format-utils";

import { MHRankingMenuWrapper } from "./style";

export default memo(function MHRankingMenu(props) {
  const { title, link_list, idx, changeRankingIdx } = props;
//   console.log(idx);
  return (
    <MHRankingMenuWrapper>
      <div className="menu-title">
        <h2>{title}</h2>
      </div>
      <div className="menu-list">
        {link_list.map((item, index) => {
          return (
            <div
              className={"menu-list-item" + (idx === item.idx ? " active" : "")}
              key={item.title}
              onClick={(e) => {
                changeRankingIdx(item.idx);
              }}
            >
              <img src={getSizeImg(item.img, 40)} alt="" />
              <div className="item-info">
                <p className="item-name">{item.title}</p>
                <p className="item-describe">{item.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </MHRankingMenuWrapper>
  );
});