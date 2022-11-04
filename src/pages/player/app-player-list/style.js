/*
 * @Author: jiaminghui
 * @Date: 2022-11-04 15:42:11
 * @LastEditTime: 2022-11-04 21:17:03
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\app-player-list\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHAppPlayerListWrapper = styled.div`
  width: 986px;
  height: 301px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  bottom: 47px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.showFlag ? "flex" : "none")};
`;

export const MHAppPlayerListHeader = styled.div`
  width: 100%;
  height: 41px;
  background-image: url(${require("@/assets/img/playlist_bg.png")});
  display: flex;
  align-items: center;
  .header-left {
    display: flex;
    width: 558px;
    height: 41px;
    justify-content: space-between;
    align-items: center;
    .play-list {
      color: #e2e2e2;
      font-size: 14px;
      margin-left: 30px;
    }
    .tools {
      margin-right: 20px;
      display: flex;
      .divider {
        display: inline-block;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
        margin: 0 10px;
      }
      .icon {
        display: block;
        width: 16px;
        height: 16px;
        margin: 1px 6px 0 0;
      }
      .save {
        display: flex;
        span {
          display: block;
          color: #ccc;
        }
        .save-icon {
          background-position: -24px 0;
        }
      }
      .delete {
        display: flex;
        span {
          display: block;
          color: #ccc;
        }
        .delete-icon {
          background-position: -51px 0;
        }
      }

      .save:hover,
      .delete:hover {
        span {
          color: #fff;
        }
      }
      .save:hover {
        .save-icon {
          background-position: -24px -20px;
        }
      }
      .delete:hover {
        .delete-icon {
          background-position: -51px -20px;
        }
      }
    }
  }
  .header-right {
    flex: 1;
    position: relative;
    .song-name {
      display: inline-block;
      font-size: 14px;
      color: #fff;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    .close-icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-position: -195px 9px;
      position: absolute;
      right: 10px;
      top: -2px;

      &:hover {
        cursor: pointer;
        background-position: -195px -21px;
      }
    }
  }
`;

export const MHAppPlayerListContent = styled.div`
  flex: 1;
  height: 260px;
  display: flex;
  .content-play-list {
    /* 整个滚动条 */
    ::-webkit-scrollbar {
      width: 6px;
      background-color: rgba(0, 0, 0, 0.8);
      border: 1px solid #000;
    }

    /* 滚动条上的滚动滑块 */
    ::-webkit-scrollbar-thumb {
      background-color: #666666;
      border-radius: 3px;
    }

    width: 558px;
    height: 100%;
    overflow-y: scroll;
    .play-list-item {
      height: 28px;
      width: 100%;

      display: flex;
      justify-content: space-between;
      .item-left {
        margin-left: 10px;
        display: flex;
        align-items: center;
        .curr-play-song-icon {
          display: inline-block;
          width: 10px;
          height: 13px;
          background-position: 0 9999px;
          &.active {
            background-position: -182px 0;
          }
          margin-right: 10px;
        }
        .song-name {
          display: inline-block;
          color: #ccc;
        }
      }

      .item-right {
        display: flex;
        align-items: center;
        .song-artist {
          color: #9b9b9b;
          margin-left: 10px;
          display: inline-block;
          width: 70px;
        }
        .song-duration {
          color: #666;
          margin-left: 10px;
        }

        .icon {
          display: inline-block;
          margin: 7px 0 0 10px;
        }
        .song-tools {
          display: none;
          .save-icon {
            width: 16px;
            height: 16px;
            background-position: -24px 0;
            &:hover {
              background-position: -24px -20px;
            }
          }
          .share-icon {
            width: 14px;
            height: 16px;
            background-position: 0 0;
            &:hover {
              background-position: 0 -20px;
            }
          }
          .download-icon {
            width: 14px;
            height: 16px;
            background-position: -57px -50px;
            &:hover {
              background-position: -80px -50px;
            }
          }
          .delete-icon {
            width: 13px;
            height: 16px;
            background-position: -51px 0;
            &:hover {
              background-position: -51px -20px;
            }
          }
        }

        .song-from-link-icon {
          width: 14px;
          height: 16px;
          background-position: -80px 0;
          margin-left: 29px;
          margin-right: 10px;
          &:hover {
            background-position: -80px -20px;
          }
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        .song-name,
        .song-artist,
        .song-duration {
          color: #fff;
        }
        .song-tools {
          display: block;
        }
      }
    }
  }
  .content-song-lyric {
    height: 260px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: 21px 0 30px 0;
    position: relative;
    /* 整个滚动条 */
    ::-webkit-scrollbar {
      width: 6px;
      background-color: rgba(0, 0, 0, 0.8);
      border: 1px solid #000;
    }
    /* 滚动条上的滚动滑块 */
    ::-webkit-scrollbar-thumb {
      background-color: #666666;
      border-radius: 3px;
    }
    .lyric-show {
      height: 219px;
      margin-bottom: 20px;

      .lyric-item span {
        display: block;
        width: 354px;
        height: 32px;
        line-height: 32px;
        color: #989898;
        text-align: center;
      }
      .active span {
        color: #fff;
        font-size: 14px;
      }
    }
    .question-icon {
      position: absolute;
      display: inline-block;
      width: 21px;
      height: 21px;
      background-position: 0 -50px;
      right: 20px;
      top: 20px;
      &:hover {
        cursor: pointer;
        background-position: -24px -50px;
      }
    }
  }
`;
