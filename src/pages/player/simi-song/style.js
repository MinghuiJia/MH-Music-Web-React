/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 20:04:36
 * @LastEditTime: 2022-10-28 20:57:12
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\simi-song\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSimiSongWrapper = styled.div`
  .simi-song-list-top {
    span {
      display: block;
      color: #333;
      font-weight: bolder;
      height: 23px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
    }
  }
  .simi-song-list-content {
    .simi-song-list-item {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .left {
        display: flex;
        flex-direction: column;
        width: 156px;

        .song-name {
          height: 16px;
          color: #333;
        }
        .artists {
          height: 16px;
          a {
            color: #999;
          }
        }
      }

      .right {
        i {
          display: inline-block;
          width: 10px;
          height: 11px;
          cursor: pointer;
        }
        .play {
          margin-right: 16px;
          background-position: -69px -455px;
        }
        .add {
            background-position: -87px -454px;
        }
      }
    }
  }
`;
