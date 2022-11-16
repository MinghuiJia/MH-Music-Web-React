/*
 * @Author: jiaminghui
 * @Date: 2022-11-16 22:08:42
 * @LastEditTime: 2022-11-16 22:26:22
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\search-bar\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSearchBarWrapper = styled.div`
  margin-top: 20px;
  .bar {
    display: flex;
    span {
      display: flex;
      justify-content: center;
      width: 21px;
      height: 24px;
      line-height: 24px;
      color: #333;
      font-size: 14px;
      margin-left: 3px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      &.active {
        color: #fff;
        background-color: #c20c0c;
        border-radius: 2px;
      }
    }
    .hot {
      width: 45px;
      height: 24px;
      color: #333;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
