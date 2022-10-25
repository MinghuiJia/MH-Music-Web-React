/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 19:50:55
 * @LastEditTime: 2022-10-25 17:16:48
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\new-album\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHNewAlbumWrapper = styled.div`
  padding: 20px 20px 40px;
  .n-disk {
    position: relative;
    border: 1px solid #d3d3d3;
    margin-top: 20px;
    background-color: #0000000d;
    padding-left: 16px;
    .page1,
    .page2 {
      /* 这里必须加important */
      display: flex !important;
      margin: 30px 0;
      .page-item {
        margin-left: 11px;
      }
    }

    .prev-icon,
    .next-icon {
      width: 17px;
      height: 17px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .prev-icon {
      left: 5px;
      background-position: -261px -76px;
      cursor: pointer;
      &:hover {
        background-position: -281px -76px;
      }
    }
    .next-icon {
      right: 5px;
      background-position: -300px -76px;
      cursor: pointer;
      &:hover {
        background-position: -320px -76px;
      }
    }
  }
`;
