/*
 * @Author: jiaminghui
 * @Date: 2022-10-22 11:38:44
 * @LastEditTime: 2022-10-22 22:57:29
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\banner\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHBannerWrapper = styled.div`
  height: 285px;
  /* 这里不熟悉再学习一下，传递参数的方式不熟悉，同时background后面两个参数也不记得了 */
  background: url(${(props) => {return props.imgUrl}}) center/6000px;

  .banner {
    height: 100%;
    background-color: red;
    display: flex;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  height: 100%;
  background-color: green;
  .banner-item .image {
    width: 730px;
    height: 285px;
  }
`;

export const BannerRight = styled.div`
  width: 254px;
  height: 100%;
  background-image: url(${require("@/assets/img/download.png")});
  position: relative;

  .download-info {
    width: 100%;
    position: absolute;
    bottom: 0;
    color: #8D8D8D;
    margin: 10px 0;
    text-align: center;
  }
  .download-button {
    width: 215px;
    height: 56px;
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(${require("@/assets/img/download.png")});
    background-position: 0 -289px;
    cursor: pointer;
  }
`;

export const BannerControl = styled.div`
  height: 100%;
  position: relative;
  /* position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%); */
  .btn {
    width: 37px;
    height: 63px;
    background-color: transparent;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    position: absolute;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
  }
  .left {
    top: 50%;
    transform: translate(-1037px, -50%);
    /* left: 150px; */
    background-position: 0 -360px;
  }
  .right {
    top: 50%;
    transform: translate(20px, -50%);
    /* right: 150px; */
    background-position: 0 -508px;
  }
`;
