import React from 'react'
import './Footer.css'
import footer_left from '../../img/Footer_left.png'
import footer_right from '../../img/Footer_right.png'

function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
            <div className='f-box'>
                <img className='fi-l' src={footer_left} alt="" />
                <img className='fi-r' src={footer_right} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer