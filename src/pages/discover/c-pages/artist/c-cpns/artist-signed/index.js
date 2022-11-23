/*
 * @Author: jiaminghui
 * @Date: 2022-11-15 21:18:15
 * @LastEditTime: 2022-11-23 13:32:40
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\artist\c-cpns\artist-signed\index.js
 * @Description:
 */
import React, { memo, useEffect, useState, useCallback } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import {
  getSignedSingerAction,
  changeSignedSingerAction,
} from "../../store/actionCreators";

import { MHArtistSignedWrapper } from "./style";
import MHArtistTitle from "../artist-title";
import MHArtistCover from "../artist-cover";

export default memo(function MHArtistSigned() {
  // state hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  const { singerCategory, signedSinger } = useSelector((state) => {
    return {
      singerCategory: state.getIn(["singer", "singerCategory"]),
      signedSinger: state.getIn(["singer", "signedSinger"]),
    };
  }, shallowEqual);

  // other function
  const handleScrollLoading = useCallback(() => {
    // scrollTop是浏览器滚动条的top位置
    var scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    // clientHeight是网页在浏览器中的可视高度
    var clientHeight =
      document.body.clientHeight || document.documentElement.clientHeight;
    // htmlHeight获取网页的总高度
    var htmlHeight =
      document.body.scrollHeight || document.documentElement.scrollHeight;
    // console.log("signed singer scrollTop:", scrollTop);
    // console.log("signed singer clientHeight:", clientHeight);
    // console.log("signed singer htmlHeight:", htmlHeight);
    if (scrollTop + clientHeight >= htmlHeight - 800) {
      if (isLoading === false) {
        // 判断当前是否在加载新内容，防止重复加载
        setIsLoading(true);
        // setTimeout里面的操作,setState是同步的
        setTimeout(() => {
          dispatch(getSignedSingerAction(50, currentPage * 50));
          setCurrentPage(currentPage + 1);
          console.log("加载page:", currentPage);
          setIsLoading(false);
        }, 800);
      }
    }
  }, [currentPage, dispatch, isLoading]);

  // 监听滚动条情况，到页面底部继续加载入驻歌手
  useEffect(() => {
    if (currentPage < 7) {
      window.addEventListener("scroll", handleScrollLoading);
      return () => {
        window.removeEventListener("scroll", handleScrollLoading);
      };
    }
  }, [handleScrollLoading, currentPage]);

  // 页面首次加载时，只请求50个入驻歌手
  useEffect(() => {
    // 需要先情况，因为getSignedSingerAction是在请求的基础上追加到signedSinger列表中
    dispatch(changeSignedSingerAction([]));
    dispatch(getSignedSingerAction(50, 0));
  }, [dispatch]);

  return (
    <MHArtistSignedWrapper>
      <div className="signed-singer">
        <MHArtistTitle titleName={singerCategory} more={""} />
        <div className="img-cover">
          {signedSinger &&
            signedSinger.map((item, index) => {
              return (
                <div
                  className="cover-item"
                  key={
                    item.id +
                    item.name +
                    item.accountId +
                    item.musicSize +
                    item.albumSize
                  }
                >
                  <MHArtistCover info={item} />
                </div>
              );
            })}
        </div>
      </div>
    </MHArtistSignedWrapper>
  );
});
