import React from 'react'
import style from './index.module.scss'
const HoComp=(Component,Styler,css,details)=>{
 
    return () => {
      return (
        <>
        <Component Styler={Styler} css={css} param={details.param}/>
        <div className={`col lbggrey m1 p1 flexAIC ${style.w38} brd5`} onClick={() => Styler(details.param2.click)}>
          <i className={`mt ${details.param2.icon}`} aria-hidden="true"></i>
          <span>{details.param2.title}</span>
        </div>
     </>
      )
    }
    
}

export default HoComp