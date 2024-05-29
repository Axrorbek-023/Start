import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import burger from '../../img/burger.png'

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
          <li>
            <button className='burger' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <img className='burger__btn' src={burger} alt="" />
            </button>
          </li>
        </ul>

        <div className="canvars offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">pages table</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className='pages__list'>
              <li className='pages__item'>
                <Link className={location == '/' ? 'active' : null} to='/'>Home</Link>
              </li>
              <li className='pages__item'>
                <Link className={location == '/portfolio' ? 'active' : null} to='/portfolio'>Portfolio</Link>
              </li>
              <li className='pages__item'>
                <Link className={location == '/services' ? 'active' : null} to='/services'>Services</Link>
              </li>
              <li className='pages__item'>
                <Link className={location == '/contact' ? 'active' : null} to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header