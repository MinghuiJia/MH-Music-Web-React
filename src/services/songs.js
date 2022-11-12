/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:17:08
 * @LastEditTime: 2022-11-12 21:51:37
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\songs.js
 * @Description:
 */
import request from "./request";

export const getPlayListCategory = () => {
  return request({
    url: "/playlist/catlist",
  });
};

export const getOneSongsList = (order, cat, limit, offset) => {
  return request({
    url: "/top/playlist",
    params: {
      order: order,
      cat: cat,
      limit: limit,
      offset: offset,
    },
  });
};
