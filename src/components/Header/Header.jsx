import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
  const location = useLocation().pathname
  return (
    <header className='Header'>
      <nav className='nav container'>
        <Link to='/'>
          <img className='logo' src={logo} alt="" />
        </Link>        
        <ul className="header__list">
          <li className="header__item ">
            <Link className={location == '/' ? 'active' : null} to='/'>Home</Link>
          </li>
          <li className="header__item">
            <Link className={location == '/portfolio' ? 'active' : null} to='/portfolio'>Portfolio</Link>
          </li>
          <li className="header__item">
            <Link className={location == '/services' ? 'active' : null} to='/services'>Services</Link>
          </li>
          <li className="header__item">
            <Link className={location == '/contact' ? 'active' : null} to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header