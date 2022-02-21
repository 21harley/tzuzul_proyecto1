import React,{useContext} from 'react'
import { moviesContext } from "../context/MoviesContext";
import '../css/filtro.css'

export default function Filtro() {
  const { consulta,setConsulta,setPagina,pagina } = useContext(moviesContext);
  const armarConsulta=(valor)=>{
    console.log("Cambio 1")
    setConsulta(valor)
    setPagina(1);
  }
  const consultaAll=()=>{
    setConsulta("");
    setPagina(1);
  }
  const validar=(a,b)=> a==b;
  return (
    
    <div className='filter-container'>
        <button className={"btn__filtro "+(validar(consulta,"")?"active":"")} onClick={()=>{consultaAll()}} >All</button>
        <button className={"btn__filtro "+(validar(consulta,35)?"active":"")} onClick={()=>{armarConsulta(35)}} >Comedia</button>
        <button className={"btn__filtro "+(validar(consulta,28)?"active":"")} onClick={()=>{armarConsulta(28)}} >Accion</button>
    </div>
  )
}
