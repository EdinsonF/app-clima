import React from 'react'
import logo from '../images/icono.png'

const Header = () => {
  return (

    <>
    <div class="header_widget">
      <div className="header_tab">
        <div class="tab--icon"><i class="fas fa-cloud-sun-rain"></i></div>
        <div class="tab--grados"><h1>32</h1><p>°C</p></div>
      </div>
    </div>
    <div className="header_container">
        <div className="header_image">
          
        <div className="header_marco">
          <div className="header_title">
          <i class="fas fa-map-marker-alt"></i>
          <span> Bogotá</span>
          </div>
         <div className="header_logo">
          <img src={logo} alt="" />
         </div>
          
        </div>
          <img src="https://i.pinimg.com/474x/93/96/49/93964951445a4b034e1b957db5937997.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

export default Header
