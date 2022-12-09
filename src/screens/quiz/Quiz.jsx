import React, { useState } from 'react'
import QuizButts from '../../components/quizButts/QuizButts'
import QuizPhotos from '../../components/quizPhotos/quizPhotos'
import './Quiz.scss'
import { useTranslation } from "react-i18next";



  
function Quiz(props) {
  const { t } = useTranslation();
    const [quizButt, setQuizButt] = useState(true)
    const [quizImg, setQuizImg] = useState([])

  return (
    <>
    {props.quizList.length!==0?<div className='quiz'>
          <div>
            <div className='quiz__cont'>
              <p className='quiz__title'>{props.quizList[props.quizStep].Check_name}</p>
              </div>
              <QuizButts quizButt={quizButt} setQuizButt={setQuizButt} title={t("inOrder")}/>
          </div>
          <div>
              {props.quizList[props.quizStep].Photo===true?<QuizPhotos quizImg={quizImg} setQuizImg={setQuizImg}/>:<></>}
              <button className='quiz__button' onClick={()=>{
                if (props.quizStep===props.quizList.length-1){
                  props.setQuizQuality(props.quizStep, quizButt)
                  props.setBodyState("2")
                }
                else{
                  props.setQuizQuality(props.quizStep, quizButt)
                  props.setQuizStep(Number(props.quizStep)+1)
                  setQuizButt(true)
                }
              }}>{t("next")}</button>
          </div>
      </div>:
      <div className='quiz'>
        <p className="quiz__title empty">{t("emptyList")}</p>
        <button className='quiz__button' onClick={()=>{props.setBodyState("2")}}>Далее</button>
      </div>}
    </>
  )
}

export default Quiz