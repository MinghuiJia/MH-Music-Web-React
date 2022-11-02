/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 17:19:09
 * @LastEditTime: 2022-11-02 21:51:01
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\app-player-bar\index.js
 * @Description:
 */
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrenSongIndexAndCurrentSongAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import { getSizeImg, getSongPlayer } from "@/utils/format-utils";

import { Slider } from "antd";
import {
  HYAppPlayerBarWrapper,
  LeftControl,
  Player,
  RightControl,
} from "./style";
import { NavLink } from "react-router-dom";
import { message } from "antd";

export default memo(function MHAppPlayerBar() {
  // state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, SetProgress] = useState(0);
  const [isDown, setIsDown] = useState(true);
  const [isPlay, setIsPlay] = useState(false);

  //redux hooks
  const { currentSong, playList, sequence, lyricList, currentLyricIndex } =
    useSelector((state) => {
      return {
        currentSong: state.getIn(["player", "currentSong"]),
        playList: state.getIn(["player", "playList"]),
        sequence: state.getIn(["player", "sequence"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      };
    }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  // other hooks
  useEffect(() => {
    console.log(currentSong);
  }, [currentSong]);

  const audioRef = useRef();

  //other handle
  // 在没有值得情况下给一个占位图
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
  const duration = currentSong.dt || "0";

  // 该代码只有在第一次进入，或是currentSong发生改变后才会更新audio的src，所以写在了useEffect的hook中
  useEffect(() => {
    audioRef.current.src = getSongPlayer(currentSong.id);
    // 这个play返回的是一个promise，因为在第一次加载时audio并不会播放，同时有些音乐没版权
    audioRef.current
      .play()
      .then((res) => {
        setIsPlay(true);
      })
      .catch((err) => {
        setIsPlay(false);
      });
  }, [currentSong]);

  const playMusic = useCallback(
    (currTime) => {
      setIsPlay(!isPlay);
      if (isPlay) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    },
    [isPlay]
  );

  const changeCurrentTime = (e) => {
    // *1000变为毫秒
    if (isDown === true) SetProgress(currentTime);
    setCurrentTime(e.target.currentTime * 1000);

    // 简单显示歌词
    const currTime = e.target.currentTime * 1000;
    let i = 0;
    for (; i < lyricList.length; i++) {
      if (currTime < lyricList[i].time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      console.log(lyricList[i - 1]);
      dispatch(changeCurrentLyricIndexAction(i - 1));

      message.open({
        key: "currentLyric",
        content: lyricList[i - 1] && lyricList[i - 1].content,
        duration: 0,
        className: "current-lyric-show",
      });
    }
  };

  const changeMusic = (tag) => {
    dispatch(changeCurrenSongIndexAndCurrentSongAction(tag));
  };

  const handleEndedMusci = () => {
    switch (sequence) {
      case 2: // 单曲播放
        audioRef.current.play();
        break;
      default: // 顺序和随机播放
        dispatch(changeCurrenSongIndexAndCurrentSongAction(1));
    }
  };

  const changeSliderValue = useCallback((value) => {
    setIsDown(false);
    SetProgress(value);
  }, []);

  const afterChangeSliderValue = useCallback(
    (value) => {
      // 当前value拿到的是毫秒，但其实radio的e.target.currentTime是秒
      // setIsDown(true);
      setIsDown(true);
      setCurrentTime(value);
      audioRef.current.currentTime = value / 1000;

      if (!isPlay) playMusic();
    },
    [isPlay, playMusic]
  );

  const changeSequence = () => {
    let newSequence = sequence + 1;
    if (newSequence > 2) {
      newSequence = 0;
    }
    dispatch(changeSequenceAction(newSequence));
  };

  return (
    <HYAppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <LeftControl isPlay={isPlay}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => {
              playMusic(currentTime);
            }}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </LeftControl>
        <Player>
          <div className="song-image">
            <NavLink to={`/discover/player?id=${currentSong.id}`}>
              <img src={getSizeImg(picUrl, 34)} alt=""></img>
            </NavLink>
          </div>
          <div className="song-info">
            <div className="infos">
              <a className="song-name" href="goto">
                {currentSong.name}
              </a>
              <a className="song-singer" href="goto">
                {singerName}
              </a>
              <a className="song-ranking sprite_player" href="goto">
                {" "}
              </a>
            </div>

            <div className="song-player">
              <div className="player-bar">
                <Slider
                  min={0}
                  max={duration}
                  value={progress}
                  onChange={changeSliderValue}
                  onAfterChange={afterChangeSliderValue}
                  tooltip={{
                    formatter: (value) => moment(progress).format("mm:ss"),
                  }}
                />
              </div>
              <div className="player-time">
                <span className="current-time">
                  {moment(progress).format("mm:ss")}
                </span>
                <span className="divider"> / </span>
                <span className="total-time">
                  {moment(duration).format("mm:ss")}
                </span>
              </div>
            </div>
          </div>
        </Player>
        <RightControl sequence={sequence}>
          <div className="left">
            <div className="pip icon"></div>
            <div className="like sprite_player icon"></div>
            <div className="share sprite_player icon"></div>
          </div>
          <div className="divider">|</div>
          <div className="right">
            <div className="vol sprite_player icon"></div>
            <div
              className="loop sprite_player icon"
              onClick={(e) => changeSequence()}
            ></div>
            <div className="menu sprite_player">
              <a href="goto">{playList.length}</a>
            </div>
          </div>
        </RightControl>
      </div>

      {/* 搞一个audio，帮助我们播放流媒体数据 */}
      {/* audio 有一个 onTimeUpdate 回调函数，可以监听音频当前播放的时间 */}
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => changeCurrentTime(e)}
        onEnded={(e) => {
          handleEndedMusci();
        }}
      />
    </HYAppPlayerBarWrapper>
  );
});
