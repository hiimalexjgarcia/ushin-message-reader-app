import React from 'react'
import './Region.scss'

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
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
      <details>
        <summary>Heading</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia
        </p>
      </details>
    </div>
  )
}

export default Region
