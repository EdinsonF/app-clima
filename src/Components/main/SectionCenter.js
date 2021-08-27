import React from 'react'
import main2 from '../../images/imagen.jpg'
function SectionCenter() {
  return (
        <div className="main_section">
          <div className="main_section-title mt-10">
            <h3> Place to</h3> <span className="ml-5">Visit</span>
          </div>
          <div className="main_section-content">
            <div className="main_card-image">
              <div className="image-title">
                  <div><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                  <span> Arab street</span>
                  <span>Singapure</span>
                  </div>
              </div>
              <img src={main2} alt="" />
              </div>
          </div>
        </div>
  )
}

export default SectionCenter
