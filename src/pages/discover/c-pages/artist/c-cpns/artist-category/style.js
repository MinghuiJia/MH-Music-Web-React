/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:21:40
 * @LastEditTime: 2022-11-16 22:40:58
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-category\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHArtistCategoryWrapper = styled.div`
  flex: 1;
  padding: 40px;
  .singer {
    .img-cover {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      .cover-item:nth-child(5n + 1) {
        padding: 0;
      }
      .cover-item {
        padding: 0 0 30px 17px;
      }
    }

    .name-list {
      padding-top: 12px;
      border-top: 1px solid #999;
      display: flex;
      flex-wrap: wrap;
      .name-item:nth-child(5n + 1) {
        margin: 0;
      }
      .name-item {
        margin-left: 17px;
      }
    }
  }
`;
