import React from 'react'
import './Contact2.css'
import xarita from '../../img/xarita.png'

function Contact2() {
  return (
    <div>
        <div className="container">
            <h1 className='h1__1'>Contact us</h1>
            <p className='p'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>

            <div className='Contact__div5'>
              <div>
                <form action="" className='form'>
                  <label htmlFor="" className='lab1'>Name</label>
                  <input type="text" className='inp1'/>
                  <label htmlFor="" className='lab2'>Email</label>
                  <input type="email" className='inp2'/>
                  <label htmlFor="" className='lab2'>Massage</label>
                  <input type="massage" className='inp3'/>
                </form>
                <button className='form__btn'>Submit</button>
              </div>
              <div>
                <img className='xarita' src={xarita} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact2