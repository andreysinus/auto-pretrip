import './OverBodyButton.scss'
import React from 'react'
import checkedBox from '../../img/checkedBox.svg'
import notCheckedBox from '../../img/notCheckedBox.svg'

function OverBodyButton(props) {
  return (
    <button className={props.overBodyButt?"overbodybutton active":"overbodybutton"} onClick={()=>{if (props.overBodyButt===props.bodyState) {props.setOverBodyButt(!props.overBodyButt); if(props.overBodyButt===props.bodyState) props.setBodyState(!props.bodyState)}}}>
        <div className="overbodybutton__title">С машиной всё в порядке</div>
        <div className="overbodybutton__img"><img src={props.overBodyButt?checkedBox:notCheckedBox} alt="Чек бокс"/></div>
    </button>
  )
}

export default OverBodyButton