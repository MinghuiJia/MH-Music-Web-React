/*
 * @Author: jiaminghui
 * @Date: 2022-10-22 11:38:36
 * @LastEditTime: 2022-10-22 23:11:50
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\banner\index.js
 * @Description:
 */
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import {
  MHBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style";
import { Carousel } from "antd";

export default memo(function MHBanner() {
  // hooks组件与redux关联
  // 数据获取
  // 获取store中的数据
  // 注意：这里返回的对象，是进行===比较（而不是浅层比较），即state发生改变后，和之前的state进行===比较，不一样就会渲染页面
  // 为了性能优化，就需要给useSelector传递第二个参数shallowEqual import { shallowEqual } from "react-redux";
  // shallowEqual在这里比较的时候，因为是一个对象变量，两个对象变量的key对应的value都指向同一个地址，所以shallowEqual比较完结果是相同
  // 而在setState中的shallowEqual，例如一个students数组，元素是对象（姓名，身高等），由于这个students是一个数组，所以...浅层拷贝后新的数组与原来的数组地址变了，但是里面对象的地址是一致的。在shallowEqual中，只会比较到state下面的student变量对应的地址，也就是数组的地址，由于发生改变了，所以会更新state
  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanner } = useSelector(
    (state) => ({
      // topBanner: state.recommend.topBanner,
      // topBanner: state.get("recommend").get("topBanner"),
      topBanner: state.getIn(["recommend", "topBanner"]),
    }),
    shallowEqual
  );

  const CarouselrRef = useRef();
  // 获取当前轮播切换时对应的索引，并在state中存储
  // 注意这里需要useCallback对回调函数进行包裹，是因为这个回调函数会传递到子组件中，防止子组件的props更新引起组件重新渲染，降低性能
  const indexChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  // 这里先需要对undefined的情况进行处理，因为一开始可能没有topBanner数据，这里不熟悉，还是熟练一下
  const bgImg =
    topBanner[currentIndex] &&
    topBanner[currentIndex].imageUrl + "?imageView&blur=40x20";

  // 进行操作
  // 在react-redux中有useDispatch方法，让我们直接获取dispatch
  const dispatch = useDispatch();
  // 然后这里就不需要mapDispatchToProps了，可以直接在useEffect中进行action的派发
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <MHBannerWrapper imgUrl={bgImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            dotPosition={"bottom"}
            autoplay
            beforeChange={indexChange}
            ref={CarouselrRef}
          >
            {topBanner.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <button className="download-button" onClick={e => window.open("https://music.163.com/#/download")}></button>
          <div className="download-info">
            PC 安卓 iphone WP iPad Mac 六大客户端
          </div>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => {CarouselrRef.current.prev()}}></button>
          <button className="btn right" onClick={e => {CarouselrRef.current.next()}}></button>
        </BannerControl>
      </div>
    </MHBannerWrapper>
  );
});
