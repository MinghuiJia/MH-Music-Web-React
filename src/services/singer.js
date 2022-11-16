/*
 * @Author: jiaminghui
 * @Date: 2022-11-16 20:44:08
 * @LastEditTime: 2022-11-16 22:33:40
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\singer.js
 * @Description:
 */
import request from "./request";

export const getSignedSinger = (limit, offset) => {
  return request({
    url: "/artist/list",
    params: {
      cat: "5001",
      limit: limit,
      offset: offset,
    },
  });
};

export const getHotSinger = () => {
  return request({
    url: "/top/artists",
    params: {
      limit: 100,
    },
  });
};

export const getCategorySinger = (cat, initial) => {
  return request({
    url: "/artist/list",
    params: {
      cat: cat,
      limit: 100,
      initial: initial,
    },
  });
};
