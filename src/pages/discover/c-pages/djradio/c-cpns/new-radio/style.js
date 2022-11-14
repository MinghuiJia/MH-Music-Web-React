/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 15:26:50
 * @LastEditTime: 2022-11-14 16:16:46
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\new-radio\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHNewRadioWrapper = styled.div`
  padding: 0 40px;
  margin-top: 20px;
  .new-radio-title {
    height: 40px;
    span {
      font-size: 24px;
      color: #333;
    }
    border-bottom: 2px solid #c20c0c;
  }
  .new-radio-content {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
`;
