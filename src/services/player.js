/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:09:34
 * @LastEditTime: 2022-10-28 21:27:19
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\player.js
 * @Description:
 */
import request from "./request";

export const getSongDetail = (ids) => {
  return request({
    url: "/song/detail",
    params: {
      ids: ids,
    },
  });
};

export const getSimiPlayList = (id) => {
  return request({
    url: "/simi/playlist",
    params: {
      id: id,
    },
  });
};

export const getSimiSong = (id) => {
  return request({
    url: "/simi/song",
    params: {
      id: id,
    },
  });
};

export const getSongLyric = (id) => {
  return request({
    url: "/lyric",
    params: {
      id: id,
    },
  });
};
