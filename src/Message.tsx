import React from 'react'
import './Message.scss'

import Region from './Region'

function Message (props: { style: any }): any {
  const style = props.style

  return (
    <div className='Message' style={style}>
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

export default Message
