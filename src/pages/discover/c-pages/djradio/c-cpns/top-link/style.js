/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:37:57
 * @LastEditTime: 2022-11-14 15:58:06
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\djradio\c-cpns\top-link\style.js
 * @Description:
 */
import styled from "styled-components";

export const MHTopLinkWrapper = styled.div`
  width: 100%;
  position: relative;
  .page1,
  .page2 {
    display: flex !important;
    flex-wrap: wrap;
  }
  .prev,
  .next {
    width: 20px;
    height: 30px;
    position: absolute;
    top: 50%;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    opacity: 0.08;
    cursor: pointer;
    &.active {
      opacity: 0.2;
    }
  }
  .prev {
    transform: translate(15px, -50%);
    background-position: 0 -30px;
    &.active {
      &:hover {
        opacity: 0.4;
      }
    }
  }
  .next {
    right: 15px;
    transform: translateY(-50%);
    background-position: -30px -30px;
    &.active {
      &:hover {
        opacity: 0.4;
      }
    }
  }
  .slick-dots-bottom li {
    height: 20px;
    position: relative;
    top: 10px;
    button {
      width: 20px;
      height: 20px;
      background-image: url(${require("@/assets/img/radio_slide.png")}) !important;
      background-position: 0 0 !important;
      position: relative;
    }
    &.slick-active button {
      background-position: -30px 0 !important;
    }
  }
`;

export const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 70px;
  align-items: center;
  margin: 0 0 25px 34px;
  .icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    background-image: url(${(props) => props.bgImgUrl});
  }
  span {
    display: inline-block;
    color: #888;
  }
  &:hover {
    background-color: rgb(246, 247, 247);
    cursor: pointer;
  }
  &.active {
    background-image: url(${require("@/assets/img/radio_bg.png")});
    background-position: -70px 0;
    background-repeat: no-repeat;
    span {
      color: #d35757;
    }
    .icon {
      background-position: -48px 0;
    }
  }
`;
