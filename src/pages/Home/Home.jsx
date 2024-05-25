import React from 'react'
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Partners from '../../components/Partners/Partners';
import Footer from '../../components/Footer/Footer';


function Home() {
  return (
    <div>
      <Hero/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home