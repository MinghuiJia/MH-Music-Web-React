/*
 * @Author: jiaminghui
 * @Date: 2022-10-26 15:57:29
 * @LastEditTime: 2022-10-28 21:45:55
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\settle-singer\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getArtistListsAction } from "../../store/actionCreators";
import { getSizeImg } from "@/utils/format-utils";

import { MHSettleSingerWrapper } from "./style";
import MHListHeaderRCM from "@/components/list-header-rcm";

export default memo(function MHSettleSinger() {
  //redux hooks
  const { artistList } = useSelector((state) => {
    return {
      artistList: state.getIn(["recommend", "artistList"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistListsAction(5001));
  }, [dispatch]);

  return (
    <MHSettleSingerWrapper>
      <MHListHeaderRCM title="入驻歌手" all_link={["查看全部>"]} />
      <div className="artist-name-list">
        {artistList.map((item, index) => {
          return (
            index < 5 && (
              <div className="artist-item" key={item.id}>
                <img src={getSizeImg(item.img1v1Url, 62)} alt=""></img>
                <div className="artist-info text-nowrap">
                  <span className="artist-name text-nowrap">
                    {item.name + (item.alias[0] || "")}
                  </span>
                  <span className="artist-describe"></span>
                </div>
              </div>
            )
          );
        })}

        {/* {artistList.map((item, index) => {
          return index <5 && <h2>{item.name}</h2>;
        })} */}
      </div>
    </MHSettleSingerWrapper>
  );
});
