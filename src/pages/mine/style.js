/*
 * @Author: jiaminghui
 * @Date: 2022-11-21 15:19:55
 * @LastEditTime: 2022-11-21 15:36:49
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\mine\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHMineWrapper = styled.div`
  height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  justify-content: center;
  .info {
    padding-top: 104px;
    background-image: url(${require("@/assets/img/mymusic.png")});
    background-position: 0 104px;
    background-repeat: no-repeat;
    width: 807px;
    height: 372px;
    .login {
      margin: 202px 0 0 482px;
      width: 167px;
      height: 45px;
      padding: 0;
      background-image: url(${require("@/assets/img/mymusic.png")});
      opacity: 0;
      &:hover {
        cursor: pointer;
        background-position: 0 -278px;
        opacity: 1;
      }
    }
  }
`;
