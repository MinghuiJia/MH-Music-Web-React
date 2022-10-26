/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 10:58:07
 * @LastEditTime: 2022-10-26 13:11:14
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\ranking-column-rcm\style.js
 * @Description:
 */
import styled from "styled-components";
export const MHRankingColumnWrapper = styled.div`
  width: 230px;
  .title-top {
    display: flex;
    width: 230px;
    height: 120px;
    padding: 20px 0 0 19px;
    img {
      width: 80px;
      height: 80px;
    }

    .title-right {
      margin: 6px 0 0 10px;

      .ranking-name {
        font-size: 14px;
        color: #333333;
        font-weight: bolder;
      }

      .icon {
        display: flex;
        margin-top: 10px;
      }
      .play,
      .collect {
        display: block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }
      .collect {
        background-position: -299px -205px;
        &:hover {
          background-position: -299px -235px;
        }
      }
    }
  }

  .ranking-content {
    .ranking-item {
      height: 32px;
      line-height: 32px;
      display: flex;
      justify-content: space-between;
      .ranking-item-left {
        span {
          display: inline-block;
          text-align: center;
          width: 35px;
          height: 32px;
          margin-left: 15px;
          font-size: 16px;
        }
        a {
          color: #000;
        }
      }
    }
    .ranking-item:hover {
      .ranking-item-right {
        display: flex;
        align-items: center;
        margin-right: 10px;
        .item-play,
        .item-add,
        .item-collect {
          display: inline-block;
          width: 19px;
          height: 19px;
          margin-right: 5px;
        }
      }
      .ranking-item-left {
        width: 168px;
      }

      .item-add {
        background-position: 2px -697px;
      }
      .item-add:hover {
        background-position: -20px -697px;
        cursor: pointer;
      }

      .item-play {
        background-position: -267px -267px;
      }
      .item-play:hover {
        background-position: -267px -287px;
        cursor: pointer;
      }

      .item-collect {
        background-position: -296px -267px;
      }
      .item-collect:hover {
        background-position: -296px -287px;
        cursor: pointer;
      }
    }
  }
  .ranking-item:nth-child(1),
  .ranking-item:nth-child(2),
  .ranking-item:nth-child(3) span {
    color: #c10d0c;
  }

  .all {
    line-height: 32px;
    margin-right: 32px;
    text-align: right;
    a {
      color: #000;
    }
  }
`;
