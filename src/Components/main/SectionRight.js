import React from 'react'
import pf1 from '../../images/profile1.jpg';
import pf2 from '../../images/profile2.jpg';
import pf3 from '../../images/profile3.jpg';
import main3 from '../../images/main3-origin.jpg'
import main2 from '../../images/main2-origin.jpg'

function SectionRight() {
  return (
    <div className="main_section">
          <div className="main_section-title mt-10">
            <span> + Top review</span>
            <span className="profile">
              <img src={pf1} alt="" />
              <img src={pf2} alt="" />  
              <img src={pf3} alt="" />  
              <div>6+</div>  
            </span>
          </div>
            <div className="main_section-content">
              <div className="main_card-image1">
                <div className="image-title">
                  <div><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                  <span> Arab street</span>
                  <span>Singapure</span>
                  </div>
              </div>
                <img src={main2} alt="" />
              </div>
              
              <div className="main_card-image2 mt-20">
                <div className="image-title">
                  <div><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                  <span> Arab street</span>
                  <span>Singapure</span>
                  </div>
                </div>
                <div className="main_card-addbtn">
                  +
                </div>
                <img src={main3} alt="" />
              </div>
            </div>
        </div>
  )
}

export default SectionRight
