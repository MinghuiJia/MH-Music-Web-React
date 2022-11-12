/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 21:27:34
 * @LastEditTime: 2022-11-12 22:07:28
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-content\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSongsContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .song-item:nth-child(5n) {
    padding-right: 0;
  }
  .song-item {
    padding-right: 50px;
    margin-bottom: -30px;
  }
`;
