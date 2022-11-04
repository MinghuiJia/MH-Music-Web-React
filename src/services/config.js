/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:17:14
 * @LastEditTime: 2022-11-04 14:53:48
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\services\config.js
 * @Description: 
 */

// const devBaseURL = "http://123.207.32.32:9001/";
// const proBaseURL = "http://123.207.32.32:9001/";

const devBaseURL = "http://127.0.0.1:4000/";
const proBaseURL = "http://139.9.104.53:4000/";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;