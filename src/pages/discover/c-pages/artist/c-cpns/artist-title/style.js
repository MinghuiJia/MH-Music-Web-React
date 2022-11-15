/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:31:16
 * @LastEditTime: 2022-11-15 21:57:10
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-title\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHArtistTitleWrapper = styled.div`
  padding: 40px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    border-bottom: 2px solid #c20c0c;
    .name {
      color: #333;
      font-size: 24px;
    }
    a {
      color: #666;
    }
  }
`;
