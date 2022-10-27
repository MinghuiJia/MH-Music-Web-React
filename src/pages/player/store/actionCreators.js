/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:02:11
 * @LastEditTime: 2022-10-27 21:47:19
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\store\actionCreators.js
 * @Description:
 */

import * as actionTypes from "./constants";
import { getSongDetail } from "@/services/player";

export const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    getSongDetail(ids).then((res) => {
      console.log(res);
      dispatch(changeCurrentSongAction(res.songs[0]));
    });
  };
};
