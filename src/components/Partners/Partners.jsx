import React from 'react'
import './Partners.css'
import google from '../../assets/Google.png'
import mic from '../../assets/Mic.png'
import air from '../../assets/Air.png'
import fc from '../../assets/Fc.png'
import sp from '../../assets/Sp.png'
import massage from '../../img/massage.png'
import massage2 from '../../img/massage2.png'
import team1 from '../../img/team1.png'
import team2 from '../../img/team2.png'
import team3 from '../../img/team3.png'
import team4 from '../../img/team4.png'

function Partners() {
  return (
    <div className='Partners'>
       <div className="container">
            <h6 className='h6'>Partners</h6>
            <h1 className='h1'>Lorem Ipsum Dolor</h1>
            <p className='p'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>
            <div className='Part__box'>
                <img src={google} alt="" />
                <img src={mic} alt="" />
                <img src={air} alt="" />
                <img src={fc} alt="" />
                <img src={sp} alt="" />
            </div> 
            <button className='Part__btn'>
                <p>Learn More</p>
            </button>

            <ul className='Part__list'>
                <li className='Part__item'>
                    <img className='item__img' src={massage} alt="" />
                    <div className='item__div'>
                        <h1 className='item__h1'>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className='item__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button className='item__btn'>Learn More</button>
                    </div>
                </li>
                <li className='Part__item'>
                    <img className='item__img' src={massage2} alt="" />
                    <div className='item__div'>
                        <h1 className='item__h1'>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className='item__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button className='item__btn'>Learn More</button>
                    </div>
                </li>
            </ul>

            <h6 className='h6'>TEAM</h6>
            <h1 className='h1'>Our Talents</h1>
            <p className='p'>
                Lorem ipsum, dolor sit amet consectetur
                Suscipit nemo hic quos, ab,
            </p>
            <ul className='team__list'>
                <li className='team__item'>
                    <img className='team__img' src={team1} alt="" />
                    <h4 className='team__h4'>Peg Legge</h4>
                    <p className='team__p'>CEO</p>
                </li>
                <li className='team__item'>
                    <img className='team__img' src={team2} alt="" />
                    <h4 className='team__h4'>Richard Guerra</h4>
                    <p className='team__p'>CTO</p>
                </li>
                <li className='team__item'>
                    <img className='team__img' src={team3} alt="" />
                    <h4 className='team__h4'>Alexandra Stolz</h4>
                    <p className='team__p'>DESIGNER</p>
                </li>
                <li className='team__item'>
                    <img className='team__img' src={team4} alt="" />
                    <h4 className='team__h4'>Janet Bray</h4>
                    <p className='team__p'>DEVELOPER</p>
                </li>
            </ul>
            <button className='team__btn'>View Team</button>
       </div>
    </div>
  )
}

export default Partners