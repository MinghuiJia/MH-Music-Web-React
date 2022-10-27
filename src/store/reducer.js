/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:52:42
 * @LastEditTime: 2022-10-27 21:18:43
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\store\reducer.js
 * @Description:
 */
// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { playerReducer } from "../pages/player/store";

// 这里combineReducers本质上也是创建一个新的对象，对每个子reducer进行合并的，这里不能直接用Map进行包裹完成Immutable操作
// 原因1：这里每合并一次就进行一个Map包裹是不合理的，需要进行优化
// 原因2：在combineReducers内部，它是会使用Object.keys()的方式取出key，然后再对value进行操作，但是我们使用Map之后就变成了immutablejs对象，是不会拿到期望的key

// 解决方案：使用redux-immutable，从这个库里面导入combineReducers，这样就帮助我们完成了immutablejs对象转换和内部代码实现
const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});

export default reducer;
