import React from 'react'
import Lottie from "lottie-react"
import './loadingPage.scss'
import loadingAnimation from '../../img/Loading.json'


function LoadingPage() {
  return (
    <div className='loadingPage'>
        <div className='loadingPage__body'>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    </div>
  )
}

export default LoadingPage