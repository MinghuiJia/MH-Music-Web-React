/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:58:20
 * @LastEditTime: 2022-10-20 12:58:21
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\store\reducer.js
 * @Description:
 */
import * as actionTypes from "./constants";

const initState = {
  topBanner: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return { ...state, topBanner: [...action.banner] };
    default:
      return state;
  }
};

export default reducer;
