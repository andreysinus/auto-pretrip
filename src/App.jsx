import React, { useState } from 'react'
import './App.scss'
import Logo from './components/logo/logo'
import OverBodyButton from './components/overBodyButton/OverBodyButton'
import Body from './screens/body'
import queryString from "query-string"
const axios = require('axios');

function App() {
  const [bodyState, setBodyState] = useState(false)
  const [isFirst, setIsFirst] = useState(true)
  const [overBodyButt, setOverBodyButt] = useState(false)
  const [quizList, setQuizList] = useState([])
  const queryParams = queryString.parse(window.location.search)

  if (isFirst){
    let config = {
      method: 'get',
      url: `${queryParams.base}/GetChecklist`,
      headers: { 
        'Authorization': 'Basic V0E6V2E1ODUxMzM1'
      }
    };
    
    axios(config)
    .then((response) => {
      let array = []
      if (typeof(response.data) !== 'string'){ 
        response.data.map((text, index)=>{
          if (text.Check_name!=="Фотографии транспортного средства"){
          array[index] = {Check_name:text.Check_name, Active:text.Active, Photo:text.Photo, quality: undefined, photos:undefined}
          }
          return<></>
        })
      }
      console.log(array);
      setQuizList(array);
    })
    .catch((error) => {
      console.log(error);
    });
    setIsFirst(false)
  }
  function setQuizQuality(id, value){
    let arr = quizList;
    arr[id].quality=value
    setQuizList(arr)
  }

  return (
    <div className='App'>
      <div className="logo__anim"><Logo /></div>
      <div className='App__body'>
        <OverBodyButton overBodyButt={overBodyButt} setOverBodyButt={setOverBodyButt} bodyState={bodyState} setBodyState={setBodyState} />
        <Body bodyState={bodyState} setBodyState={setBodyState} overBodyButt={overBodyButt} setOverBodyButt={setOverBodyButt} quizList={quizList} setQuizList={setQuizList} setQuizQuality={setQuizQuality}/>
      </div>
    </div>
  )
}

export default App