/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 20:48:29
 * @LastEditTime: 2022-11-16 21:54:22
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-recommend\style.js
 * @Description:
 */
/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 20:48:29
 * @LastEditTime: 2022-11-15 21:03:07
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-recommend\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHArtistRecommendWrapper = styled.div`
  flex: 1;
  padding: 40px;
  .signed-singer,
  .hot-singer {
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
  .hot-singer {
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
