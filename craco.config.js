/*
 * @Author: jiaminghui
 * @Date: 2022-10-18 23:04:45
 * @LastEditTime: 2022-10-18 23:06:05
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\craco.config.js
 * @Description: 
 */
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
