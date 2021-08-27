import React, {useEffect, useState} from 'react'

function ClimaNextDay() {
  
 const [climaCiudad, setClimaCiudad] = useState([])
  const keyApi = 'dd91a5392f74fd6bf1e8c772fd426702';
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=current,minutely,hourly&units=metric&appid=${keyApi}`;

  useEffect(() => {
    const client = new XMLHttpRequest();
    client.open('GET', URL);

    client.addEventListener('load', (data) => {
    const result = JSON.parse(data.currentTarget.responseText);
    const nextThreePartials = result.daily.slice(1, 4) 
    
   const nextThreeDay=  nextThreePartials.map((day) => {
      return {
        day         : day?.dt,
        tempMax     : day?.temp.max,
        tempMin     : day?.temp.min,
        weather     : day?.weather[0].main,
        icon        : day?.weather[0].icon
      }
    })


    setClimaCiudad(nextThreeDay)

   
    })

    
    client.send();
  }, [URL])
  
  if(climaCiudad.length > 1){
    return climaCiudad;
  }
  return climaCiudad;
}

export default ClimaNextDay
