import React from "react";
import {Link} from 'react-router-dom';
import '../css/movies.css';
import Estrellas from "./Estrellas";
const image_api = "https://image.tmdb.org/t/p/w500";

const Movie = ({movie:movie,tipo}) =>{
  let {poster_path,title,id,stars,numberOfReviews}=movie;
  let valorEstrellas=Number.isNaN(Number(stars)/Number(numberOfReviews))?0:(stars/numberOfReviews).toFixed(1);
  //console.log(movie,"pelicula",typeof stars,tipo)

    return(
      <div className="movie">
        <Link className="link__movie" title={title+"\n Click Detalles"} to={"/details/"+id}>
          <div className="modal__name">Detalles</div>
          <div className='movie__stars'><Estrellas valor={valorEstrellas}/> </div>
          <img className='img' src={image_api + poster_path} alt={title} />
          <div className="movie__titulo">{title}</div>
         </Link>
      </div>
      );

}

export default Movie;
/*
      <div className="movie-header">
        <h3>Info</h3>
      </div>
      */
        {/* <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span> */}

