import React, { useContext } from 'react'
import logo from '../images/icono.png'
import nav from '../images/nav.jpg'

import {climaContext} from './context/ClimaProvider';

const Header = () => {

  const {bogotaDay} = useContext(climaContext);
  const {name , temp, icon, weather} = bogotaDay;
  return (

    <>


    <div className="header_widget-borderTop"></div>
      <div className="header_tab">
        <div className="tab--icon">
        <img src={`images/${icon}.png`} alt="" />
        <span>{weather}</span>
        </div>
        <div className="tab--grados">
          <h1>{Math.ceil(temp - 273)}</h1>
          <p>°C</p>
        </div>
      </div>
    <div className="header_widget-borderButtom"></div>
    
  

    <div className="header_container">
        <div className="header_image">
          
        <div className="header_marco">
          <div className="header_title">
            <i className="fas fa-map-marker-alt"></i>
            <span> {name}</span>
          </div>
         <div className="header_logo">
          <img src={logo} alt="" />
         </div>
          
        </div>
          <img src={nav} alt="" />
        </div>
    </div>
    </>
  )
}

export default Header
