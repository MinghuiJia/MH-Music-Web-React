/*
 * @Author: jiaminghui
 * @Date: 2022-11-20 15:52:56
 * @LastEditTime: 2022-11-20 16:32:03
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\to-Top\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHToTopWrapper = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  .toTop-btn {
    width: 49px;
    height: 44px;

    background-image: url(${require("@/assets/img/sprite.png")});
    background-position: -265px -47px;
    &:hover {
      background-position: -325px -47px;
      cursor: pointer;
    }
    &.active {
      display: block;
    }
    display: none;
  }
`;
