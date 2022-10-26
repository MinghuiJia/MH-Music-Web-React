/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 20:04:14
 * @LastEditTime: 2022-10-25 19:58:59
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\recommend-ranking\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHRecommendRankingWrapper = styled.div`
  padding: 20px 20px 40px;
  .content {
    width: 689px;
    height: 472px;
    margin-top: 20px;
    background-image: url(${require("@/assets/img/recommend-top-bg.png")});

    display: flex;

    .left, .middle, .right {
      flex: 1;
    }
  }
`;
