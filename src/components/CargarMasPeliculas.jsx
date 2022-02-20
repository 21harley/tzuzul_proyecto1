import React,{useContext} from 'react';
import { moviesContext } from "../context/MoviesContext";
 const CargarMasPeliculas=()=>{
    const { setPagina,pagina } = useContext(moviesContext);
  return(
      <>
            <div className='margin-btn-cargar-mas'>
               <button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+1)}}>Cargar mas peliculas</button>
            </div>
      </>
  )
}
export default CargarMasPeliculas;