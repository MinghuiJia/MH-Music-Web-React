/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:09:34
 * @LastEditTime: 2022-10-27 21:09:43
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
