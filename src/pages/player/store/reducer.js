/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:01:59
 * @LastEditTime: 2022-10-27 21:48:57
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
  currentSong: {},
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    default:
      return state;
  }
};

export default reducer;
