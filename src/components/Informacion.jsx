import React from "react";
import {Link} from 'react-router-dom';
import useFetch from './../hook/useFetch';
import './../css/Informacion.css';
const image_api = "https://image.tmdb.org/t/p/w500";

export default function Informacion({data,movie}){
    let {stars,numberOfReviews}=movie;
    if(data==undefined) return <div className="container-informacion">Cargando...</div>;
 
    let {genres,poster_path,title}=data;
  

    return(
        <div className="container__informacion" >
            <div className="informacion__imagen">
              <img className="img_poster" src={image_api + poster_path} alt={title} />
            </div>
            <div className="informacion__body">
                <h1>{title}</h1>
                <div className='movie__stars'>{Number.isNaN(Number(stars)/Number(numberOfReviews))?0:(stars/numberOfReviews).toFixed(1)}</div>
                <ul>
                </ul>
            </div>
        </div>
    );
    
}

/*

    let inf=data;
    if(inf==undefined) return <div>Cargando...</div>;
    console.log(inf);
    console.log(inf.response)
    if(inf.response=='true'){
        console.log("carga 1");
        let {data,isPending,error}=useFetch(`https://www.omdbapi.com/?i=${inf.Search[0].imdbID}&ploy=full&apikey=f160fc54`);
        return(
            <div>Carga completa</div>
        );
        
    }else{
        let {data,isPending,error}=useFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1`);
        if(data==undefined) return <div>Cargando...</div>;
        console.log("carga 2");
        return(
            <div>Carga completa</div>
        );
    }


*/