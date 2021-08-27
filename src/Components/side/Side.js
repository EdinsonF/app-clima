import React, { useContext } from 'react'
import SideCard from './SideCard'
import map from '../../images/map.ico'
import {climaContext} from '../context/ClimaProvider';

function Side() {

  const {paris_caracas} = useContext(climaContext);

  return (

    <>
    <div className="side_container">
        <section className="side_section">

          { paris_caracas.map((city, index)=>{
              return <SideCard key={index} city={city}/>

          })}

          <article className="side_card-add">    
              <span><h3>Add Location</h3></span> 
              <i class="fas fa-map-marked"></i>    
          </article>
        </section>
    </div>

    </>
  )
}

export default Side
