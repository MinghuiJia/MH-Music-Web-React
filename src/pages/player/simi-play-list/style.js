/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 19:17:52
 * @LastEditTime: 2022-10-28 20:09:07
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\simi-play-list\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSimiPlayListWrapper = styled.div`
  .simi-play-list-top {
    span {
      display: block;
      color: #333;
      font-weight: bolder;
      height: 23px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
    }
  }
  .simi-play-list-content {
    margin-bottom: 40px;
  }
  .simi-play-list-item {
    display: flex;
    margin-bottom: 15px;

    .left {
      margin-right: 10px;
    }
    .right {
      display: flex;
      flex-direction: column;
      .item-name {
        font-size: 14px;
        color: #000;
      }
      .item-author {
        span {
          color: #999;
        }
        a {
          margin: 0 2px 0 4px;
          color: #666;
        }
      }
    }
  }
`;
