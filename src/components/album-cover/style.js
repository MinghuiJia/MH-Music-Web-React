/*
 * @Author: jiaminghui
 * @Date: 2022-10-25 13:40:59
 * @LastEditTime: 2022-10-25 17:38:27
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\album-cover\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHAlbumCoverWrapper = styled.div`
  .album-item {
    width: ${(props) => {
      return props.size.width;
    }};
  }

  .album-img {
    background-position: 0
      ${(props) => {
        return props.size.coverPosition;
      }};
    position: relative;
    .icon {
      display: block;
      width: 20px;
      height: 20px;

      position: absolute;
    }
    &:hover .icon {
      bottom: 5px;
      right: 25px;
      background-position: -1px -86px;
    }
    .icon:hover {
      background-position: -1px -111px;
    }
    &:hover {
      cursor: pointer;
    }

    img {
      width: ${(props) => {
        return props.size.height;
      }};
      height: ${(props) => {
        return props.size.height;
      }};
    }
  }

  .album-info {
    display: flex;
    flex-direction: column;
    .album-name {
      color: #000;
    }
    .album-info {
      color: #666;
    }
  }
`;
