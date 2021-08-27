
import React from 'react'
import moment from 'moment' 

function Main_card({day}) {

 

  return (

            <article className="main_card mt-10">
    
              <div className="main_card-left">
                <img src={`images/${day.icon}.png`} alt="" />
              </div>

              <div className="main_card-center">
                <h4 className="">{moment.unix(day.day).format('dddd')}</h4>
                <p>{day.weather}</p>
              </div>

              <div className="main_card-right">
                <h4>{Math.round(day.tempMin)}° / {Math.round(day.tempMax)}°</h4> 
              </div>

            </article>


  )
}

export default Main_card
