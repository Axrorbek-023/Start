import React from 'react'
import './Portfolio2.css'
import portfolio1 from '../../img/portfolio1.png'
import portfolio2 from '../../img/portfolio2.png'
import portfolio3 from '../../img/portfolio3.png'
import portfolio4 from '../../img/portfolio4.png'
import portfolio5 from '../../img/portfolio5.png'
import portfolio6 from '../../img/portfolio6.png'
import portfolio7 from '../../img/portfolio7.png'
import portfolio8 from '../../img/portfolio8.png'



function Portfolio2() {
  return (
    <div>
      <div className="container">
          <h6 className='h6'>WORKS</h6>
            <h1 className='h1'>Lorem Ipsum Dolor</h1>
            <p className='p'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>
          <ul className='Works__list'>
            <li className='Works__item'>

              <img className='Works__img' src={portfolio1} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio2} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio3} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio4} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio5} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio6} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio7} alt="" />

            </li>

            <li className='Works__item'>

              <img className='Works__img' src={portfolio8} alt="" />

            </li>

          </ul>
          <button className='team__btn'>Learn More</button>
      </div>
    </div>
  )
}

export default Portfolio2