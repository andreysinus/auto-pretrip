import './OverBodyButton.scss'
import React from 'react'
import checkedBox from '../../img/checkedBox.svg'
import notCheckedBox from '../../img/notCheckedBox.svg'
import { useTranslation } from "react-i18next";

function OverBodyButton(props) {
  const { t } = useTranslation();
  return (
    <button className={props.overBodyButt?"overbodybutton active":"overbodybutton"} onClick={()=>{if (props.overBodyButt===props.bodyState) {props.setOverBodyButt(!props.overBodyButt); if(props.overBodyButt===props.bodyState) props.setBodyState(!props.bodyState)}}}>
        <div className="overbodybutton__title">{t("carIsOk")}</div>
        <div className="overbodybutton__img"><img src={props.overBodyButt?checkedBox:notCheckedBox} alt="Чек бокс"/></div>
    </button>
  )
}

export default OverBodyButton