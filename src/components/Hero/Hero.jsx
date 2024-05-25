import React from 'react'
import './Hero.css'
import right__img from '../../assets/right__img.png'

function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
        <div className='umumiy'>
          <div className="left">
            <h6>WELCOME</h6>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit. nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button className='Hero__btn'>Explore</button>
          </div>
          <div className="right">
            <img src={right__img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero