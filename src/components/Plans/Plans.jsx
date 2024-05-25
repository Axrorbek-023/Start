import React from 'react'
import './Plans.css'
import galochka from '../../img/galochka.png'

function Plans() {
  return (
    <div className='Plans'>
        <div className="container"> 
            <h6 className='h6'>PLANS</h6>
            <h1 className='h1'>Our Services</h1>
            <p className='p'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>

            <ul className='Plans__list'>
                <li className='Plans__item'>
                    <h4 className='Plans__h4'>Basic</h4>
                    <div className='Plans__box'>
                        <h1 className='box__h1'>$100</h1>
                        <p className='box__p'>/month</p>
                    </div>
                    <p className='Plans__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>

                    <button className='Plans__btn'>Learn More</button>
                </li>
                <li className='Plans__item'>
                    <h4 className='Plans__h4'>Basic</h4>
                    <div className='Plans__box'>
                        <h1 className='box__h1'>$100</h1>
                        <p className='box__p'>/month</p>
                    </div>
                    <p className='Plans__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>

                    <button className='Plans__btn'>Learn More</button>
                </li>
                <li className='Plans__item'>
                    <h4 className='Plans__h4'>Basic</h4>
                    <div className='Plans__box'>
                        <h1 className='box__h1'>$100</h1>
                        <p className='box__p'>/month</p>
                    </div>
                    <p className='Plans__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className='Plans__box2'>
                        <img src={galochka} alt="" />
                        <p>Lorem ipsum, dolor sit amet</p>
                    </div>

                    <button className='Plans__btn'>Learn More</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Plans