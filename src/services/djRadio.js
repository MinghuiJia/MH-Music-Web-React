/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:50:54
 * @LastEditTime: 2022-11-13 20:51:03
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\djRadio.js
 * @Description:
 */
import request from "./request";

export const getDjCategoryList = () => {
  return request({
    url: "/dj/catelist",
  });
};
