import React from 'react'
import Lottie from "lottie-react"
import './loadingPage.scss'
import loadingAnimation from '../../img/Loading.json'

const style = {
    height: 60,
  };

function LoadingElement() {
  return (
    <div className='loadingElement'>
        <div className='loadingElement__body'>
            <Lottie animationData={loadingAnimation} loop={true} style={style}/>
        </div>
    </div>
  )
}

export default LoadingElement