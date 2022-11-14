/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 18:34:08
 * @LastEditTime: 2022-11-14 19:50:47
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\radio-ranking\c-cpns\radio-cover\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHRadioCoverWrapper = styled.div`
  .cover-item {
    display: flex;
    width: 435px;
    padding: 20px 0;
    border-bottom: 1px solid #e7e7e7;
    .left {
      width: 120px;
    }
    .right {
      .cover-name {
        width: 295px;
      }

      margin-left: 20px;
      .cover-name span {
        width: 100%;
        font-size: 18px;
        color: #333;
        font-weight: bolder;
        display: inline-block;
        height: 64px;
        line-height: 64px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .cover-dj-name {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        .icon {
          display: inline-block;
          width: 14px;
          height: 15px;
          background-position: -50px -300px;
        }
        span {
          color: #333;
          margin-left: 5px;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .cover-dj-info {
        color: #999;
        span {
          display: inline-block;
        }
        .dj-subCount {
          margin-left: 10px;
        }
      }
    }
  }
`;
