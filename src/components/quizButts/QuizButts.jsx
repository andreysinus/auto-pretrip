import './QuizButts.scss'

import React from 'react'

function QuizButts(props) {
  return (
    <div className='quizButts'>
        <p className='quizButts__title'>{props.title}</p>
        <div className='quizButts__butts'>
            <button className={props.quizButt?'quizButts__butts-btn':'quizButts__butts-btn active'} onClick={()=>props.setQuizButt(false)}>НЕТ</button>
            <button className={props.quizButt?'quizButts__butts-btn active':'quizButts__butts-btn'} onClick={()=>props.setQuizButt(true)}>ДА</button>
        </div>
    </div>
  )
}

export default QuizButts