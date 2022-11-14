/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:17:14
 * @LastEditTime: 2022-11-14 18:23:04
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services2\config.js
 * @Description: 
 */

// const devBaseURL = "http://123.207.32.32:9001/";
// const proBaseURL = "http://123.207.32.32:9001/";

const devBaseURL = "http://127.0.0.1:5000/";
const proBaseURL = "http://139.9.104.53:5000/";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;