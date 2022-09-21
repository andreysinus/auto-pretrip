import './OverBodyButton.scss'
import React from 'react'
import checkedBox from '../../img/checkedBox.svg'
import notCheckedBox from '../../img/notCheckedBox.svg'

function OverBodyButton(props) {
  return (
    <button className={props.overBodyButt?"overbodybutton active":"overbodybutton"} onClick={()=>props.setOverBodyButt(!props.overBodyButt)}>
        <div className="overbodybutton__title">С машиной всё в порядке</div>
        <div className="overbodybutton__img"><img src={props.overBodyButt?checkedBox:notCheckedBox} alt="Чек бокс"/></div>
    </button>
  )
}

export default OverBodyButton