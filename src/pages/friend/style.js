/*
 * @Author: jiaminghui
 * @Date: 2022-11-21 15:43:32
 * @LastEditTime: 2022-11-21 15:58:36
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\friend\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHFriendWrapper = styled.div`
  height: 700px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  .info {
    width: 902px;
    height: 484px;
    padding-top: 70px;
    background-image: url(${require("@/assets/img/notlogin.jpg")});
    background-position: 0 70px;
    background-repeat: no-repeat;
    .describe {
      padding: 178px 0 0 535px;
      font-size: 14px;
      color: #666;
    }
    .login {
      width: 157px;
      height: 48px;
      margin: 38px 0 0 535px;
      padding: 0;
      background-image: url(${require("@/assets/img/notlogin.jpg")});
      background-position: 0 -430px;
      opacity: 0;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`;
