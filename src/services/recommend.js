/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 13:29:13
 * @LastEditTime: 2022-10-20 13:30:41
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\recommend.js
 * @Description:
 */
import request from "@/services/request";

export const getTopBanner = request({
  url: "/banner",
});
