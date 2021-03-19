import React from 'react'
import './Screen.scss'

import Region from './Region'

function Screen (props: { style: any }): any {
  const style = props.style

  return (
    <div className='Screen' style={style}>
      <div className='row'>
        <Region />
        <Region />
        <Region />
      </div>
      <div className='row'>
        <Region />
        <Region />
        <Region />
      </div>
      <div className='row'>
        <Region />
        <Region />
        <Region />
      </div>
    </div>
  )
}

export default Screen
