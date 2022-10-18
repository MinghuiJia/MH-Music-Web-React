/*
 * @Author: jiaminghui
 * @Date: 2022-10-18 22:12:48
 * @LastEditTime: 2022-10-18 23:07:30
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\index.js
 * @Description: 
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/reset.css"

// // disable react-dev-tools for this project
// if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
// 	for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
// 		window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? ()=>{} : null;
// 	}
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
