/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 15:34:46
 * @LastEditTime: 2022-10-28 22:59:07
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\player-info\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHPlayerInfoWrapper = styled.div`
  display: flex;
  .content-left {
    .pic-bg {
      width: 206px;
      height: 205px;
      background-position: -140px -580px;
      position: relative;
      img {
        width: 130px;
        height: 130px;
        position: absolute;

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
    }
    .outer-player {
      margin: 20px 0 0 46px;
      display: flex;
      align-items: center;
      i {
        width: 16px;
        height: 16px;
        display: inline-block;
        background-position: -34px -863px;
      }
      span {
        color: #0c73c2;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .content-right {
    margin-left: 25px;
    .info-top {
      .song-name {
        display: flex;
        align-items: center;
        i {
          display: block;
          width: 54px;
          height: 24px;
          background-position: 0 -463px;
        }
        span {
          font-size: 24px;
          color: #333;
          margin-left: 10px;
        }
      }
      .song-singer,
      .song-album {
        margin: 10px 0;
        span {
          color: #999;
        }
        a {
          color: #0c73c2;
        }
      }
    }

    .info-tool {
      display: flex;
      align-items: center;
      .play {
        width: 61px;
        height: 31px;
        border: 1px solid #999;
        border-radius: 5px 0 0 5px;
        cursor: pointer;
        /* margin-right: 1px; */
      }
      .add {
        height: 31px;
        width: 31px;
        border-radius: 0 5px 5px 0;
        margin-right: 6px;
        border: 1px solid #999;
        font-size: 18px;
        cursor: pointer;
      }
      .collect,
      .share,
      .download {
        width: 54px;
        height: 31px;
        border: 1px solid #999;
        border-radius: 5px;
        margin-right: 6px;
        background-color: rgb(243, 243, 243);
        cursor: pointer;
      }
      .comments {
        width: 69px;
        height: 31px;
        border: 1px solid #999;
        border-radius: 5px;
        background-color: rgb(243, 243, 243);
        cursor: pointer;
      }
      .collect {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-position: -7px -229px;
        }
        span {
          display: inline-block;
        }
      }
      .play {
        display: flex;
        align-items: center;
        background-color: rgb(59, 138, 212);
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-position: -2px -1623px;
          border-radius: 50%;
        }
        span {
          padding-left: 5px;
          display: inline-block;
          color: #fff;
        }
      }
      .add {
        background-color: rgb(59, 138, 212);
        color: #fff;
      }
      .share {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-position: -10px -1232px;
        }
        span {
          display: inline-block;
        }
      }
      .download {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-position: -10px -2812px;
        }
        span {
          display: inline-block;
        }
      }
      .comments {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-position: -10px -1472px;
        }
        span {
          display: inline-block;
        }
      }
    }

    .info-lyric {
      height: ${(props) => {
        return props.extended ? "auto" : "400px";
      }};
      overflow: hidden;
      margin-top: 40px;
      .line-lyric {
        margin-bottom: 5px;
      }
    }
    .extend {
      span {
        color: #0c73c2;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      i {
        display: inline-block;
        width: 11px;
        height: 8px;
        background-position: ${(props) => {
          return props.extended ? "-45px -520px" : "-65px -520px";
        }};
      }
    }
  }
`;
