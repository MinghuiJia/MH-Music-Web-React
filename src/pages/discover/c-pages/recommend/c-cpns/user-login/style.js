/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 15:35:00
 * @LastEditTime: 2022-10-26 15:54:43
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\user-login\style.js
 * @Description:
 */
import styled from "styled-components";
export const MHLoginWrapper = styled.div`
  height: 126px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-position: -1px 0;
  .login-info {
    margin: 0 22.5px;
    color: #666666;
  }

  .login-btn {
    width: 100px !important;
    height: 30px !important;
    background-color: #C20C0C !important;
    align-self: center;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: red !important;
    }
  }
`;
