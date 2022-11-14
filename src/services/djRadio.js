/*
 * @Author: jiaminghui
 * @Date: 2022-11-13 20:50:54
 * @LastEditTime: 2022-11-14 18:24:40
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

export const getNewRadioList = (type) => {
  return request({
    url: "/dj/recommend/type",
    params: {
      type: type,
    },
  });
};
