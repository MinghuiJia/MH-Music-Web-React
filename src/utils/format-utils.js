/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 22:11:59
 * @LastEditTime: 2022-10-27 22:17:20
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\utils\format-utils.js
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

export const getSongPlayer = (id) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
