/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 17:19:20
 * @LastEditTime: 2022-10-30 21:39:13
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\app-player-bar\style.js
 * @Description:
 */
import styled from "styled-components";

export const HYAppPlayerBarWrapper = styled.div`
  height: 53px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    height: 53px;
    display: flex;
    align-items: center;
  }
`;

export const LeftControl = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6px;
  .prev,
  .next {
    width: 28px;
    height: 28px;
    margin: 0 8px 0 0;
    cursor: pointer;
  }
  .play {
    margin-right: 8px;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
  .play {
    background-position: ${(props) => {return props.isPlay ? "0 -165px;" : "0 -204px"}};
    &:hover {
      background-position: ${(props) => {return props.isPlay ? "-40px -165px;" : "-40px -204px"}};
    }
  }
`;

export const Player = styled.div`
  display: flex;
  height: 42px;
  align-items: center;
  margin-left: 20px;
  .song-image {
    margin: 6px 15px 0 0;
    img {
      border-radius: 5px;
    }
  }

  .song-info {
    width: 581px;
    height: 100%;
    .infos {
      padding-top: 5px;
      display: flex;
      align-items: center;
      .song-name {
        display: inline-block;
        /* width: 48px; */
        height: 23px;
        line-height: 23px;
        color: #e8e8e8;
      }
      .song-singer {
        margin-left: 15px;
        color: #9b9b9b;
      }
      .song-ranking {
        display: inline-block;
        width: 14px;
        height: 15px;
        background-position: -110px -103px;
        margin-left: 13px;
      }
    }

    .song-player {
      display: flex;
      color: #797979;
      .player-bar {
        width: 466px;
        .ant-slider {
          margin: 0;
          .ant-slider-rail {
            height: 9px;
            background-image: url(${require("@/assets/img/progress_bar.png")});
            background-position: 0 -30px;
          }
          .ant-slider-track {
            height: 9px;
            background-image: url(${require("@/assets/img/progress_bar.png")});
            background-position: 0 -66px;
          }
          .ant-slider-step {
            height: 9px;
          }
          .ant-slider-handle {
            width: 14px;
            height: 16px;
            background-image: url(${require("@/assets/img/sprite_icon.png")});
            background-position: -6px -255px;
          }
        }
      }

      .player-time {
        margin-left: 20px;
        .current-time {
          color: #a1a1a1;
        }
        .total-time {
          color: #797979;
        }
      }
    }
  }
`;

export const RightControl = styled.div`
  display: flex;
  .divider {
    color: #666666;
    padding-top: 12px;
    padding-left: 7px;
  }
  .icon {
    width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
    &:hover {
      cursor: pointer;
    }
  }
  .left,
  .right {
    display: flex;
  }

  .left {
    .pip {
      background-image: url(${require("@/assets/img/playbar_sprite2.png")});
      background-position: 0 0;
      &:hover {
        background-position: 0 -25px;
      }
    }
    .like {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    padding-left: 13px;
    .vol {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }
    .loop {
      background-position: -3px -344px;
      &:hover {
        background-position: -33px -344px;
      }
    }
    .menu {
      width: 59px;
      height: 25px;
      background-position: -42px -68px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 11px 2px 0 0;
      &:hover {
        background-position: -42px -98px;
      }
      a {
        padding-left: 21px;
        padding-top: 2px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;
