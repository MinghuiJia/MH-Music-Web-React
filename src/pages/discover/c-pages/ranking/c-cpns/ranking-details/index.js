/*
 * @Author: jiaminghui
 * @Date: 2022-11-10 17:34:29
 * @LastEditTime: 2022-11-11 21:10:51
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\ranking\c-cpns\ranking-details\index.js
 * @Description:
 */
import React, { memo } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { getSizeImg } from "@/utils/format-utils";
import { getSongDetailAction } from "@/pages/player/store/actionCreators";
import { changePlayListRankingAction } from "../../store/actionCreators";

import { MHRankingDetailsWrapper } from "./style";

export default memo(function MHRankingDetails(props) {
  const { rankingList } = props;

  // redux hooks
  const dispatch = useDispatch();
  const { currentSongIndex } = useSelector((state) => {
    return {
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    };
  });
  const playMusic = (item) => {
    if (item.id) dispatch(getSongDetailAction(item.id));
  };

  const sequencePlay = () => {
    dispatch(
      changePlayListRankingAction(
        rankingList.tracks &&
          rankingList.tracks.filter((item, index) => index < 20)
      )
    );
  };

  return (
    <MHRankingDetailsWrapper>
      <div className="detail-top">
        <div className="left">
          <img src={getSizeImg(rankingList.coverImgUrl, 150)} alt="" />
          <span className="msk sprite_covor"></span>
        </div>
        <div className="right">
          <span className="ranking-name">{rankingList.name}</span>
          <div className="update-time">
            <i className="clock-icon sprite_icon2"></i>
            <span>
              {"最近更新: " + moment(rankingList.updateTime).format("MM月DD日")}
            </span>
          </div>
          <div className="info-tool">
            <button className="play" onClick={(e) => sequencePlay()}>
              <i className="sprite_button"></i>
              <span>播放</span>
            </button>
            <button className="add sprite_button2">
              <span>+</span>
            </button>
            <button className="collect">
              <i className="sprite_button2"></i>
              <span>收藏</span>
            </button>
            <button className="share">
              <i className="sprite_button"></i>
              <span>分享</span>
            </button>
            <button className="download">
              <i className="sprite_button"></i>
              <span>下载</span>
            </button>
            <button className="comments">
              <i className="sprite_button"></i>
              <span>(2105)</span>
            </button>
          </div>
        </div>
      </div>
      <div className="detail-content">
        <div className="content-header">
          <div className="content-left">
            <span className="content-name">歌曲列表</span>
            <span className="content-song-count">
              {rankingList.tracks &&
                (rankingList.tracks.length > 20
                  ? "20"
                  : rankingList.tracks.length)}
              首歌
            </span>
          </div>
          <div className="content-right">
            <span>播放: </span>
            <span className="play-count">{rankingList.playCount}</span>
            <span>次</span>
          </div>
        </div>
        <div className="content-table">
          <table>
            <thead>
              <tr>
                <th className="id sprite_table"></th>
                <th className="name sprite_table">标题</th>
                <th className="duration sprite_table">时长</th>
                <th className="singer sprite_table">歌手</th>
              </tr>
            </thead>
            <tbody>
              {rankingList.tracks &&
                rankingList.tracks
                  .filter((item, index) => index < 20)
                  .map((item, index) => {
                    if (index < 3) {
                      return (
                        <tr key={item.id + item.name} className="top3-ranking">
                          <td className="id">
                            <div className="id-content">
                              <span>{index + 1}</span>
                              <i className="sprite_icon2"></i>
                            </div>
                          </td>
                          <td className="info">
                            <div className="text-nowrap">
                              <img
                                src={getSizeImg(item.al.picUrl, 50)}
                                alt=""
                              />
                              <i
                                className={
                                  "play-icon sprite_table" +
                                  (currentSongIndex === index ? " active" : "")
                                }
                                onClick={(e) => playMusic(item)}
                              ></i>
                              <a className="song-name" href="goto">
                                {item.name}
                              </a>
                            </div>
                          </td>
                          <td className="duration">
                            <div className="duration-time">
                              <span>{moment(item.dt).format("mm:ss")}</span>
                            </div>
                            <div className="tools">
                              <i className="add-icon icon sprite_icon2"></i>
                              <i className="collect-icon icon sprite_table"></i>
                              <i className="share-icon icon sprite_table"></i>
                              <i className="download-icon icon sprite_table"></i>
                            </div>
                          </td>
                          <td className="singer-name">
                            <div className="text-nowrap">
                              {item.ar.map((iten, indey, arr) => {
                                return (
                                  <a key={iten.id + iten.name} href="goto">
                                    {iten.name +
                                      (indey === arr.length - 1 ? "" : "/")}
                                  </a>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={item.id + item.name} className="rest-ranking">
                          <td className="id">
                            <div className="id-content">
                              <span>{index + 1}</span>
                              <i className="sprite_icon2"></i>
                            </div>
                          </td>
                          <td className="info">
                            <div className="text-nowrap">
                              <i
                                className={
                                  "play-icon sprite_table" +
                                  (currentSongIndex === index ? " active" : "")
                                }
                                onClick={(e) => playMusic(item)}
                              ></i>
                              <a className="song-name" href="goto">
                                {item.name}
                              </a>
                            </div>
                          </td>
                          <td className="duration">
                            <div className="duration-time">
                              <span>{moment(item.dt).format("mm:ss")}</span>
                            </div>
                            <div className="tools">
                              <i className="add-icon icon sprite_icon2"></i>
                              <i className="collect-icon icon sprite_table"></i>
                              <i className="share-icon icon sprite_table"></i>
                              <i className="download-icon icon sprite_table"></i>
                            </div>
                          </td>
                          <td className="singer-name">
                            <div className="text-nowrap">
                              {item.ar.map((iten, indey, arr) => {
                                return (
                                  <a key={iten.id + iten.name} href="goto">
                                    {iten.name +
                                      (indey === arr.length - 1 ? "" : "/")}
                                  </a>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </MHRankingDetailsWrapper>
  );
});
