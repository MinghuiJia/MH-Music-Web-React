/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 15:21:18
 * @LastEditTime: 2022-10-28 19:23:58
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHPlayerWrapper = styled.div`
  background-image: url(${require("@/assets/img/wrap-bg.png")});
  display: flex;
`;

export const MHPlayerLeft = styled.div`
  padding: 40px 30px 40px 39px;
  width: 709px;
`;

export const MHPlayerRight = styled.div`
  padding: 20px 40px 40px 30px;
  width: 270px;
`;
