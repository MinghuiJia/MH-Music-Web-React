/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 22:11:59
 * @LastEditTime: 2022-10-23 22:43:36
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\utils\tools.js
 * @Description:
 */
export const playCountConvert = (playCount) => {
  if (parseInt(playCount / 10000) > 0) {
    return parseInt(playCount / 10000) + "万";
  } else {
    return playCount;
  }
};

export const getSizeImg = (imgUrl, size) => {
  return `${imgUrl}?param=${size}x${size}`;
};
