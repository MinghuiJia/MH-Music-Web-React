/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:35:11
 * @LastEditTime: 2022-10-20 11:08:28
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\style.js
 * @Description:
 */
import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  /**
    一定要在top的div里设置高度和背景颜色
    如果直接在DiscoverWrapper的div内设置高度，那么就会导致里面的元素无法撑开高度，因为已经设置了整个discover的高度
  */
  .top {
    height: 34px;
    background-color: #c20c0c;
  }
`;

export const TopMenu = styled.div`
  padding: 0 180px;
  display: flex;
  a {
    display: block;
    height: 20px;
    padding: 0 13px;
    margin: 5px 17px 0;
    text-align: center;
    color: #fff;
  }
  a:hover,
  a.active {
    background-color: #9b0909;
    border-radius: 20px;
    text-decoration: none;
  }
`;
