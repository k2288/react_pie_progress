import React from 'react'
import style from './styles.module.css'

export const PieProgress = ({ rotation,backColor,forColor }) => {

  let fill_rotation = rotation;
	let fix_rotation = rotation * 2;
  let fillStyle={transform:`rotate(${fill_rotation}deg)`}
  let fixStyle={transform:`rotate(${fix_rotation}deg)`}
  return (
    <div className={style['radial-progress']} style={{backgroundColor:backColor}}>
      <div className={style['circle']}>
        <div className={'full '+style['mask']} style={fillStyle}>
          <div className={style['fill']} style={{...fillStyle,backgroundColor:forColor}}></div>
        </div>
        <div className={style['mask']+' half'}>
          <div className={style['fill']} style={{...fillStyle,backgroundColor:forColor}}></div>
          <div className={style['fill']+' fix'} style={{...fixStyle,backgroundColor:forColor}}></div>
        </div>
      </div>
    </div>
  )
}
