import React from 'react'
import './quizPhotos.scss'
import { ScrollMenu} from 'react-horizontal-scrolling-menu';

function QuizPhotos() {
  let items= [1,2,3,4,5,6,7]
  return (
    <div className='quizphotos'>
        <p className='quizphotos__title'>Требутся фотографии: </p>
        <ScrollMenu>
          {items.map(({ id }) => (<div className='block'>{id}</div>))}
        </ScrollMenu>
    </div>
  )
}

export default QuizPhotos