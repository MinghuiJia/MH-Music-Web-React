/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 14:23:35
 * @LastEditTime: 2022-11-12 20:26:09
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-header\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHSongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  .header-left {
    display: flex;
    span {
      color: #333;
      font-size: 24px;
    }
    align-items: center;
    .select-category {
      .ant-popover-inner-content{
        padding: 0;
      }
      .ant-popover-content {
        background-image: url(${require("@/assets/img/sltlyr.png")});
        background-position: -720px 0;
        background-repeat: repeat-y;
        width: 700px;
        .ant-popover-title {
          padding: 0;
          border-bottom: 1px solid #e6e6e6;
        }
      }
    }

    .ant-btn {
      width: 86px;
      height: 28px;
      padding: 0 3px 0 0;
      border-radius: 3px;
      margin-left: 12px;
      .u-icn {
        display: inline-block;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
        margin-left: 5px;
      }
      span {
        display: inline-block;
        color: #0c73c2;
        font-size: 12px;
      }
    }
  }

  .header-right {
    .hot-btn {
      width: 46px;
      height: 29px;
      background-position: 0 0;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: #fff;
      }
    }
  }
`;
