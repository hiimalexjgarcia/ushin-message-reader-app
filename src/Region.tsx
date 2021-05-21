import React from 'react'
import './Region.scss'

import Point from './Point'

import { ReactComponent as Plus } from 'bootstrap-icons/icons/plus.svg'

function Region (): any {
  return (
    <div className='Region'>
      <nav className='navbar navbar-light bg-light'>
        <span className='navbar-text'>
          Region
        </span>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <button className='btn btn-sm btn-primary'>
              <Plus
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-plus'
                fill='#fff'
              />
            </button>
          </li>
        </ul>
      </nav>
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
    </div>
  )
}

export default Region
