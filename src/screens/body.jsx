import React, { useState } from 'react'
import FinalScreen from './finalScreen/FinalScreen'
import PhotoAccept from './photoAccept/PhotoAccept'
import Quiz from './quiz/Quiz'

function Body(props) {
    const [photoAcceptState, setPhotoAcceptState] = useState(1)
    const [imgs, setImgs] = useState([])
    const [quizStep, setQuizStep] = useState(0)
  return (
    <div>
        {props.bodyState===false?<Quiz setBodyState={props.setBodyState} quizList={props.quizList} setQuizList={props.setQuizList} quizStep={quizStep} setQuizStep={setQuizStep} setQuizQuality={props.setQuizQuality}/>:
        photoAcceptState<5?<PhotoAccept photoAcceptState={photoAcceptState} setPhotoAcceptState={setPhotoAcceptState} imgs={imgs} setImgs={setImgs}/>:<FinalScreen imgs={imgs} quizList={props.quizList} overBodyButt={props.overBodyButt} photoAcceptState={photoAcceptState} setPhotoAcceptState={setPhotoAcceptState}/> }
    </div>
  )
}

export default Body