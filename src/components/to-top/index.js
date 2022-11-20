/*
 * @Author: jiaminghui
 * @Date: 2022-11-20 15:52:36
 * @LastEditTime: 2022-11-20 16:34:11
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\to-Top\index.js
 * @Description:
 */
import React, { memo, useEffect, useState } from "react";

import { MHToTopWrapper } from "./style";

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default memo(function MHToTop() {
  const [isShow, setIsShow] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY > 0) {
      setIsShow(true);
      console.log(window.scrollY);
    } else {
      setIsShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
    // return window.removeEventListener("scroll", handleScrollY);
  }, []);
  return (
    <MHToTopWrapper>
      <button
        className={"toTop-btn" + (isShow ? " active" : "")}
        onClick={(e) => toTop()}
      ></button>
    </MHToTopWrapper>
  );
});
