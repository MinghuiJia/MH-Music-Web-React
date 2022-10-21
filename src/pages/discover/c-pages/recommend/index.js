/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:57:07
 * @LastEditTime: 2022-10-21 20:49:18
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\index.js
 * @Description:
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function MHRecommend(props) {

  // hooks组件与redux关联
  // 数据获取
  // 获取store中的数据
  // 注意：这里返回的对象，是进行===比较（而不是浅层比较），即state发生改变后，和之前的state进行===比较，不一样就会渲染页面
  // 为了性能优化，就需要给useSelector传递第二个参数shallowEqual import { shallowEqual } from "react-redux";
  // shallowEqual在这里比较的时候，因为是一个对象变量，两个对象变量的key对应的value都指向同一个地址，所以shallowEqual比较完结果是相同
  // 而在setState中的shallowEqual，例如一个students数组，元素是对象（姓名，身高等），由于这个students是一个数组，所以...浅层拷贝后新的数组与原来的数组地址变了，但是里面对象的地址是一致的。在shallowEqual中，只会比较到state下面的student变量对应的地址，也就是数组的地址，由于发生改变了，所以会更新state
  const { topBanner } = useSelector((state) => ({
    // topBanner: state.recommend.topBanner,
    // topBanner: state.get("recommend").get("topBanner"),
    topBanner: state.getIn(["recommend", "topBanner"]),
  }), shallowEqual);

  // 进行操作
  // 在react-redux中有useDispatch方法，让我们直接获取dispatch
  const dispatch = useDispatch();
  // 然后这里就不需要mapDispatchToProps了，可以直接在useEffect中进行action的派发
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>MHRecommend:{topBanner.length}</h2>
    </div>
  );
}

export default memo(MHRecommend);
// 在用mapStateToProps时，由于我们返回了一个对象，里面是我们在这个页面用到的数据
// 当store中的state发生改变时，由于mapStateToProps里面的对象没有用到state中改变的对象，即mapStateToProps对象没有发生改变
// 此时就不会重新渲染当前组件，这里是因为connect返回的高阶组件，帮助我们进行了性能优化，对mapStateToProps中的对象进行浅层比较了，如果没变化就不重新渲染
