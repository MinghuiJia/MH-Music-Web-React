/*
 * @Author: jiaminghui
 * @Date: 2022-11-14 16:22:49
 * @LastEditTime: 2022-11-14 19:35:05
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\radio-ranking\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHRadioRankingWrapper = styled.div`
  padding: 0 40px;
  margin-top: 35px;
  .radio-ranking-title {
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    .left {
      span {
        font-size: 24px;
        color: #333;
      }
    }
    .right {
      margin: 12px 0 0 20px;
      span {
        color: #666;
      }
      .divider {
        margin: 0 10px;
      }
      .fast-ranking,
      .hot-ranking {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }

  .radio-ranking-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .radio-ranking-item {
    }
  }
  .radio-ranking-bottom{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
`;
