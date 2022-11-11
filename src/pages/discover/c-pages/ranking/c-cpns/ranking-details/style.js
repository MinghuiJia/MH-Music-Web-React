/*
 * @Author: jiaminghui
 * @Date: 2022-11-10 17:35:12
 * @LastEditTime: 2022-11-11 21:09:45
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\ranking\c-cpns\ranking-details\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHRankingDetailsWrapper = styled.div`
  .detail-top {
    display: flex;
    padding: 40px;
    .left {
      padding: 3px;
      border: 1px solid #ccc;
      position: relative;
      .msk {
        display: inline-block;
        width: 150px;
        height: 150px;
        position: absolute;
        left: 3px;
        top: 3px;
        background-position: -230px -380px;
      }
    }
    .right {
      margin-left: 29px;
      .ranking-name {
        display: inline-block;
        font-size: 20px;
        color: #333;
        margin: 16px 0 4px 0;
      }
      .update-time {
        display: flex;
        align-items: center;
        height: 35px;
        margin-bottom: 20px;
        .clock-icon {
          display: inline-block;
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
        }
        span {
          display: inline-block;
          margin-left: 5px;
          color: #666;
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
    }
  }
  .detail-content {
    padding: 0 40px;
    .content-header {
      display: flex;
      justify-content: space-between;
      height: 35px;
      border-bottom: 2px solid #c20c0c;
      .content-left {
        .content-name {
          font-size: 20px;
          color: #333;
        }
        .content-song-count {
          color: #666;
          display: inline-block;
          margin: 9px 0 0 20px;
        }
      }
      .content-right {
        color: #666;
        margin-top: 5px;
        .play-count {
          color: #c20c0c;
          font-weight: bolder;
        }
      }
    }
    .content-table {
      table {
        border-collapse: collapse;
        thead {
          background-color: #f7f7f7;
          th {
            border: 1px solid #d9d9d9;
          }
          .id {
            width: 77px;
            height: 34px;
            background-position: 0 0;
            background-repeat: repeat-x;
          }
          .name {
            width: 326px;
          }
          .duration {
            width: 91px;
          }
          .singer {
            width: 175px;
          }
          .name,
          .duration,
          .singer {
            background-position: 0 0;
            background-repeat: repeat-x;
            padding: 8px 10px;
            color: #666;
            text-align: left;
            font-weight: normal;
          }
        }
        tbody {
          border: 1px solid #d9d9d9;
          tr:nth-child(2n) {
            background-color: #fff;
          }
          tr {
            position: relative;
            &:hover .duration {
              .tools {
                left: 10px;
              }
              .duration-time {
                display: none;
              }
            }
          }
          .info {
            width: 326px;
            display: flex;
          }
          .singer-name {
            width: 174px;
            display: flex;
            padding: 6px 10px;
            a {
              color: #333;
              width: 100%;
            }
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .id {
            padding: 6px 10px;
            .id-content {
              display: flex;
              span {
                display: inline-block;
                width: 25px;
                height: 18px;
                text-align: center;
              }
              i {
                display: inline-block;
                width: 16px;
                height: 17px;
                margin: 0 8px;
                background-position: -67px -283px;
              }
            }
          }
          .duration {
            padding: 6px 10px;
            position: relative;
            overflow: hidden;
            .icon {
              display: inline-block;
              width: 18px;
              height: 16px;
              margin-right: 3px;
            }
            .tools {
              display: flex;
              align-items: center;
              position: absolute;
              right: -100px;
              top: 50%;
              transform: translateY(-50%);
              .add-icon {
                width: 13px;
                height: 13px;
                background-position: 0 -700px;
                &:hover {
                  cursor: pointer;
                  background-position: -22px -700px;
                }
              }
              .collect-icon {
                background-position: 0 -174px;
                &:hover {
                  cursor: pointer;
                  background-position: -20px -174px;
                }
              }
              .share-icon {
                background-position: 0 -195px;
                &:hover {
                  cursor: pointer;
                  background-position: -20px -195px;
                }
              }
              .download-icon {
                background-position: -81px -174px;
                &:hover {
                  cursor: pointer;
                  background-position: -104px -174px;
                }
              }
            }
          }

          .top3-ranking {
            height: 70px;
            &:hover .duration {
              .tools {
                left: 10px;
              }
              .duration-time {
                display: none;
              }
            }

            .info {
              padding: 10px;
              display: flex;
              align-items: center;

              .play-icon {
                display: inline-block;
                width: 17px;
                height: 17px;
                background-position: 0 -103px;
                margin: 0 8px 0 14px;
                position: relative;
                top: 4px;
                &:hover {
                  cursor: pointer;
                  background-position: 0 -128px;
                }
                &.active {
                  background-position: -20px -128px;
                }
              }
              .song-name {
                color: #333;
              }
            }
          }
          .rest-ranking {
            height: 32px;
            .info {
              position: relative;
              top: 4px;
              .play-icon {
                display: inline-block;
                width: 17px;
                height: 17px;
                background-position: 0 -103px;
                margin: 0 8px 0 10px;
                position: relative;
                top: 4px;
                &:hover {
                  cursor: pointer;
                  background-position: 0 -128px;
                }
                &.active {
                  background-position: -20px -128px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
