import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listado from "./components/Listado"

function App() {

  //Es para tener la lista de estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  //Aquí se almacena el estudiante a modificar
  const [estudiante, setEstudiante] = useState({});

  return (
  <div className="container mx-auto">
    <Header/>

    <div className="mt-12 md:flex gap-3">
      <Formulario
        estudiantes={estudiantes}
        setEstudiantes={setEstudiantes}
        estudiante={estudiante}
      />
      <Listado 
        estudiantes={estudiantes}
        setEstudiante={setEstudiante}
       
      />
    </div>
  </div>

  )
}

export default App
