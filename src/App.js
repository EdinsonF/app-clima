import ClimaProvider from "./Components/context/ClimaProvider";
import Master from "./Components/Master";


function App() {
  return (
   
    <ClimaProvider>
      <Master/>
    </ClimaProvider>

  
  );
}

export default App;
