import React, { useState } from 'react'
import QuizButts from '../../components/quizButts/QuizButts'
import QuizPhotos from '../../components/quizPhotos/quizPhotos'
import './Quiz.scss'

function Quiz(props) {
    const [quizButt, setQuizButt] = useState(true)
    const [quizImg, setQuizImg] = useState([])

  return (
    <div className='quiz'>
        <div>
            <p className='quiz__title'>{props.quizList[props.quizStep].Check_name}</p>
            <QuizButts quizButt={quizButt} setQuizButt={setQuizButt} title="В порядке?"/>
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
            }}>Далее</button>
        </div>
    </div>
  )
}

export default Quiz