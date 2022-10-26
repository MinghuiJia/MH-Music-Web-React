/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 16:12:06
 * @LastEditTime: 2022-10-26 17:33:44
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\hot-artist\style.js
 * @Description:
 */
import styled from "styled-components";
export const MHHotArtistWrapper = styled.div`
  margin: 30px 20px 0;
  .hot-artist-list {
    margin-top: 20px;

    .hot-artist-item {
      display: flex;
      height: 50px;
      img {
        margin-right: 10px;
        width: 40px;
        height: 40px;
      }
      .hot-artist-info {
        a {
          color: #000000;
        }
      }
    }
  }
`;
