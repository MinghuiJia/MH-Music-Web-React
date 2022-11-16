/*
 * @Author: jiaminghui
 * @Date: 2022-11-16 22:08:39
 * @LastEditTime: 2022-11-16 22:55:07
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\search-bar\index.js
 * @Description:
 */
import React, { forwardRef, memo, useState } from "react";

import { MHSearchBarWrapper } from "./style";

export default memo(
  forwardRef(function MHSearchBar(props, ref) {
    const lizt = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const { changeCurrentInitial } = props;
    const clickSpan = (type) => {
      setCurrentSearch(type);
      changeCurrentInitial(type);
    };

    // state hooks
    const [currentSearch, setCurrentSearch] = useState("hot");

    return (
      <MHSearchBarWrapper>
        <div className="bar">
          <span
            className={"hot" + (currentSearch === "hot" ? " active" : "")}
            onClick={(e) => clickSpan("hot")}
            ref={ref}
          >
            热门
          </span>
          {lizt.map((item) => {
            return (
              <span
                key={item}
                className={item === currentSearch ? "active" : ""}
                onClick={(e) => clickSpan(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </MHSearchBarWrapper>
    );
  })
);
