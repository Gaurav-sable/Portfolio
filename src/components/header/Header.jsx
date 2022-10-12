import React from 'react'
import './header.css'
import CTA from './CTA'
// import Background from '../../assests/Background.png'
// import bgc from '../../assests/bgc.png'
import pr from '../../assests/gdimg.png'

import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gaurav Sable</h1>
        <h5 className="text-light">Tech Enthusiast</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={pr} alt="" className='pr'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header