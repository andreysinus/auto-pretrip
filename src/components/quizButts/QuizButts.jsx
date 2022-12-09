import './QuizButts.scss'

import React from 'react'
import { useTranslation } from "react-i18next";


function QuizButts(props) {
  const { t} = useTranslation();
  return (
    <div className='quizButts'>
        <p className='quizButts__title'>{props.title}</p>
        <div className='quizButts__butts'>
            <button className={props.quizButt?'quizButts__butts-btn':'quizButts__butts-btn active'} onClick={()=>props.setQuizButt(false)}>{t("no").toUpperCase()}</button>
            <button className={props.quizButt?'quizButts__butts-btn active':'quizButts__butts-btn'} onClick={()=>props.setQuizButt(true)}>{t("yes").toUpperCase()}</button>
        </div>
    </div>
  )
}

export default QuizButts