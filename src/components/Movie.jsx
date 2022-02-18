import React from "react";
import {Link} from 'react-router-dom';
import '../css/movies.css';
const image_api = "https://image.tmdb.org/t/p/w500";

const Movie = ({movie:movie}) =>{
  let {poster_path,title,id}=movie;
  console.log(movie)
  return(
  <div className="movie">
    <Link className="link__movie" title="Click Detalles" to={"/details/"+id}>
      <div className="modal__name">Detalles</div>
      <div className='movie__stars'>{isNaN(movie.rating/movie.numberOfReviews)?0:movie.rating/movie.numberOfReviews}</div>
      <img class='img' src={image_api + poster_path} alt={title} />
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

