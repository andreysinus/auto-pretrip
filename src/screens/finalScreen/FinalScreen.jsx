import React, { useRef } from 'react'
import './FinalScreen.scss'
import queryString from "query-string"
import SignaturePad from 'react-signature-canvas';
const axios = require('axios');
const queryParams = queryString.parse(window.location.search)

function FinalScreen(props) {
  const regex = /data:.*base64,/
  let list = { 
  "Mechanic_phone": queryParams.mechPhone,
  "Driver_phone": queryParams.driverPhone,
  "GRZ": queryParams.grz,
  "Status":true,
  "Odometer":Number(queryParams.odo),
  "Photos":[],
  "Checklist":[]}

  props.quizList.map((text)=>{
    list.Checklist.push({"Check_name":text.Check_name, "Active":text.quality})
    return <></>
  })
  props.imgs.map((text)=>{
    list.Photos.push({"data":text.replace(regex, "")})
    return <></>
  })

  function sendData(){
    list.push({"Sign":getSignature.replace(regex, "")})
    let config = {
      method: 'post',
      url: 'https://тест.атимо.рф/Taksopark/hs/WebApp/CreateTO',
      headers: { 
        'Authorization': 'Basic V0E6V2E1ODUxMzM1'
      },
      data : list
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const sigCanvas = useRef({});
    
  const getSignature = () =>{
      return sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
  }
  console.log(list)
  return (
    <div className='finalscreen'>
        <button className='finalscreen__button' onClick={()=>props.setPhotoAcceptState(4)}>Назад</button>
        <p className='finalscreen__title'>Распишитесь</p>
        <div className="signaturepart">
                <div className='signaturepart__pole'>
                    <SignaturePad ref={sigCanvas}
                    canvasProps={{
                        className: 'signaturepart__field'
                    }}/>
                </div>
            </div>
        <button className='finalscreen__button active' onClick={()=>{sendData()}}>Выдать авто</button>
    </div>
  )
}

export default FinalScreen