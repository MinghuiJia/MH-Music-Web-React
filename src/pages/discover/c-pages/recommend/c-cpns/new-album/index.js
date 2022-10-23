/*
 * @Author: jiaminghui
 * @Date: 2022-10-23 19:50:49
 * @LastEditTime: 2022-10-23 19:57:13
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\c-cpns\new-album\index.js
 * @Description: 
 */
import React, { memo } from 'react'

import {MHNewAlbumWrapper} from './style'
import MHThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function MHNewAlbum() {
  return (
    <MHNewAlbumWrapper>
      <MHThemeHeaderRCM  title="新碟上架"/>
    </MHNewAlbumWrapper>
  )
})
