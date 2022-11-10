/*
 * @Author: jiaminghui
 * @Date: 2022-11-10 17:46:25
 * @LastEditTime: 2022-11-10 17:46:36
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\ranking.js
 * @Description:
 */
import request from "./request";

export const getRankingList = (idx) => {
  return request({
    url: "/top/list",
    params: {
      idx: idx,
    },
  });
};
