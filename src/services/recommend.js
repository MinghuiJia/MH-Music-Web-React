/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 13:29:13
 * @LastEditTime: 2022-10-23 20:35:38
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
