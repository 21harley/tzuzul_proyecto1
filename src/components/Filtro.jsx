import React from 'react'
import '../css/filtro.css'

export default function Filtro(setActiveGenre, activeGenre, setFiltered, movies) {
    
  return (
      
    <div className='filter-container'>
        <button >All</button>
        <button >Comedia</button>
        <button >Accion</button>
    </div>
  )
}
