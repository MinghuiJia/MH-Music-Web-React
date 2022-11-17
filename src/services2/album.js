/*
 * @Author: jiaminghui
 * @Date: 2022-11-17 20:15:35
 * @LastEditTime: 2022-11-17 20:43:22
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services2\album.js
 * @Description:
 */
import request from "./request";

export const getHotAlbum = () => {
  return request({
    url: "/album/newest",
  });
};

export const getAllAlbum = (offset, limit) => {
  return request({
    url: "/top/album",
    params: {
      offset,
      limit,
    },
  });
};
