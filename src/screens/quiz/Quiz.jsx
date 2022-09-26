import React, { useState } from 'react'
import QuizButts from '../../components/quizButts/QuizButts'
import QuizPhotos from '../../components/quizPhotos/quizPhotos'
import './Quiz.scss'

function Quiz(props) {
    const [quizButt, setQuizButt] = useState(true)
    const [quizImg, setQuizImg] = useState([])

  return (
    <>
    {props.quizList.length!==0?<div className='quiz'>
          <div>
            <div className='quiz__cont'>
              <p className='quiz__title'>{props.quizList[props.quizStep].Check_name}</p>
              </div>
              <QuizButts quizButt={quizButt} setQuizButt={setQuizButt} title="В порядке?"/>
          </div>
          <div>
              {props.quizList[props.quizStep].Photo===false?<QuizPhotos quizImg={quizImg} setQuizImg={setQuizImg}/>:<></>}
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
      </div>:
      <div className='quiz'>
        <p className="quiz__title empty">Список проверок пустой.</p>
        <button className='quiz__button' onClick={()=>{props.setBodyState("2")}}>Далее</button>
      </div>}
    </>
  )
}

export default Quiz