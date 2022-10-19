/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:06:57
 * @LastEditTime: 2022-10-19 11:11:54
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\router\index.js
 * @Description:
 */
import MHDiscover from "@/pages/discover";
import MHFriend from "@/pages/friend";
import MHMine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    component: MHDiscover,
  },
  {
    path: "/friend",
    component: MHFriend,
  },
  {
    path: "/mine",
    component: MHMine,
  },
];

export default routes;
