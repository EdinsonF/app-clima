import React from 'react'
import Side_card from './Side_card'
import map from '../images/map.ico'
function Side() {
  return (

    <>
    <div className="side_container">
        

      <section className="side_section">

        <Side_card/>
        <Side_card/>

        <article className="side_card-add">    
            <span><h3>Add Location</h3></span> 
            <img src={map} alt="" width="40%" height="40px"/>    
        </article>

      </section>




    </div>

    </>
  )
}

export default Side
