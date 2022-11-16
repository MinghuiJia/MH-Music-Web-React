/*
 * @Author: jiaminghui
 * @Date: 2022-11-16 20:36:28
 * @LastEditTime: 2022-11-16 21:23:23
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-cover\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHArtistCoverWrapper = styled.div`
  .singer-item {
    width: 130px;
    .img {
      img {
        width: 130px;
        height: 130px;
      }
    }
    .singer-info {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      .singer-name {
        color: #000;
      }
      .icon {
        display: inline-block;
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
      }
    }
  }
`;
