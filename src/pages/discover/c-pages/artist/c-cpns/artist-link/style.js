/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 20:08:31
 * @LastEditTime: 2022-11-15 21:16:49
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-link\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHArtistLinkWrapper = styled.div`
  width: 180px;
  border-left: 1px solid rgb(213, 213, 213);
  border-right: 1px solid rgb(213, 213, 213);
  .singer-link {
    padding: 51px 10px 40px;
    .singer-type:nth-child(1) {
      padding-top: 0;
      margin-top: 0;
      border-top: 0 solid #d3d3d3;
    }
    .singer-type {
      display: flex;
      flex-direction: column;
      padding-top: 16px;
      margin-top: 5px;
      border-top: 1px solid #d3d3d3;
      .type-name {
        display: inline-block;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        padding-left: 14px;
      }
      a {
        display: inline-block;
        color: #333;
        width: 160px;
        height: 29px;
        line-height: 29px;
        padding-left: 27px;
        background-image: url(${require("@/assets/img/singer_sprite.png")});
        background-position: 0 -30px;
        &.active {
          color: #c20c0c;
          background-position: 0 0;
        }
      }
    }
  }
`;
