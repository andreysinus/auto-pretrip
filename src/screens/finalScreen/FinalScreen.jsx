import React from 'react'
import './FinalScreen.scss'

function FinalScreen(props) {
  return (
    <div className='finalscreen'>
        <button className='finalscreen__button' onClick={()=>props.setPhotoAcceptState(4)}>Назад</button>
        <p className="finalscreen__title">Авто в порядке</p>
        <button className='finalscreen__button active' >Выдать авто</button>
    </div>
  )
}

export default FinalScreen