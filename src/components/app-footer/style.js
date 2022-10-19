/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 15:12:15
 * @LastEditTime: 2022-10-19 19:47:06
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\components\app-footer\style.js
 * @Description:
 */
import styled from "styled-components";

export const FooterWrapped = styled.div`
  height: 115px;
  color: #333333;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const FooterLeft = styled.div`
  color: #666;
  height: 28px;
  line-height: 28px;
  .footerLinks {
    a,
    span {
      color: #999;
    }

    span {
      margin: 0 2px 0 4px;
    }
  }

  .copy {
    span:nth-child(1) {
      margin-right: 14px;
    }
  }

  .beian {
    span {
      display: inline-block;
      margin: 0 5px 0 8px;
      width: 14px;
      height: 14px;
      background-image: url(${require("@/assets/img/gongan.png")});
      background-size: cover;
      position: relative;
      top: 2px;
    }
  }

  .license {
    span:nth-child(1) {
      margin-right: 14px;
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  .image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;
  }
  .image-item a {
    display: block;
    width: 50px;
    height: 45px;
    margin: 0 15px
    
  }
  .image-item .title {
    display: block;
    text-align: center;
    margin-top: 5px;
    background-image: url(${require("@/assets/img/sprite_footer_01.png")});
    background-size: 180px 100px;
    width: 52px;
    height: 10px;
  }
  .image-item:nth-child(1) span {
    background-position: -1px -90px;
  }
  .image-item:nth-child(2) span {
    background-position: 0 0;
  }
  .image-item:nth-child(3) span {
    background-position: 0 -54px;
  }
  .image-item:nth-child(4) span {
    background-position: -1px -72px;
  }



  .image-item .image {
    background-image: url(${require("@/assets/img/sprite_footer_02.png")});
    background-size: 110px 450px;
  }
  .image-item:nth-child(1) a {
    background-position: -60px -101px;
  }
  .image-item:nth-child(2) a {
    background-position: 0 0;
  }
  .image-item:nth-child(3) a {
    background-position: -60px -50px;
  }
  .image-item:nth-child(4) a {
    background-position: 0 -101px;
  }
`;
