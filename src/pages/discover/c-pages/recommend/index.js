/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 21:57:07
 * @LastEditTime: 2022-10-22 22:59:34
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHRecommednWrapper } from "./style";
import MHBanner from "./c-cpns/banner";

function MHRecommend(props) {
  return (
    <MHRecommednWrapper>
      <MHBanner />
    </MHRecommednWrapper>
  );
}

export default memo(MHRecommend);
// 在用mapStateToProps时，由于我们返回了一个对象，里面是我们在这个页面用到的数据
// 当store中的state发生改变时，由于mapStateToProps里面的对象没有用到state中改变的对象，即mapStateToProps对象没有发生改变
// 此时就不会重新渲染当前组件，这里是因为connect返回的高阶组件，帮助我们进行了性能优化，对mapStateToProps中的对象进行浅层比较了，如果没变化就不重新渲染
