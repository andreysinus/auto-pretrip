import React, { useState } from 'react'
import QuizButts from '../../components/quizButts/QuizButts'
import QuizPhotos from '../../components/quizPhotos/quizPhotos'
import './Quiz.scss'

function Quiz(props) {
    const [quizButt, setQuizButt] = useState(true)
  return (
    <div className='quiz'>
        <div>
            <p className='quiz__title'>Внешние световые приборы и световозвращатели, отсутствие на передней части ТС огней и световозвращателей красного цвета, специальных световых, цветографических и звуковых сигналов без соответствующего разрешения</p>
        </div>
        <div>
            <QuizButts quizButt={quizButt} setQuizButt={setQuizButt} title="В порядке?"/>
            <QuizPhotos />
            <button className='quiz__button'>Далее</button>
        </div>
    </div>
  )
}

export default Quiz