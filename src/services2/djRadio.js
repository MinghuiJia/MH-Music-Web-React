/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:50:54
 * @LastEditTime: 2022-11-14 18:24:26
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services2\djRadio.js
 * @Description:
 */
import request from "./request";

export const getRadioRankingList = (cateId, limit, offset) => {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset,
    },
  });
};
