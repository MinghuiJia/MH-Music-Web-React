/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:18:20
 * @LastEditTime: 2022-11-16 22:06:12
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-signed\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHArtistSignedWrapper = styled.div`
  flex: 1;
  padding: 40px;
  .signed-singer {
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
  }
`;
