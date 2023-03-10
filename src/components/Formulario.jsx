import React, { useEffect, useState } from 'react'


const Formulario = ({estudiante,estudiantes,setEstudiantes}) => {
  
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [promedio, setPromedio] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {

    if( Object.keys(estudiante).length > 0){
      setNombre(estudiante.nombre)
      setCarrera(estudiante.carrera)
      setSemestre(estudiante.semestre)
      setPromedio(estudiante.promedio)
    }

  }, [estudiante])
  

  const generarID = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
  }

  const manejadorSubmit = (e) => {
      e.preventDefault();
      if( [nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
        console.log('no se permiten vacios...')
        setError(true);
        return;
      } 

      setError(false);

      const objetoEstudiante = {
        id: generarID(),
        nombre,
        carrera,
        semestre,
        promedio
      }
      setEstudiantes([...estudiantes,objetoEstudiante])
      limpiar();
    }

    const limpiar = ()=> {
      setNombre('');
      setCarrera('');
      setSemestre('');
      setPromedio('')
    }

  return (
    <div className='p-[20px] md:w-1/2 lg:w-2/5 bg-[#8e7dbe] rounded-md'>
        <h1 className='font-bold text-center text-xl'>Registrar Estudiantes</h1>
        <h2 className='font-bold text-center'>Agrega y Administra</h2>
        <form 
          onSubmit={manejadorSubmit}
        >
              { error && (<div className='bg-red-800 font-bold rounded-md text-center mt-4 p-2'>
                <p>Llenar todos los campos</p>
                </div>)}
              <div>
                <label 
                  className='block
                  mb-2
                  mt-2'
                >Nombre Estudiante</label>
                <input
                  type="text"
                  placeholder='Nombre Completo'
                  className='border-2 p-1 w-full rounded-md mb-4 text-gray-800'
                  value={nombre}
                  onChange = { (e) => setNombre(e.target.value)}
                  />
              </div>
              <div>
                <label 
                  className='block
                  mb-2'
                >Carrera</label>
                <input
                  type="text"
                  placeholder='Carrera'
                  className='border-2 p-1 w-full rounded-md mb-4 text-gray-800'
                  value={carrera}
                  onChange = { (e) => setCarrera(e.target.value)}
                  />
              </div>

              <div>
                <label 
                  className='block
                  mb-2'
                >Semestre</label>
                <input
                  type="text"
                  placeholder='Semestre'
                  className='border-2 p-1 w-full rounded-md mb-4 text-gray-800'
                  value={semestre}
                  onChange = { (e) => setSemestre(e.target.value)}
                  />
              </div>
              <div>
                <label 
                  className='block
                  mb-2'
                >Promedio</label>
                <input
                  type="text"
                  placeholder='Promedio'
                  className='border-2 p-1 w-full rounded-md mb-4 text-gray-800'
                  value={promedio}
                  onChange = { (e) => setPromedio(e.target.value)}
                  />
              </div>

              <div>
                <input 
                  type="submit"
                  className='bg-[#bdb2ff] text-white font-bold w-full rounded-md p-2 uppercase hover:bg-[#fffc] hover:text-black cursor-pointer'
                  value='Agregar estudiante'
                />
              </div>
              
        </form>


    </div>
  )
}

export default Formulario