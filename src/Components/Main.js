import React from 'react'
import Main_card from './Main_card';

function Main() {
  return (
    <div className="main_container">
        
        <div className="main_section">
          <div className="main_section-title mt-10">
           <h3> 3 Days</h3> <span className="ml-5">Forecast</span>
          </div>
          <div className="main_section-content">
            
            <Main_card/>
            <Main_card/>
            <Main_card/>

            

          </div>
        </div>

        <div className="main_section">
          <div className="main_section-title mt-10">
          <h3> Place to</h3> <span className="ml-5">Visit</span>
          </div>
          <div className="main_section-content">
           <div className="main_card-image">
             <div className="image-title">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>
                <span> Arab street</span>
                <span>Singapure</span>
                </div>
             </div>
            <img src="https://www.paellacreativa.com.ar/wp-content/uploads/2018/05/fotos_aereas_ciudades_neon_14.jpg" alt="" />
           </div>
          </div>
        </div>

        <div className="main_section">
          <div className="main_section-title mt-10">
          <span> + Top review</span>   <span>[] [] []</span>
          </div>
            <div className="main_section-content">

              <div className="main_card-image1">
                <div className="image-title">
                  <div><i class="fas fa-map-marker-alt"></i></div>
                  <div>
                  <span> Arab street</span>
                  <span>Singapure</span>
                  </div>
              </div>
                <img src="http://www.krisporelmundo.com/wp-content/uploads/2016/05/image-6.jpg" alt="" />
              </div>
              
              <div className="main_card-image2 mt-20">
              <div className="image-title">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>
                <span> Arab street</span>
                <span>Singapure</span>
                </div>
             </div>
                <img src="https://s1.best-wallpaper.net/wallpaper/m/1712/City-park-night-beautiful-holiday-lights_m.jpg" alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main
