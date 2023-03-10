import React from 'react'

const Estudiante = ({estudiante,setEstudiante}) => {
  const {nombre,carrera,semestre,promedio} = estudiante;
  return (
    <div className='mt-2 mb-3 px-3 py-3 rounded-md shadow-lg bg-[#eaf4f4]'>
      <p className='font-bold mb-2 uppercase'>Nombre: <span className='font-normal normal-case ml-3'>{nombre}</span></p>
      <p className='font-bold mb-2 uppercase'>Carrera: <span className='font-normal normal-case ml-3'>{carrera}</span></p>
      <p className='font-bold mb-2 uppercase'>Semestre: <span className='font-normal normal-case ml-3'>{semestre}</span></p>
      <p className='font-bold mb-2 uppercase'>Promedio: <span className='font-normal normal-case ml-3'>{promedio}</span></p>      
      <div className='flex justify-between'>
        <button
        type='button'
        className='py-2 px-4 text-white bg-rose-400 hover:bg-rose-700 rounded-md'
        onClick={()=>setEstudiante(estudiante)}
        >MODIFICAR</button>

<button
        type='button'
        className='py-2 px-4 text-white bg-green-400 hover:bg-green-700 rounded-md'
        >ELIMINAR</button>
        
      </div>
    </div>
  )
}

export default Estudiante