/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 20:04:09
 * @LastEditTime: 2022-10-23 20:08:09
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\recommend-ranking\index.js
 * @Description: 
 */
import React, { memo } from 'react'

import {MHRecommendRankingWrapper} from './style'
import MHThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function MHRecommendRanking() {
  return (
    <MHRecommendRankingWrapper>
      <MHThemeHeaderRCM  title="榜单"/>
    </MHRecommendRankingWrapper>
  )
})
