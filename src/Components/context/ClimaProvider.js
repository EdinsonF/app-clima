
import React, { createContext} from 'react'
import ClimaCity from '../request/ClimaCity';


export const climaContext = createContext();

function ClimaProvider({children}) {


  const {climaCiudad: bogotaDay, pending} = ClimaCity('bogota');
  const {climaCiudad: parisDay, pending: pending2} = ClimaCity('paris');
  const {climaCiudad: caracasDay, pending: pending3} = ClimaCity('caracas');

  const paris_caracas = [parisDay, caracasDay]
  
  
  if(pending || pending2 || pending3) return null;

  return (
    <climaContext.Provider
    value={{
      bogotaDay,
      paris_caracas
    }}
    >

    {children}
    </climaContext.Provider>
  )
}

export default ClimaProvider
