import React from 'react'
import style from '../index.module.scss'
const TwoPart = ({Styler,css,param}) => {

  return (
 <>
    <div className={`col lbggrey m1 p1 flexAIC ${style.w57} brd5 `} >
          <div className="row"><i className={`mt ${param.icon}`} aria-hidden="true"></i>&nbsp;<span>{param.title}</span></div>
          <div className="row flexAIC ">
            <button className="bin" onClick={() => Styler(param.minus.one,param.minus.two)}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
            <span className='m5'>{param.span}</span>
            <button className="bin" onClick={() => Styler(param.plus.one,param.plus.two)}><i class="fa fa-angle-up" aria-hidden="true"></i></button>
          </div>
        </div>
       
 </>
  )
}

export default TwoPart