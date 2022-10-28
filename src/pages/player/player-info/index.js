/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 15:34:42
 * @LastEditTime: 2022-10-28 22:57:18
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\player-info\index.js
 * @Description:
 */
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { MHPlayerInfoWrapper } from "./style";

export default memo(function MHPlayerInfo(props) {
  // const { id } = props;
  const [extended, setExtended] = useState(false);

  // redux hooks
  const { lyricList = [] } = useSelector((state) => {
    return {
      lyricList: state.getIn(["player", "lyricList"]),
    };
  }, shallowEqual);
  console.log(lyricList);
  return (
    <MHPlayerInfoWrapper extended={extended}>
      <div className="content-left">
        <div className="pic-bg sprite_covor">
          <img
            src="http://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg?param=130x130"
            alt=""
          ></img>
        </div>
        <div className="outer-player">
          <i className="sprite_icon2"></i>
          <span>生成外链播放器</span>
        </div>
      </div>
      <div className="content-right">
        <div className="info-top">
          <div className="song-name">
            <i className="sprite_icon2"></i>
            <span>有何不可</span>
          </div>
          <div className="song-singer">
            <span>歌手：</span>
            <a href="goto">许嵩</a>
          </div>
          <div className="song-album">
            <span>所属专辑：</span>
            <a href="goto">自定义</a>
          </div>
        </div>
        <div className="info-tool">
          <button className="play">
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
        <div className="info-lyric">
          {lyricList.map((item, index) => {
            return (
              <div className="line-lyric" key={item.time}>
                <span>{item.content}</span>
              </div>
            );
          })}
        </div>
        <div className="extend">
          <span
            onClick={(e) => {
              setExtended(!extended);
            }}
          >
            {extended ? "收起 " : "展开"}
          </span>
          <i className="sprite_icon2"></i>
        </div>
      </div>
    </MHPlayerInfoWrapper>
  );
});
