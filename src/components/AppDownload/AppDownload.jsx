import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
          <p>for better experience download <br />Toamato App</p>
           <div className='app-download-platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
           </div>
    </div>
  )
}

export default AppDownload