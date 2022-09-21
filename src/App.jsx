import React, { useState } from 'react'
import './App.scss'
import Logo from './components/logo/logo'
import OverBodyButton from './components/overBodyButton/OverBodyButton'
import PhotoAccept from './screens/photoAccept/PhotoAccept'
import Quiz from './screens/quiz/Quiz'


function App() {
  const [bodyState, setBodyState] = useState("1")
  const [overBodyButt, setOverBodyButt] = useState(true)
  return (
    <div className='App'>
      <div className="logo__anim"><Logo /></div>
      <OverBodyButton overBodyButt={overBodyButt} setOverBodyButt={setOverBodyButt} bodyState={bodyState} setBodyState={setBodyState} />
      {bodyState==="1"?<Quiz />:
      <PhotoAccept />}
    </div>
  )
}

export default App