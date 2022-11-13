/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:15:28
 * @LastEditTime: 2022-11-13 14:38:47
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-header\select-content\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSelectContentWrapper = styled.div`
  margin-left: 26px;
  .content {
    width: 100%;

    .item {
      display: flex;
    }
    .left-item {
      padding: 15px 0;
      display: flex;
      width: 73px;
      position: relative;
      top: 2px;
      border-right: 1px solid #e6e6e6;
      .style-icon {
        display: inline-block;
        width: 23px;
        height: 23px;
        margin-right: 8px;
      }
      span {
        color: rgb(51, 51, 51);
        font-size: 12px;
        font-weight: bold;
      }
    }
    .item:nth-child(1) {
      .style-icon {
        background-position: -20px -735px;
      }
    }
    .item:nth-child(2) {
      .style-icon {
        background-position: 0 -60px;
        position: relative;
        top: -3px;
      }
    }
    .item:nth-child(3) {
      .style-icon {
        background-position: 0 -88px;
        position: relative;
        top: -4px;
      }
    }
    .item:nth-child(4) {
      .style-icon {
        background-position: 0 -117px;
        position: relative;
        top: -4px;
      }
    }
    .item:nth-child(5) {
      .style-icon {
        background-position: 0 -141px;
        position: relative;
        top: -4px;
      }
    }

    .right-item {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      padding: 15px 0 15px 15px;
      .each-category {
        button {
          color: #333;
          font-size: 12px;
          padding: 0 6px;
          background-color: #fff;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          &.active {
            background-color: #a7a7a7;
            color: #fff;
          }
        }
        span {
          font-size: 12px;
          margin: 0 10px 0 10px;
          color: #d8d8d8;
        }
      }
    }
  }
`;
