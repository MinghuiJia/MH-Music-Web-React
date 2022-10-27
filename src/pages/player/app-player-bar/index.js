/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 17:19:09
 * @LastEditTime: 2022-10-27 23:21:03
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\app-player-bar\index.js
 * @Description:
 */
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getSongDetailAction } from "../store/actionCreators";
import { getSizeImg, getSongPlayer } from "@/utils/format-utils";

import { Slider } from "antd";
import {
  HYAppPlayerBarWrapper,
  LeftControl,
  Player,
  RightControl,
} from "./style";

export default memo(function MHAppPlayerBar() {
  // state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, SetProgress] = useState(0);
  const [isDown, setIsDown] = useState(false);

  //redux hooks
  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(["player", "currentSong"]),
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

  const playMusic = (currTime) => {
    audioRef.current.src = getSongPlayer(currentSong.id);
    audioRef.current.currentTime = currTime / 1000;
    audioRef.current.play();
  };

  const changeCurrentTime = (e) => {
    // *1000变为毫秒
    if (isDown === true) SetProgress(e.target.currentTime * 1000);
    setCurrentTime(e.target.currentTime * 1000);
  };

  const changeSliderValue = useCallback((value) => {
    setIsDown(false);
    SetProgress(value);
  }, []);

  const afterChangeSliderValue = useCallback((value) => {
    // 当前value拿到的是毫秒，但其实radio的e.target.currentTime是秒
    // setIsDown(true);
    setIsDown(true);
    setCurrentTime(value);
    audioRef.current.currentTime = value / 1000;
  }, []);

  return (
    <HYAppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <LeftControl>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic(currentTime)}
          ></button>
          <button className="sprite_player next"></button>
        </LeftControl>
        <Player>
          <div className="song-image">
            <a href="goto">
              <img src={getSizeImg(picUrl, 34)} alt=""></img>
            </a>
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
        <RightControl>
          <div className="left">
            <div className="pip icon"></div>
            <div className="like sprite_player icon"></div>
            <div className="share sprite_player icon"></div>
          </div>
          <div className="divider">|</div>
          <div className="right">
            <div className="vol sprite_player icon"></div>
            <div className="loop sprite_player icon"></div>
            <div className="menu sprite_player">
              <a href="goto">11</a>
            </div>
          </div>
        </RightControl>
      </div>

      {/* 搞一个audio，帮助我们播放流媒体数据 */}
      {/* audio 有一个 onTimeUpdate 回调函数，可以监听音频当前播放的时间 */}
      <audio ref={audioRef} onTimeUpdate={changeCurrentTime} />
    </HYAppPlayerBarWrapper>
  );
});
