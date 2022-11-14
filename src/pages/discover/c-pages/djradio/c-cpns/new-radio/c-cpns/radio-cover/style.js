/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 16:02:16
 * @LastEditTime: 2022-11-14 16:16:13
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\new-radio\c-cpns\radio-cover\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHRadioCoverWrapper = styled.div`
  width: 150px;
  .radio-info {
    display: flex;
    flex-direction: column;
    .radio-name {
      display: inline-block;
      font-size: 14px;
      color: #333;
      margin: 13px 0 6px 0;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .radio-describe {
      color: #999;
    }
  }
`;
