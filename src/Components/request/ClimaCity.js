/* peticiones a la api */
import  { useState, useEffect } from 'react'



 function  ClimaCity(ciudad) {

    const [climaCiudad, setClimaCiudad] = useState({});
    const [pending, setPending] = useState(true);

    const keyApi = 'dd91a5392f74fd6bf1e8c772fd426702';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&   units=metric&appid=${keyApi}`;

   
    useEffect(() => {
      const client = new XMLHttpRequest();
      client.open('GET', URL);

      client.addEventListener('load', (data) => {
      const result = JSON.parse(data.currentTarget.responseText);
      setClimaCiudad({   
          id          : result?.id,
          humidity    : result?.main.humidity,
          name        : result?.name,
          temp        : result?.main.temp,
          weather     : result?.weather[0].main,
          icon        : result?.weather[0].icon,
          description : result?.weather[0].description,
          wind        : result?.wind.speed,
          country     : result?.sys.country
      })

      setPending(false);
      })

      
      client.send();
    }, [URL])

    return {climaCiudad, pending}
}

export default ClimaCity
