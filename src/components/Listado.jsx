import Estudiante from './Estudiante'

const Listado = ({estudiantes,setEstudiante}) => {
  
  return (
    <div className='p-[20px] md:w-1/2 lg:w-3/5 bg-[#8e7dbe] rounded-md h-screen overflow-y-scroll'>
    
    <h1 className='font-bold text-center text-xl'>Listado de Estudiantes</h1>
    <h2 className='font-bold text-center'>Administra Estudiantes</h2>
    
    {
      estudiantes.map((estudiante) => 
          <Estudiante 
            key={estudiante.id} 
            estudiante={estudiante}
            setEstudiante={setEstudiante}
          />
      )
    }
    

    </div>
  )
}

export default Listado