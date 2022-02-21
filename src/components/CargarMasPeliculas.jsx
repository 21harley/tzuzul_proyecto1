import React,{useContext} from 'react';
import { moviesContext } from "../context/MoviesContext";
 const CargarMasPeliculas=()=>{
    const { setPagina,pagina,totalPagina } = useContext(moviesContext);
    let limite=(totalPagina<500)?totalPagina:500;
    if(totalPagina>500){

    }
  return(
      <>
            <div className='margin-btn-cargar-mas'>
                <div className='margin-btn-pagi'>
                {(pagina>=15)?<button  className={"btn-cargar-mas"} onClick={()=>{setPagina(1)}}>{"<<"}</button>:""}
               {(pagina>5 && (pagina-5>0))?<button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina-5)}}>{"<"}</button>:""}
               {(pagina>1 && (pagina-1>0))?<button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina-1)}}>{"-"}</button>:""}
               
               <button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+((pagina<(limite-5))?0:-4))}}>{pagina+((pagina<limite-5)?0:(-4))}</button>
               <button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+((pagina<(limite-5))?1:-3))}}>{pagina+((pagina<limite-5)?1:(-3))}</button>
               <button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+((pagina<(limite-5))?2:-2))}}>{pagina+((pagina<limite-5)?2:(-2))}</button>
               <button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+((pagina<(limite-5))?3:-1))}}>{pagina+((pagina<limite-5)?3:(-1))}</button>
               <button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+((pagina<(limite-5))?4:0))}}>{pagina+((pagina<limite-5)?4:0)}</button>

               {(pagina+1<=limite)?<button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+1)}}>{"+"}</button>:""}
               
               {(pagina+5<=limite)?<button  className={"btn-cargar-mas"} onClick={()=>{setPagina(pagina+5)}}>{">"}</button>:""}
               {(pagina<limite)?<button  className={"btn-cargar-mas"} onClick={()=>{setPagina(limite)}}>{">>"}</button>:""}
                </div>
            </div>
      </>
  )
}
export default CargarMasPeliculas;