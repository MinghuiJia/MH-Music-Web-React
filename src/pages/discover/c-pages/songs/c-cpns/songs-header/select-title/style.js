/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 15:23:16
 * @LastEditTime: 2022-11-13 14:31:19
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-header\select-title\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSelectTitleWrapper = styled.div`
  height: 50px;
  width: 700px;
  padding-top: 15px;
  .all-style {
    width: 75px;
    height: 26px;
    background-position: 0 -64px;
    margin-left: 26px;
    span {
      display: inline-block;
      color: #333;
      font-size: 12px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
