/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 19:06:37
 * @LastEditTime: 2022-10-23 21:11:42
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\theme-header-rcm\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHThemeHeaderRCMWrapper = styled.div`
  .header {
    padding: 0 10px 0 34px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #c10d0c;
    height: 35px;

    background-position: -225px -154px;
  }

  .header-left {
    display: flex;
    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .keyword {
      display: flex;
      margin: 7px 0 0 20px;

      .header-item span {
        margin: 0 10px;
        color: #cccccc;
      }
      .header-item:nth-last-child(1) span {
        color: transparent;
      }
    }
  }

  .header-right {
    margin-top: 7px;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
      margin-left: 4px;
      position: relative;
      top: 3px;
    }
  }
`;
