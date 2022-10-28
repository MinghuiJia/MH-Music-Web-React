/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 15:57:33
 * @LastEditTime: 2022-10-28 21:45:32
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\settle-singer\style.js
 * @Description:s
 */
import styled from "styled-components";
export const MHSettleSingerWrapper = styled.div`
  .artist-item {
    margin-top: 14px;
    border: 1px solid #e9e9e9;
    display: flex;
    background-color: #fafafa;
    &:hover {
      background-color: rgba(0,0,0,0.1);
      cursor: pointer;
    }
    img {
      width: 62px;
      height: 62px;
    }
    .artist-info {
      flex: 1;
      margin-left: 14px;
      .artist-name {
        width: 100%;
        display: inline-block;
        font-size: 14px;
        font-weight: bolder;
        margin-top: 8px;
      }
    }
  }
  margin: 15px 20px 0;
`;
