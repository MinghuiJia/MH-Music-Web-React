/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:17:14
 * @LastEditTime: 2022-10-20 11:19:12
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\config.js
 * @Description: 
 */
const devBaseURL = "http://123.207.32.32:9001/";
const proBaseURL = "http://123.207.32.32:9001/";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;