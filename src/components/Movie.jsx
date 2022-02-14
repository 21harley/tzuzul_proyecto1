import React from "react";
import {Link} from 'react-router-dom';
const image_api = "https://image.tmdb.org/t/p/w500";

const Movie = ({movie:movie}) =>{
  let {poster_path,title,id}=movie;
  return(
    <div className="movie">
      <img src={image_api + poster_path} alt={title}/>
        <div className="movie-header">
        <Link to={"/details/"+id}><h3 className='movie__title'>{title}</h3></Link>
        {/* <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span> */}
    </div>
  </div>
  );
}

export default Movie;

