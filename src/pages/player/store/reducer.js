/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:01:59
 * @LastEditTime: 2022-10-31 20:53:16
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\store\reducer.js
 * @Description:
 */
/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:01:59
 * @LastEditTime: 2022-10-27 21:04:56
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";

import * as actionTypes from "./constants";

const initState = Map({
  playList: [
    {
      name: "有何不可",
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: "许嵩",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "600902000007916021",
      fee: 8,
      v: 67,
      crbt: null,
      cf: "",
      al: {
        id: 16953,
        name: "自定义",
        picUrl:
          "https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
        tns: [],
        pic_str: "109951166118671647",
        pic: 109951166118671650,
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -58025,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -55432,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -53760,
        sr: 44100,
      },
      sq: {
        br: 941672,
        fid: 0,
        size: 28466869,
        vd: -58130,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: "1",
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 67,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      mst: 9,
      cp: 22036,
      rurl: null,
      publishTime: 1231516800000,
    },
    {
      name: "我曾遇到一束光",
      id: 1988532821,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12149035,
          name: "叶斯淳",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 3,
      crbt: null,
      cf: "",
      al: {
        id: 153017852,
        name: "我曾遇到一束光",
        picUrl:
          "https://p2.music.126.net/vMpq9sPFSuvbMOkw804sXQ==/109951167956644774.jpg",
        tns: [],
        pic_str: "109951167956644774",
        pic: 109951167956644770,
      },
      dt: 259756,
      h: {
        br: 320000,
        fid: 0,
        size: 10393005,
        vd: -46485,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6235821,
        vd: -43877,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4157229,
        vd: -42148,
        sr: 48000,
      },
      sq: {
        br: 920326,
        fid: 0,
        size: 29882561,
        vd: -46873,
        sr: 48000,
      },
      hr: {
        br: 1689544,
        fid: 0,
        size: 54858683,
        vd: -46483,
        sr: 48000,
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      mst: 9,
      cp: 0,
      rurl: null,
      publishTime: 0,
    },
    {
      name: "我怀念的",
      id: 1821234186,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 34827063,
          name: "AKA_wen酱",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 0,
      v: 7,
      crbt: null,
      cf: "",
      al: {
        id: 123127769,
        name: "我怀念的",
        picUrl:
          "https://p1.music.126.net/Rm0mcwliaL4GMM0ZuR4n3g==/109951165807175212.jpg",
        tns: [],
        pic_str: "109951165807175212",
        pic: 109951165807175220,
      },
      dt: 292126,
      h: {
        br: 320001,
        fid: 0,
        size: 11687085,
        vd: -16717,
        sr: 48000,
      },
      m: {
        br: 192001,
        fid: 0,
        size: 7012269,
        vd: -14137,
        sr: 48000,
      },
      l: {
        br: 128001,
        fid: 0,
        size: 4674861,
        vd: -12551,
        sr: 48000,
      },
      sq: {
        br: 1508807,
        fid: 0,
        size: 55095296,
        vd: -16712,
        sr: 48000,
      },
      hr: null,
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 128,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 287063,
        name: "我怀念的",
        artists: [
          {
            id: 9272,
            name: "孙燕姿",
          },
        ],
        albumMeta: {
          id: 28520,
          name: "逆光",
        },
      },
      tagPicList: null,
      resourceState: true,
      version: 7,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      rtype: 0,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0,
    },
    {
      name: "我知道",
      id: 1979313985,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 32571955,
          name: "WiFi歪歪",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 3,
      crbt: null,
      cf: "",
      al: {
        id: 151139262,
        name: "我知道",
        picUrl:
          "https://p2.music.126.net/RzWnGoUOZtjiNvxzKortbA==/109951167853222659.jpg",
        tns: [],
        pic_str: "109951167853222659",
        pic: 109951167853222660,
      },
      dt: 228427,
      h: {
        br: 320000,
        fid: 0,
        size: 9139245,
        vd: -31502,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5483565,
        vd: -28900,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3655725,
        vd: -27228,
        sr: 48000,
      },
      sq: {
        br: 938794,
        fid: 0,
        size: 26805825,
        vd: -31584,
        sr: 48000,
      },
      hr: {
        br: 1709247,
        fid: 0,
        size: 48804910,
        vd: -31500,
        sr: 48000,
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 344418,
        name: "我知道",
        artists: [
          {
            id: 11097,
            name: "By2",
          },
        ],
        albumMeta: {
          id: 33979,
          name: "Twins",
        },
      },
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 0,
    },
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0顺序播放， 1随机播放，2单曲播放
  simiPlayList: [],
  simiSong: [],
  songLyric: {},
  lyricList: [],
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_SIMI_PLAY_LIST:
      return state.set("simiPlayList", action.simiPlayList);
    case actionTypes.CHANGE_SIMI_SONG:
      return state.set("simiSong", action.simiSong);
    case actionTypes.CHANGE_SONG_LYRIC:
      return state.set("songLyric", action.songLyric);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    default:
      return state;
  }
};

export default reducer;
