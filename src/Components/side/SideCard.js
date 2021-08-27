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
              <div className="grados mt-15 ">
              <h2 >
                  {Math.ceil(temp - 273)}
              </h2> 
              <div className="notation">
                ° &#7580;
              </div>
              </div>
              <div className="bar mt-15 "><h1 >{name}</h1><p>{country}</p></div>
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
