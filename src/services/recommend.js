/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 13:29:13
 * @LastEditTime: 2022-10-26 17:22:40
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\recommend.js
 * @Description:
 */
import request from "@/services/request";

export const getTopBanner = () => {
  return request({
    url: "/banner",
  });
};

export const getHotRecommend = (limit) => {
  return request({
    url: "/personalized",
    params: {
      limit: limit,
    },
  });
};

export const getNewAlbum = (limit) => {
  return request({
    url: "/top/album",
    params: {
      limit: limit,
    },
  });
};

export const getRankings = (idx) => {
  return request({
    url: "/top/list",
    params: {
      idx: idx,
    },
  });
};

export const getArtistLists = (cat) => {
  return request({
    url: "/artist/list",
    params: {
      cat: cat,
    },
  });
};

export const getHotArtists = () => {
  return request({
    url: "/top/artists",
    params: {
      offset: 0,
      limit: 5,
    },
  });
};
