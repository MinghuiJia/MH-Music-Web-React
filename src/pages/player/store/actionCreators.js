/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:02:11
 * @LastEditTime: 2022-10-28 22:35:28
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\store\actionCreators.js
 * @Description:
 */

import * as actionTypes from "./constants";
import {
  getSongDetail,
  getSimiPlayList,
  getSimiSong,
  getSongLyric,
} from "@/services/player";

export const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
  };
};

export const changeSimiPlayListAction = (simiPlayList) => {
  return {
    type: actionTypes.CHANGE_SIMI_PLAY_LIST,
    simiPlayList,
  };
};

export const changeSimiSongAction = (simiSong) => {
  return {
    type: actionTypes.CHANGE_SIMI_SONG,
    simiSong,
  };
};

export const changeSongLyricAction = (songLyric) => {
  return {
    type: actionTypes.CHANGE_SONG_LYRIC,
    songLyric,
  };
};

export const changeLyricListAction = (lyricList) => {
  return {
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList,
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

export const getSimiPlayListAction = (id) => {
  return (dispatch, getState) => {
    getSimiPlayList(id).then((res) => {
      console.log(res);
      dispatch(changeSimiPlayListAction(res.playlists));
    });
  };
};

export const getSimiSongAction = (id) => {
  return (dispatch, getState) => {
    getSimiSong(id).then((res) => {
      console.log(res);
      dispatch(changeSimiSongAction(res.songs));
    });
  };
};

export const getSongLyricAction = (id) => {
  return (dispatch, getState) => {
    getSongLyric(id).then((res) => {
      console.log(res);
      dispatch(changeSongLyricAction(res.lrc));
    });
  };
};
