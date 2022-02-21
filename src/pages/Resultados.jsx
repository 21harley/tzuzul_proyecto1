import React, { useContext, useEffect, useRef , useState } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Movie from '../components/Movie';
import { moviesContext } from '../context/MoviesContext';
import useFetch from './../hook/useFetch';
import "./../css/resultados.css";

export default function Resultados(){
   const {id} = useParams();
 
   if(id==undefined){
      return <Navigate to="/notfound"/>
    }
    
    let {data}=useFetch(`https://www.omdbapi.com/?s=${id}&apikey=f160fc54`);
    
    useEffect(()=>{
      window.scroll({
        top: 0,
        left: 0,
      });
    },[])
     console.log(data)
    if(data!=null && data!=undefined){
       if(data){
          console.log(data);
         return (
            <>
             <Navbar/>
             <div className='main-resultados'>
                 <div>
                    Carga Completa :D {console.log(data)}
                    <ul>
                    {data.Search.map((el)=>{
                        return <li key={el.imdbID} className="item__resultados">
                           <div>
                              <p>Titulo:{el.Title}</p>
                              <p>Año:{el.Year}</p>
                           </div>
                           <div>
                              <img src={el.Poster} className="img__poster"></img>
                           </div>
                        </li>
                     })}
                    </ul>
                  </div>
             </div>
             <Footer/>
            </>
         )
       }else{
         <>
         <Navbar/>
         <div className='main-resultados'>
            <div className="center-NotFound">
               <div className="NotFound"></div>
            </div>
         </div>
         <Footer/>
        </>         
       }
    }else{
      return (
         <>
          <Navbar/>
          <div className='main-resultados'>
              <div>Cargando...</div>
          </div>
          <Footer/>
         </>
      )
    }
}