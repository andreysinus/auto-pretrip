import React, { useReducer} from 'react'
import './PhotoAccept.scss'
import {Upload} from 'antd'
import Resizer from "react-image-file-resizer";
import { useTranslation } from "react-i18next";


  
function getBase64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
      cb(reader.result)
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}

function PhotoAccept(props) {
  const { t } = useTranslation();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let part="null"
  switch (props.photoAcceptState){
    case 1: part="frontPhoto"; break;
    case 2: part="rightPhoto"; break;
    case 3: part="backPhoto"; break;
    case 4: part="leftPhoto"; break;
    default: break;
  }

  function updateImgs(uri){
    var arr=props.imgs
    arr[props.photoAcceptState-1]=uri;
    props.setImgs(arr);
    forceUpdate()
  }
  return(
    <div className='photoAccept'>
      <p className="photoAccept__title">{t(part)}</p>
      <Upload
                  showUploadList={false}
                  listType="picture-card"
                  accept=".png,.jpeg,.doc"
                  beforeUpload={(file)=>{
                    getBase64(file, (result)=>{
                      Resizer.imageFileResizer(
                        file,
                        1000,
                        1000,
                        "base64",
                        100,
                        0,
                        (uri) => {
                          updateImgs(uri)
                        },
                        "base64",
                        200,
                        200
                      );
                    })
                  }}>
      <div className="photoAccept__photo">
        <div className="photoAccept__photo-svg">
          <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" clipPath="url(#clip0_228_697)">
          <path d="M56 69.4615C59.866 69.4615 63 66.3275 63 62.4615C63 58.5956 59.866 55.4615 56 55.4615C52.134 55.4615 49 58.5956 49 62.4615C49 66.3275 52.134 69.4615 56 69.4615Z" fill="black"/>
          <path d="M88.6666 29.7948H74.6666V22.7948C74.6666 19.7006 73.4374 16.7332 71.2495 14.5453C69.0616 12.3573 66.0941 11.1282 62.9999 11.1282H48.9999C45.9057 11.1282 42.9383 12.3573 40.7503 14.5453C38.5624 16.7332 37.3333 19.7006 37.3333 22.7948V29.7948H23.3333C19.6202 29.7948 16.0593 31.2698 13.4338 33.8953C10.8082 36.5209 9.33325 40.0818 9.33325 43.7948V81.1282C9.33325 84.8412 10.8082 88.4022 13.4338 91.0277C16.0593 93.6532 19.6202 95.1282 23.3333 95.1282H88.6666C92.3796 95.1282 95.9406 93.6532 98.5661 91.0277C101.192 88.4022 102.667 84.8412 102.667 81.1282V43.7948C102.667 40.0818 101.192 36.5209 98.5661 33.8953C95.9406 31.2698 92.3796 29.7948 88.6666 29.7948ZM46.6666 22.7948C46.6666 22.176 46.9124 21.5825 47.35 21.1449C47.7876 20.7073 48.3811 20.4615 48.9999 20.4615H62.9999C63.6188 20.4615 64.2123 20.7073 64.6498 21.1449C65.0874 21.5825 65.3333 22.176 65.3333 22.7948V29.7948H46.6666V22.7948ZM55.9999 78.7948C52.7695 78.7948 49.6116 77.8369 46.9256 76.0422C44.2396 74.2474 42.1461 71.6965 40.9099 68.712C39.6737 65.7275 39.3502 62.4434 39.9804 59.275C40.6107 56.1067 42.1663 53.1964 44.4505 50.9121C46.7348 48.6278 49.6451 47.0722 52.8134 46.442C55.9818 45.8118 59.2659 46.1352 62.2504 47.3715C65.2349 48.6077 67.7859 50.7012 69.5806 53.3872C71.3753 56.0732 72.3333 59.2311 72.3333 62.4615C72.3333 66.7934 70.6124 70.9478 67.5493 74.0109C64.4862 77.074 60.3318 78.7948 55.9999 78.7948V78.7948Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_228_697">
          <rect width="112" height="112" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
        <div className="photoAccept__photo-image">
          {props.imgs[props.photoAcceptState-1]!==undefined?<img src={props.imgs[props.photoAcceptState-1]} alt="Фото" />:<></>}
        </div>
      </div>
      </Upload>
      <div className='photoAccept__btns'>
        {props.photoAcceptState!==1?<button className='photoAccept__button back' onClick={()=>props.setPhotoAcceptState(props.photoAcceptState-1)}>{t("back")}</button>:<></>}
        <button className={props.imgs[props.photoAcceptState-1]!==undefined ? 'photoAccept__button active':'photoAccept__button'} onClick={()=>{if(props.imgs[props.photoAcceptState-1]!==undefined){props.setPhotoAcceptState(props.photoAcceptState+1)}}}>{t("next")}</button>
      </div>
    </div>
  )
}

export default PhotoAccept