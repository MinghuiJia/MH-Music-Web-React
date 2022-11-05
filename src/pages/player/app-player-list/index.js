/*
 * @Author: jiaminghui
 * @Date: 2022-11-04 15:42:08
 * @LastEditTime: 2022-11-05 21:32:36
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\app-player-list\index.js
 * @Description:
 */
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  changePlayListFlagAction,
  getSongDetailAction,
} from "../store/actionCreators";

import {
  MHAppPlayerListWrapper,
  MHAppPlayerListHeader,
  MHAppPlayerListContent,
} from "./style";
import { useRef, useEffect } from "react";

export default memo(function MHAppPlayerList() {
  // redux hooks
  const dispatch = useDispatch();
  const {
    playList,
    currentSong,
    currentSongIndex,
    lyricList,
    currentLyricIndex,
    playListFlag,
  } = useSelector((state) => {
    return {
      playList: state.getIn(["player", "playList"]),
      currentSong: state.getIn(["player", "currentSong"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      playListFlag: state.getIn(["player", "playListFlag"]),
    };
  });

  // other hooks
  const songLyricRef = useRef();
  const songLyricScrollHeight =
    songLyricRef.current && songLyricRef.current.scrollHeight;
  useEffect(() => {
    if (songLyricRef.current && currentLyricIndex > 0)
      // songLyricRef.current.scrollTop =
      //   currentLyricIndex * (songLyricScrollHeight / lyricList.length) - 90;
      songLyricRef.current.scrollTo({
        top:
          currentLyricIndex * (songLyricScrollHeight / lyricList.length) - 90,
        behavior: "smooth",
      });
  }, [currentLyricIndex, songLyricScrollHeight, lyricList]);

  const handlePlayListFlag = () => {
    dispatch(changePlayListFlagAction(!playListFlag));
  };

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <MHAppPlayerListWrapper showFlag={playListFlag}>
      <MHAppPlayerListHeader>
        <div className="header-left">
          <span className="play-list">播放列表({10})</span>
          <div className="tools">
            <a href="goto" className="save">
              <i className="save-icon icon sprite_playlist"></i>
              <span>全部收藏</span>
            </a>
            <span className="divider"></span>
            <a href="goto" className="delete">
              <i className="delete-icon icon sprite_playlist"></i>
              <span>清除</span>
            </a>
          </div>
        </div>
        <div className="header-right">
          <span className="song-name">{currentSong.name}</span>
          <i
            className="close-icon sprite_playlist"
            onClick={(e) => handlePlayListFlag()}
          ></i>
        </div>
      </MHAppPlayerListHeader>
      <MHAppPlayerListContent>
        <div className="content-play-list">
          {playList.map((item, index) => {
            const song_name = item.name;
            const song_artist = item.ar && item.ar[0] && item.ar[0].name;
            const song_duration = item.dt;
            return (
              <div
                className="play-list-item"
                key={item.id}
                onClick={(e) => playMusic(item)}
              >
                <div className="item-left">
                  <i
                    className={
                      "curr-play-song-icon sprite_playlist" +
                      (index === currentSongIndex ? " active" : "")
                    }
                  ></i>
                  <span className="song-name text-nowrap">{song_name}</span>
                </div>
                <div className="item-right">
                  <div className="song-tools">
                    <i className="save-icon sprite_playlist icon"></i>
                    <i className="share-icon sprite_playlist icon"></i>
                    <i className="download-icon sprite_playlist icon"></i>
                    <i className="delete-icon sprite_playlist icon"></i>
                  </div>
                  <span className="song-artist text-nowrap">{song_artist}</span>
                  <span className="song-duration">
                    {moment(song_duration).format("mm:ss")}
                  </span>
                  <i className="song-from-link-icon sprite_playlist"></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="content-song-lyric" ref={songLyricRef}>
          <i className="question-icon sprite_playlist"></i>
          <div className="lyric-show">
            {lyricList.map((item, index) => {
              return (
                <p
                  className={
                    "lyric-item" +
                    (index === currentLyricIndex ? " active" : "")
                  }
                  key={item.time + item.content}
                >
                  <span>{item.content}</span>
                </p>
              );
            })}
          </div>
        </div>
      </MHAppPlayerListContent>
    </MHAppPlayerListWrapper>
  );
});
