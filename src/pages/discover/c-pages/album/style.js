/*
 * @Author: jiaminghui
 * @Date: 2022-11-17 20:04:14
 * @LastEditTime: 2022-11-17 20:55:03
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\album\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHAlbumWrapper = styled.div`
  .album {
    padding: 40px;

    .album-div {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .album-item:nth-child(5n + 1) {
        margin: 0;
      }
      .album-item {
        margin: 0 0 30px 33px;
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
`;
