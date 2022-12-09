import React from 'react'
import { useTranslation } from 'react-i18next';
import './langSwitch.scss'

function LangSwitch(props) {
    const { t, i18n } = useTranslation();
    var left='langSwitch_button'
    var right='langSwitch_button'
    if (i18n.language==="ru") left+=' active'; else right+=' active';
  return (
    <div className='langSwitch'>
        <button className={left} onClick={()=>props.changeLanguage("ru")}>RU</button>
        <button className={right} onClick={()=>props.changeLanguage("en")}>EN</button>
    </div>
  )
}

export default LangSwitch