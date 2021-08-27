import React from 'react'

function SideCard({city}) {

  const {name, icon, weather, temp, humidity, country,wind} = city;

  return (
    <>
      <article className="side_card">
          
            <div className="side_card-top">
              <div className="side_card-icon">
                <img src={`images/${icon}.png`} alt="" />
              </div>
              <h2 className="mt-15 ml-15">{Math.ceil(temp - 273)} ° &#7580;</h2>
              <div className="bar mt-15 ml-10"><h1 >{name}</h1><p>{country}</p></div>
            </div>

            <div className="side_card-buttom mb-10">
              <p>Humidity {humidity}%</p>
              <p>{weather}</p>
              <p>{wind} Km/h</p>
            </div>
              
          
        </article>


        

        
    </>
  )
}

export default SideCard
