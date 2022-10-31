/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:02:11
 * @LastEditTime: 2022-10-31 21:48:52
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
import { getRandomNumber } from "@/utils/math-utils";

export const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
  };
};

export const changeCurrentSongIndexAction = (index) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index,
  };
};

export const changePlayListAction = (playList) => {
  return {
    type: actionTypes.CHANGE_PLAY_LIST,
    playList,
  };
};

export const changeSequenceAction = (sequence) => {
  return {
    type: actionTypes.CHANGE_SEQUENCE,
    sequence,
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

export const changeCurrenSongIndexAndCurrentSongAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playList = getState().getIn(["player", "playList"]);
    let randomIndex = -1;
    switch (sequence) {
      case 1: // 随机播放
        randomIndex = getRandomNumber(playList.length);
        while (currentSongIndex === randomIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放或单曲播放，点击切换都会变的，所以逻辑一致
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    // findIndex和filter一样，是一个高阶函数，如果满足判断条件后会返回满足条件对应的索引
    const songIndex = playList.findIndex((song) => song.id === ids);

    // 表示当前点击的歌曲已经在列表中
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(playList[songIndex]));
    } // 表示当前点击的歌曲不在列表中
    else {
      getSongDetail(ids).then((res) => {
        console.log(res);

        const song = res.songs && res.songs[0];
        if (!song) return;

        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changeCurrentSongAction(song));
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      });
    }

    // getSongDetail(ids).then((res) => {
    //   console.log(res);
    //   dispatch(changeCurrentSongAction(res.songs[0]));
    // });
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
