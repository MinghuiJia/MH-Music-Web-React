/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 21:57:37
 * @LastEditTime: 2022-10-23 22:09:12
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\songs-cover\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHThemeSongsCoverWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 -42px;

  .content-item {
    position: relative;
    width: 140px;
    margin: 0 0 30px 42px;
    img {
      width: 140px;
      height: 140px;
      display: block;
    }

    .info {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 113px;
      width: 100%;
      height: 27px;
      color: #cccccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        box-sizing: border-box;
        i {
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin: 0 5px 0 10px;
        }
        span {
          display: inline-block;
          line-height: 27px;
        }
      }
      .right {
        width: 16px;
        height: 17px;
        background-position: 0 0;
        margin-right: 10px;
      }
      .right:hover {
        background-position: 0 -60px;
        cursor: pointer;
      }
    }

    .describle {
      margin: 8px 0 3px 0;
      font-size: 14px;
    }
  }
  .content-item:nth-child(0) {
    margin-bottom: 0;
  }
`;
